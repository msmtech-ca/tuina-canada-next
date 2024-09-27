// page.tsx

import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/terms-conditions')

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>
                    {t('title')}
                </h1>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('introduction.title')}
                </h2>
                <p className={`mt-4`}>{t('introduction.text')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('use_of_the_website.title')}
                </h2>
                <p className={`mt-4`}>{t('use_of_the_website.eligibility')}</p>
                <p className={`mt-4`}>{t('use_of_the_website.account_responsibility')}</p>
                <p className={`mt-4`}>{t('use_of_the_website.prohibited_conduct')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('membership_and_services.title')}
                </h2>
                <p className={`mt-4`}>{t('membership_and_services.membership_application')}</p>
                <p className={`mt-4`}>{t('membership_and_services.membership_benefits')}</p>
                <p className={`mt-4`}>{t('membership_and_services.payment')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('content_and_intellectual_property.title')}
                </h2>
                <p className={`mt-4`}>{t('content_and_intellectual_property.website_content')}</p>
                <p className={`mt-4`}>{t('content_and_intellectual_property.use_of_content')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('limitation_of_liability.title')}
                </h2>
                <p className={`mt-4`}>{t('limitation_of_liability.no_warranty')}</p>
                <p className={`mt-4`}>{t('limitation_of_liability.liability_limitation')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('governing_law.title')}
                </h2>
                <p className={`mt-4`}>{t('governing_law.text')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('changes_to_terms_and_conditions.title')}
                </h2>
                <p className={`mt-4`}>{t('changes_to_terms_and_conditions.text')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('contact_us.title')}
                </h2>
                <p className={`mt-4`}>{t('contact_us.text')}</p>
                <p className={`mt-8`}>
                    {t('contact_information.name')}<br />
                    {t('contact_information.address_line1')}<br />
                    {t('contact_information.address_line2')}<br />
                    {t('contact_information.country')}<br />
                    {t('contact_information.phone')}<br />
                    {t('contact_information.email')}
                </p>
            </div>
        </div>
    )
}
