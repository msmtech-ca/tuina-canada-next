import Button from '@/app/_components/Button'
import Image from 'next/image'
import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/objective')

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/pexels-olly-3760262.jpg`}
                        width={1600}
                        height={900}
                        alt={t('main_splash_alt')}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>
                    {t('our_objective')}
                </h1>
                <p className={`mt-4`}>{t('paragraph1')}</p>
                <p className={`mt-4`}>{t('paragraph2')}</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('benefits_of_membership')}
                </h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>{t('benefits_list.insurance_recognition')}</li>
                    <li>{t('benefits_list.professional_credibility')}</li>
                    <li>{t('benefits_list.quality_assurance')}</li>
                </ul>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('commitment_to_quality_care')}
                </h2>
                <p className={`mt-4`}>{t('paragraph3')}</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('comprehensive_support_for_members')}
                </h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    <li>{t('support_list.professional_liability_insurance')}</li>
                    <li>{t('support_list.official_receipts')}</li>
                    <li>{t('support_list.continuous_professional_development')}</li>
                </ul>
                <p className={`mt-8`}>{t('paragraph4')}</p>
                <div className={`mt-12 w-full flex justify-center items-center`}>
                    <Button
                        to={`/members/register`}
                        variant={`dark`}
                    >
                        {t('become_member_today')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
