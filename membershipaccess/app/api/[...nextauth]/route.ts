//import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"
import google from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        
    ],
    secret: process.env.AUTH_SECRET,

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

