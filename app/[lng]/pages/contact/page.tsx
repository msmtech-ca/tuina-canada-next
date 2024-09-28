import ContactForm from './_components/ContactForm'
import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {

    const { t } = await useTranslation(params.lng, 'pages/contact')

    return (
        <div className={`py-12 container mx-auto`}>
            <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>{t('contact')}</h1>
            <div className={`mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12`}>
                <div>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('office_address')}</h3>
                    <p className={`mt-4`}>
                        {t('association_name')}<br />
                        {t('address_line1')}<br />
                        {t('address_line2')}<br />
                        {t('country')}
                    </p>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('office_hours')}</h3>
                    <p className={`mt-4`}>
                        {t('hours_weekdays')}<br />
                        {t('hours_saturday')}<br />
                        {t('hours_sunday')}
                    </p>
                    <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('phone')}</h3>
                    <p className={`mt-2`}>{t('phone_number')}</p>
                    <h3 className={`mt-2 font-serif text-xl leading-none font-bold`}>{t('email')}</h3>
                    <p className={`mt-2`}>{t('email_address')}</p>
                </div>
                <div>
                    <ContactForm
                        lng={params.lng}
                        t={{
                            ContactForm: t('sections.ContactForm', {returnObjects: true})
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
