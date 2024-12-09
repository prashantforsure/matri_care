import HomePage from "@/components/Homepage";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";



export default async function Home() {
    const session = await getServerSession(authOptions)
  
  return <HomePage  />

}