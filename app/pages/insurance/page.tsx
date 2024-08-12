import Button from '@/app/_components/Button'
import Image from 'next/image'

export default function Page() {
    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                {/* <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/pexels-tima-miroshnichenko-6187430.jpg`}
                        width={1600}
                        height={900}
                        alt={`main-splash`}
                        className={`h-full w-full object-cover`}
                    />
                </div> */}
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Insurance</h1>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Verify Membership Status</h2>
                <p className={`mt-4`}>If you work with an insurance company, you can easily verify if a member is active by searching below using their membership number.</p>
                <div className={`h-full w-full min-h-16 my-8`}>
                    <iframe title="Embedded Content" name="htmlComp-iframe" width="100%" height="260px" src="https://tuina.msmtech.ca"></iframe>
                </div>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Benefits of Insurance Recognition</h2>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>For Members:</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Client Reimbursement: Our members are recognized by insurance companies, ensuring clients receive full or partial reimbursement for their treatments.</li>
                    <li>Credibility: Being part of an association recognized by insurance companies boosts your professional credibility.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>For Insurance Companies:</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Verification: Easily verify the active status of a Tui Na therapist through our online portal.</li>
                    <li>Trustworthy Network: Ensure your clients receive treatments from qualified and verified therapists.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>How to Use the Verification Tool</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Enter Membership Number: Input the membership number provided by the therapist.</li>
                    <li>Search: Click the search button to verify the member's active status.</li>
                    <li>View Results: The system will display the member's status, ensuring they are qualified and recognized.</li>
                </ul>
                <div className={`mt-12 w-full flex justify-center items-center`}>
                    <Button
                        to={`/members/register`}
                        variant={`dark`}
                    >Become a member today</Button>
                </div>
            </div>
        </div>
    )
}