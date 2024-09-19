import { handleEditUserSubmit } from "@/app/actions"
import DeleteUserButton from "@/app/members/_components/DeleteUserButton"
import UsersForm from "@/app/members/_components/UsersForm"
import prisma from "@/src/database"
import { toInputDate } from "@/src/lib/utils"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {

    const userData = await prisma.user.findFirst({
        where: {
            id: params.id,
        },
        include: {
            planSubscription: true,
        }
    })

    if (!userData) {
        throw new Error('User not found!')
    }

    const plans = await prisma.plan.findMany({
        where: {
            deleted: false,
        }
    })


    return (
        <div>
            <Link href={`/members/home/admin/users`} className={`mb-4`}>Go back</Link>
            <div className={`flex justify-between items-center`}>
                <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Member Information`}</h1>
                <DeleteUserButton resourceId={params.id} />
            </div>
            <div className={`mt-4`}>
                <UsersForm
                    initialState={{
                        ...userData,
                        resourceId: userData.id,
                        dateOfBirth: toInputDate(userData.dateOfBirth),
                        plan: userData.planSubscription?.planId || '',
                    }}
                    action={handleEditUserSubmit}
                    plans={plans}
                    submitText={`Save changes`}
                />
            </div>
        </div>
    )
}