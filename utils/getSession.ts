import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const getSession = async () => {
    const session = await getServerSession(authOptions)

    if(session){
        return session;
    }else{
        return null
    }
}