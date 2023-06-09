import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
  getAccountByEmail,
  createGoogleAccount,
  getAccountGoogle,
} from "../../../lib/prisma/account";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "customSignIn",
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { password, email } = credentials as any;

        try {
          // check user existance
          const { user, error } = await getAccountByEmail(email);
          if (error) {
            throw new Error("Request cannot be processed");
          }
          if (!user) {
            throw new Error("No user Found with Email Please Sign Up...!");
          }
          const checkPassword = await compare(password, user.password);
          if (!checkPassword || user.email !== email) {
            throw new Error("Username or Password doesn't match");
          }
          return user;
        } catch (error: any) {
          throw new Error(error.message);
        }
        // incorrect password
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 10,
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account?.provider === "google") {
        const { user, error } = await getAccountGoogle(
          account.providerAccountId
        );
        token.sub = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async signIn({ user, account, profile }) {
      const isAllowedToSignIn = true;
      if (account?.provider === "google") {
        const { given_name, family_name } = profile as any;
        const data = {
          id: user.id,
          email: user.email,
          profile_name: user.name,
          first_name: given_name,
          last_name: family_name,
          prof_pic: user.image,
        };
        const { userFromDB, error } = await createGoogleAccount(data);
        if (userFromDB) {
          return true;
        }
        return "/";
      }
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};

export default NextAuth(authOptions);
