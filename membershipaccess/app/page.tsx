'use client'

import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "./server/actions/getSession";
import { useEffect, useState } from "react";
import { Session } from "next-auth";


import { SessionProvider, signOut } from "next-auth/react";


export default function Home() {
  

  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    const getServerSession = async () => {
      const session = await getSession()
      if (!session) redirect('/api/auth/signin')
        setSession(session)
    }
    getServerSession()
    }, [])


  return (
    
      
    <div className="flex flex-col column items-center align-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Hello {session?.user?.name}</p>
      
      <p>id?: {session?.user?.id}</p>
      <p>{session?.user?.email}</p>
      <button className="rounded-lg border border-slate-300 hover:border-slate-400 px-2 py-1" onClick={() => signOut()}>Sign Out</button>
      {/* <button className="rounded-lg border border-slate-300 hover:border-slate-400 px-2 py-1" onClick={() => getServerSession()}>session update</button> */}
    </div>
    
    
  );
}
