import type { NextApiRequest, NextApiResponse } from "next"
import { authConfig } from "@/app/auth"
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"
import google from "next-auth/providers/google"




const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }


