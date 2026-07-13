import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
    providers: [
        // Add your authentication providers here
    ],
    secret: process.env.AUTH_SECRET,

}


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        ...authOptions,
    })
}