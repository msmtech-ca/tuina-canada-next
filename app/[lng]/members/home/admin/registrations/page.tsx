import Button from "@/app/_components/Button"
import DataTable from "@/app/[lng]/members/_components/DataTable"
import prisma from "@/src/database"
import { Case } from "@prisma/client"

export const dynamic = "force-dynamic";

export default async function Page() {

    const regisrations = await prisma.registration.findMany({
        where: {
            deleted: false,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    const regisrationData = regisrations.map((data) => {
        return {
            ...data,
            name: `${data.firstName} ${data.lastName}`,
            createdAt: data.createdAt.toLocaleString(),
            updatedAt: data.updatedAt.toLocaleString(),
        }
    })

    return (
        <div>
            <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Registrations`}</h1>
            <div className={`mt-4`}>
                <DataTable<typeof regisrationData[0]>
                    headings={[
                        'Date',
                        'Status',
                        'Name',
                        'Email',
                        'Phone',
                    ]}
                    data={regisrationData}
                    displayDataKeys={[
                        'createdAt',
                        'status',
                        'name',
                        'email',
                        'phone',
                    ]}
                    manageable
                    resourcePath={`/members/home/admin/registrations`}
                    resourceKey={`id`}
                />
            </div>
        </div>
    )
}