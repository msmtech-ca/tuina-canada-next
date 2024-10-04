import Button from '@/app/_components/Button'
import { unhookedTranslation, useTranslation } from '@/app/_components/i18n'
import { fallbackLng } from '@/app/_components/i18n/settings'
import { GenerateMetaDataProps } from '@/src/types'
import { languages } from '@/app/_components/i18n/settings'
import { ResolvingMetadata, Metadata } from 'next'

export async function generateMetadata({ params, searchParams }: GenerateMetaDataProps, parent: ResolvingMetadata): Promise<Metadata> {

    // read route params
    const handle = 'insurance'
    const lng = params.lng
    const { t } = await unhookedTranslation(lng, `pages/${handle}`)
    const alternatePages: {[key: string]: any} = {}
    for (const lang of languages) {
        alternatePages[`${lang}` as string] = `/${lang}/pages/${handle}`
    }

    return {
        title: t('meta.title'),
        alternates: {
            canonical: `/${fallbackLng}/pages/${handle}`,
            languages: alternatePages,
        }
    }
}

export default async function Page({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/insurance')

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                {/* Uncomment if you decide to include the image */}
                {/* <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
            <Image
                src={`/pexels-tima-miroshnichenko-6187430.jpg`}
                width={1600}
                height={900}
                alt={t('main_splash_alt')}
                className={`h-full w-full object-cover`}
            />
        </div> */}
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>
                    {t('insurance')}
                </h1>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('verify_membership_status')}
                </h2>
                <p className={`mt-4`}>{t('paragraph1')}</p>
                <div className={`h-full w-full min-h-16 my-8`}>
                    <iframe
                        title={t('iframe_title')}
                        name="htmlComp-iframe"
                        width="100%"
                        height="460px"
                        src="https://tuina.msmtech.ca"
                    ></iframe>
                </div>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('benefits_of_insurance_recognition')}
                </h2>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('for_members')}</h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'benefits_for_members', { returnObjects: true }, string[]>('benefits_for_members', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('for_insurance_companies')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'benefits_for_insurance_companies', { returnObjects: true }, string[]>('benefits_for_insurance_companies', { returnObjects: true }).map(
                        (item: string, index: number) => (
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('how_to_use_verification_tool')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'how_to_use_list', { returnObjects: true }, string[]>('how_to_use_list', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className={`mt-12 w-full flex justify-center items-center`}>
                    <Button
                        to={`/members/register`}
                        variant={`dark`}
                        lng={params.lng}
                    >
                        {t('become_member_today')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
