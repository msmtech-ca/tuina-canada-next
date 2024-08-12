import ContactForm from './_components/ContactForm'

export default function Page() {

    return (
        <div className={`py-12 container mx-auto`}>
            <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Contact</h1>
            <div className={`mt-8 grid grid-cols-2 gap-12`}>
                <div>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>Office Address</h3>
                    <p className={`mt-4`}>
                        Canadian Tui Na Association<br />
                        123 Wellness Street<br />
                        Toronto, ON, M1A 2B3<br />
                        Canada
                    </p>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>Office Hours</h3>
                    <p className={`mt-4`}>
                        Monday to Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 3:00 PM<br />
                        Sunday: Closed
                    </p>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>Phone</h3>
                    <p className={`mt-2`}>+1 (123) 456-7890</p>
                    <h3 className={`mt-2 font-serif text-xl leading-none font-bold`}>Email</h3>
                    <p className={`mt-2`}>info@tuinaducanada.com</p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}