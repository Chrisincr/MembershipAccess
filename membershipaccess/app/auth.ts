import {NextAuthOptions} from "next-auth"
import google from "next-auth/providers/google"



export const authConfig: NextAuthOptions = {
    providers: [
        google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: { strategy: "jwt" },
    callbacks:{
        async jwt({token, account, profile}){

            console.log('STUFF IS HAPPENING in JWT', token, account)
            if (account && profile) {
                token.id = profile?.sub; // Google user ID
                token.accessToken = account.access_token;
            }
    return token;
        },
        async session({session, token}){
            console.log('STUFF IS HAPPENING', session)
            if(session?.user){
                console.log('session has user')
                session.user.id = token.sub as string; // Assign the Google user ID to the session
                //session.user.id = '78'
                console.log('session.user.id', session.user.id)
            }
            return session;
        }
    }
}