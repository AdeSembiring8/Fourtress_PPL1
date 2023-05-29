import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { getAccountByEmail } from "../../../lib/prisma/account";
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
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 10,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { id } = user as any;
        return { token, AccObj: id };
      } else {
        return token;
      }
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);
