import Button from "@/app/_components/Button"
import DataTable from "@/app/members/_components/DataTable"
import prisma from "@/src/database"
import { User } from "@prisma/client"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {

    const user = await prisma.user.findFirst({
        where: {
            id: params.id,
        }
    })

    if (!user) {
        throw new Error('User not found!')
    }

    return (
        <div>
            <Link href={`/members/home/admin/users`} className={`mb-4`}>Go back</Link>
            <h1 className={`font-serif text-4xl leading-none font-bold`}>{`member: ${params.id}, ${user?.firstName}`}</h1>
        </div>
    )
}