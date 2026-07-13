//import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
    providers: [
        // Add your authentication providers here
    ],
    secret: process.env.AUTH_SECRET,

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

