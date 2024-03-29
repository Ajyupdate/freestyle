


import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import { signIn } from "next-auth/react";
import { useToast } from "@chakra-ui/react";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const authOptions: NextAuthOptions = {
 
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // username: {
        //   label: "Username",
        //   type: "text",
        //   placeholder: "jsmith",
        // },
        // password: {
        //   label: "Password",
        //   type: "password",
        // },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const res = await fetch(`${API_ENDPOINT}seller/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        
        const user = await res.json();
   
        console.log({ user });

        if (res.ok && user) {
          
          return user;
        } else return null
      },
    }),
  ],
secret: "catchmeifyoucan",

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};

export default NextAuth(authOptions);
