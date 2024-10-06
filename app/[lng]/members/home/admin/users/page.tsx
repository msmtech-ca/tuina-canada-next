import Button from "@/app/_components/Button"
import DataTable from "@/app/[lng]/members/_components/DataTable"
import prisma from "@/src/database"

export default async function Page() {

    const users = await prisma.user.findMany({
        where: {
            deleted: false,
        }
    })

    const userData = users.map((user) => {
        return {
            ...user,
            userId: `1118-${user.userId}`,
            name: `${user.firstName} ${user.lastName}`,
        }
    })

    return (
        <div>
            <div className={`flex justify-between items-center w-full`}>
                <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Members`}</h1>
                <Button
                    to={`/members/home/admin/users/add`}
                    variant={`dark`}
                    size={`small`}
                >Add Member</Button>
            </div>
            <div className={`mt-4`}>
                <DataTable<typeof userData[0]>
                    headings={[
                        'No.',
                        'Name',
                        'Email',
                        'Phone',
                    ]}
                    data={userData}
                    displayDataKeys={[
                        'userId',
                        'name',
                        'email',
                        'phone',
                    ]}
                    manageable
                    resourcePath={`/members/home/admin/users`}
                    resourceKey={`id`}
                />
            </div>
        </div>
    )
}