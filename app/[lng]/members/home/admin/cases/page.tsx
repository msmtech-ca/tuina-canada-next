import Button from "@/app/_components/Button"
import DataTable from "@/app/[lng]/members/_components/DataTable"
import prisma from "@/src/database"
import { Case } from "@prisma/client"

export const dynamic = "force-dynamic";

export default async function Page() {

    const cases = await prisma.case.findMany({
        where: {
            deleted: false,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    const caseData = cases.map((data) => {
        return {
            ...data,
            createdAt: data.createdAt.toLocaleString(),
            updatedAt: data.updatedAt.toLocaleString(),
        }
    })

    return (
        <div>
            <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Cases`}</h1>
            <div className={`mt-4`}>
                <DataTable<typeof caseData[0]>
                    headings={[
                        'Date',
                        'Status',
                        'Name',
                        'Email',
                        'Subject',
                    ]}
                    data={caseData}
                    displayDataKeys={[
                        'createdAt',
                        'status',
                        'name',
                        'email',
                        'subject',
                    ]}
                    manageable
                    resourcePath={`/members/home/admin/cases`}
                    resourceKey={`id`}
                />
            </div>
        </div>
    )
}