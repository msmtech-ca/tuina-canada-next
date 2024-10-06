import ChangeCaseStatusButton from "@/app/[lng]/members/_components/ChangeCaseStatusButton"
import DeleteCaseButton from "@/app/[lng]/members/_components/DeleteCaseButton"
import prisma from "@/src/database"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {

    const caseData = await prisma.case.findFirst({
        where: {
            id: params.id,
            deleted: false,
        }
    })

    return (
        <div>
            <Link href={`/members/home/admin/cases`} className={`mb-4`}>Go back</Link>
            <div className={`flex justify-between items-center`}>
                <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Case Information`}</h1>
                <DeleteCaseButton resourceId={params.id} />
            </div>
            <div className={`mt-8 grid grid-cols-12 gap-16`}>
                <div className={`col-span-4`}>
                    <div>
                        <h2 className={`font-serif text-2xl leading-none font-bold`}>{`Name: `}{caseData?.name}</h2>
                        <p className={`mt-2 text-xl`}>{`Email: `}{caseData?.email}</p>
                        <p className={`text-xl`}>{`Phone: `}{caseData?.phone}</p>
                    </div>
                    <div className={`mt-4 pt-4 border-t border-t-neutral-400`}>
                        <div className={`font-bold`}>Received on</div>
                        <div>{caseData?.createdAt?.toLocaleTimeString()}</div>
                    </div>
                </div>
                <div className={`col-span-8`}>
                    <div>
                        <h3 className={`font-serif text-2xl leading-none font-bold`}>Case details</h3>
                        <p className={`mt-1 leading-tight`}>
                            <span className={`font-medium`}>Case status: </span>
                            <span>{caseData?.status}</span> c 
                        </p>
                        <div className={`mt-4 pt-4 border-t border-t-neutral-400`}>
                            <div className={`font-bold`}>Subject</div>
                            <p className={`leading-tight`}>{caseData?.subject}</p>
                            <div className={`font-bold mt-4`}>Message</div>
                            <p className={`leading-tight`}>{caseData?.message}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ChangeCaseStatusButton
                resourceId={caseData?.id || ''}
                currentStatus={caseData?.status || 'NEW'}
            />
        </div>
    )
}