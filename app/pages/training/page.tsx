import Button from '@/app/_components/Button'
import Image from 'next/image'

export default function Page() {

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/engin-akyurt-IxX6XrMfu4U-unsplash.jpg`}
                        width={1600}
                        height={900}
                        alt={`main-splash`}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Training Program</h1>
                <p className={`mt-4`}>The Canadian Tui Na Association offers a comprehensive training program designed to equip therapists with the skills and knowledge necessary to provide high-quality Tui Na therapy. Our program ensures that members are well-prepared to meet the highest standards of professional practice.</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Program Overview</h2>
                <p className={`mt-4`}>Total Training Hours: 700 Hours</p>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>1. Introduction to Massage Therapy (125 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Anatomy: Understanding the human body structure.</li>
                    <li>Hygiene: Best practices for maintaining a clean and safe environment.</li>
                    <li>Pathology: Identifying and understanding common ailments.</li>
                    <li>Physiology: Studying body functions and their relevance to therapy.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>2. Theory and Practice of Massage Therapy (150 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Detailed Therapeutic Massage: In-depth techniques and applications.</li>
                    <li>Massage Techniques: Tui Na, Thai, Shiatsu, Swedish massage, and more.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>3. Tui Na and Medical Treatments (100 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Acupuncture Meridian Concepts: Principles of Yin Yang and Fuzang.</li>
                    <li>Foot Reflexology: Techniques and manipulation of foot massage.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>4. Reflexology (50 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Foot Reflex Zones: Techniques and applications for therapeutic results.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>5. Ethics and Legal Studies (25 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Code of Ethics: Understanding ethical guidelines and professional conduct.</li>
                    <li>Legal Case Studies: Analyzing real-world legal scenarios and implications.</li>
                    <li>Indications and Limits of Massage: Guidelines for safe practice.</li>
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>6. Practicum and Supervision (200 Hours)</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Supervised Practice: Hands-on practice under expert supervision.</li>
                    <li>Interview Techniques and Record Keeping: Best practices for client interactions and maintaining accurate records.</li>
                </ul>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Why Train with Us?</h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>Comprehensive Curriculum: Our training covers all essential aspects of Tui Na therapy.</li>
                    <li>Experienced Instructors: Learn from highly qualified and experienced professionals.</li>
                    <li>Hands-On Practice: Gain practical experience through supervised training sessions.</li>
                    <li>Professional Recognition: Our program is recognized by insurance companies, ensuring your qualifications are credible and trusted.</li>
                </ul>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Enroll Today</h2>
                <p className={`mt-4`}>Join our training program and become a certified Tui Na therapist. Equip yourself with the knowledge, skills, and confidence to excel in your practice.</p>
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