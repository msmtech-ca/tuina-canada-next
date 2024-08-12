import Button from '@/app/_components/Button'
import Image from 'next/image'

export default async function Page() {
    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/pexels-olly-3760262.jpg`}
                        width={1600}
                        height={900}
                        alt={`main-splash`}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Our Objective</h1>
                <p className={`mt-4`}>The Canadian Tui Na Association is a non-profit organization dedicated to enhancing the recognition and credibility of Tui Na therapists while ensuring the public receives high-quality services.</p>
                <p className={`mt-4`}>Tui Na is a therapeutic massage technique that is a core component of Traditional Chinese Medicine (TCM), practiced in China for thousands of years. It involves applying firm pressures along energy meridians using various parts of the hands and elbows, reducing pain and rebalancing the body's energy.</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Benefits of Membership</h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Insurance Recognition: Our members are recognized by insurance companies, enabling clients to receive full or partial reimbursement for their treatments.</li>
                    <li>Professional Credibility: Gain the trust and recognition needed to stand out in the industry.</li>
                    <li>Quality Assurance: We ensure our members possess the necessary skills and professional training to practice with transparency and confidence.</li>
                </ul>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Commitment to Quality Care</h2>
                <p className={`mt-4`}>Both the Canadian Tui Na Association (A.T.C.) and its members are committed to promoting the well-being of individuals by offering high-quality treatments. Our shared goal is to enhance the overall health and satisfaction of our clients.</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Comprehensive Support for Members</h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Professional Liability Insurance: Members have access to affordable professional liability insurance.</li>
                    <li>Official Receipts: Members can issue official receipts recognized by insurance companies, facilitating client reimbursements.</li>
                    <li>Continuous Professional Development: We provide ongoing training and resources to ensure our members stay updated with the latest techniques and practices.</li>
                </ul>
                <p className={`mt-8`}>Join the Canadian Tui Na Association and benefit from the support, recognition, and resources needed to succeed in your practice.</p>
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