// page.tsx
import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/privacy-policy')

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
                    {t('information_we_collect.title')}
                </h2>
                <p className={`mt-4`}>{t('information_we_collect.text')}</p>
                <p className={`mt-4`}>{t('information_we_collect.personal_information')}</p>
                <p className={`mt-4`}>{t('information_we_collect.payment_information')}</p>
                <p className={`mt-4`}>{t('information_we_collect.usage_data')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('how_we_use_your_information.title')}
                </h2>
                <p className={`mt-4`}>{t('how_we_use_your_information.text')}</p>
                <p className={`mt-4`}>{t('how_we_use_your_information.membership_management')}</p>
                <p className={`mt-4`}>{t('how_we_use_your_information.payment_processing')}</p>
                <p className={`mt-4`}>{t('how_we_use_your_information.website_improvement')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('data_sharing_and_security.title')}
                </h2>
                <p className={`mt-4`}>{t('data_sharing_and_security.text')}</p>
                <p className={`mt-4`}>{t('data_sharing_and_security.service_providers')}</p>
                <p className={`mt-4`}>{t('data_sharing_and_security.legal_requirements')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('cookies_and_tracking_technologies.title')}
                </h2>
                <p className={`mt-4`}>{t('cookies_and_tracking_technologies.text')}</p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('your_rights.title')}
                </h2>
                <p className={`mt-4`}>{t('your_rights.text')}</p>

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
                    {t('contact_information.email')}<br />
                </p>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('changes_to_privacy_policy.title')}
                </h2>
                <p className={`mt-4`}>{t('changes_to_privacy_policy.text')}</p>
            </div>
        </div>
    )
}
