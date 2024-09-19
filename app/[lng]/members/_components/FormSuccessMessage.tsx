import { TFunction } from "i18next"

interface FormSuccessMessageProps {
    t: { [key:string]: any }
}
export default function FormSuccessMessage({ t }: FormSuccessMessageProps) {

    const translations = t.ContactForm

    return (
        <div className={`h-full flex flex-col gap-4 items-center justify-center text-center`}>
            <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>{translations.form_success.title}</h2>
            <p className={`mt-4`}>{translations.form_success.message}</p>
        </div>
    )
}
