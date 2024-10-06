import Select from '@/app/_components/Select';
import AcceptRegistrationStatusButton from '@/app/[lng]/members/_components/AcceptRegistrationStatusButton';
import DeleteRegistrationButton from "@/app/[lng]/members/_components/DeleteRegistrationButton"
import RejectRegistrationStatusButton from '@/app/[lng]/members/_components/RejectRegistrationStatusButton';
import prisma from "@/src/database"
import Link from "next/link"

export default async function Page({ params }: { params: { id: string } }) {

    const registration = await prisma.registration.findFirst({
        where: {
            id: params.id,
            deleted: false,
        }
    })

    return (
        <div>
            <Link href={`/members/home/admin/registrations`} className={`mb-4`}>Go back</Link>
            <div className={`flex justify-between items-center`}>
                <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Registration Information`}</h1>
                <DeleteRegistrationButton resourceId={params.id} />
            </div>
            <div className={`mt-8 grid grid-cols-12 gap-16`}>
                <div className={`col-span-4`}>
                    <div>
                        <h2 className={`font-serif text-2xl leading-none font-bold`}>{`${registration?.firstName} ${registration?.lastName}`}</h2>
                        <p className={`mt-2 text-xl`}>{registration?.email}</p>
                        <p className={`text-xl`}>{registration?.phone}</p>
                    </div>
                    <div className={`mt-4 pt-4 border-t border-t-neutral-400`}>
                        <div className={`font-bold`}>Received on</div>
                        <div>{registration?.createdAt?.toLocaleTimeString()}</div>
                    </div>
                </div>
                <div className={`col-span-8`}>
                    <h3 className={`font-serif text-2xl leading-none font-bold`}>Registration details</h3>
                    <p className={`mt-1 leading-tight`}>
                        <span className={`font-medium`}>Registration status: </span>
                        <span>{registration?.status}</span>
                    </p>
                    <div className={`mt-4 pt-4 border-t border-t-neutral-400`}>
                        <div className={`font-bold`}>Personal</div>
                        <p className={`leading-tight`}>
                            <span className={`font-medium`}>Title:</span> {registration?.title}<br />
                            <span className={`font-medium`}>Sex:</span> {registration?.sex}<br />
                            <span className={`font-medium`}>Date of birth:</span> {registration?.dateOfBirth.toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})}<br />
                        </p>
                        <div className={`font-bold mt-4`}>Address</div>
                        <p className={`leading-tight`}>
                            {`${registration?.address1}${registration?.address2 ? ` ` + registration?.address2 : ``}`}<br />
                            {`${registration?.city} ${registration?.province} ${registration?.zip}`}<br />
                            {`${registration?.country}`}<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className={`mt-12 flex items-center gap-8`}>
                <AcceptRegistrationStatusButton
                    resourceId={params.id}
                />
                <RejectRegistrationStatusButton
                    resourceId={params.id}
                />
            </div>
        </div>
    )
}