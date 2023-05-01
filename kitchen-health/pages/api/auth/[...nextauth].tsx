import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import khaccount from "../../../model/Schema";

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
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        connectMongo().catch((error) => {
          error: "Connection Failed";
        });
        const result = await khaccount.findOne({ username: username, password: password });
        if (!result) {
          throw new Error("No user found");
        }
        // need hashing and encryption!!!
        if (result.username === username, result.password === password) {
          throw new Error("Login Succeeded");
        }
        return null;
        // const { username, password } = credentials as any;
        // // login logic here
        // if (username !== "truuser" && password !== "trupass") {
        //   return null;
        // }
        // return { id: "1234" };
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
