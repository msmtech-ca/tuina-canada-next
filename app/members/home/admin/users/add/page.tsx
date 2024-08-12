import AddUserForm from "@/app/members/_components/AddUserForm";
import Link from "next/link";
import prisma from "@/src/database";

export default async function Page() {

    const plans = await prisma.plan.findMany({
        where: {
            deleted: false,
        }
    })

    return (
        <div>
            <Link href={`/members/home/admin/users`} className={`mb-4`}>Go back</Link>
            <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Add new member`}</h1>
            <div className={`mt-4`}>
                <AddUserForm plans={plans} />
            </div>
        </div>
    )
}