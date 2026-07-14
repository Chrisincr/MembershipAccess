// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session.user object
   */
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  /**
   * Extends the built-in user object passed during sign-in
   */
  interface User {
    role?: string;
  }
}
