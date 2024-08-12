import Button from '@/app/_components/Button'
import Image from 'next/image'

export default function Page() {
    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/pexels-tima-miroshnichenko-6187430.jpg`}
                        width={1600}
                        height={900}
                        alt={`main-splash`}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Our Advantages</h1>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>1. Non-Profit Organization</h2>
                <p className={`mt-4`}>As a non-profit organization, our members are exempt from taxes, resulting in substantial savings.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>2. Insurance Recognition</h2>
                <p className={`mt-4`}>The Canadian Tui Na Association (A.T.C.) is recognized by insurance companies, ensuring your clients receive the reimbursements they deserve.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>3. Membership Card</h2>
                <p className={`mt-4`}>Upon joining, you will receive a membership card for easy identification and benefits access.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>4. Professional Liability Insurance</h2>
                <p className={`mt-4`}>Members have access to affordable professional liability insurance, providing peace of mind and protection.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>5. Career Guidance</h2>
                <p className={`mt-4`}>We offer orientation services for members wishing to pursue additional training and professional development.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>6. Quick Processing</h2>
                <p className={`mt-4`}>We process applications within 48 hours of receipt, allowing new members to start practicing quickly.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>7. Dynamic Website</h2>
                <p className={`mt-4`}>Our regularly updated website (tuinaducanada.com) provides access for members and insurance companies for verification purposes.</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>8. Referral Discount</h2>
                <p className={`mt-4`}>Receive a $50 discount for each referral, applicable to your next membership renewal or the purchase of products (gels, examination paper, or receipts).</p>
                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>9. Flexible Payment Options</h2>
                <p className={`mt-4`}>Membership fees can be paid online, by check or cash at our office, offering convenient payment methods.</p>
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