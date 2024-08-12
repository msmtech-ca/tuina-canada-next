import authManager from "@/src/auth"
import { redirect } from "next/navigation"

export default async function Page() {

    const user = await authManager.authenticate()
    if (user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
    }

    return (
        <div>Members Signup page</div>
    )
}