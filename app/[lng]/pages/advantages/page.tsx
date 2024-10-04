import Button from '@/app/_components/Button'
import Image from 'next/image'
import { unhookedTranslation, useTranslation } from '@/app/_components/i18n'
import { fallbackLng, languages } from '@/app/_components/i18n/settings'
import { ResolvingMetadata, Metadata,  } from 'next'
import { GenerateMetaDataProps } from '@/src/types'

export async function generateMetadata({ params, searchParams }: GenerateMetaDataProps, parent: ResolvingMetadata): Promise<Metadata> {

    // read route params
    const handle = 'advantages'
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
    const { t } = await useTranslation(params.lng, 'pages/advantages')

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/pexels-tima-miroshnichenko-6187430.jpg`}
                        width={1600}
                        height={900}
                        alt={t('main_splash_alt')}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>{t('our_advantages')}</h1>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage1.title')}</h2>
                <p className={`mt-4`}>{t('advantage1.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage2.title')}</h2>
                <p className={`mt-4`}>{t('advantage2.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage3.title')}</h2>
                <p className={`mt-4`}>{t('advantage3.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage4.title')}</h2>
                <p className={`mt-4`}>{t('advantage4.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage5.title')}</h2>
                <p className={`mt-4`}>{t('advantage5.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage6.title')}</h2>
                <p className={`mt-4`}>{t('advantage6.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage7.title')}</h2>
                <p className={`mt-4`}>{t('advantage7.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage8.title')}</h2>
                <p className={`mt-4`}>{t('advantage8.description')}</p>

                <h2 className={`mt-8 font-serif text-xl leading-none font-bold`}>{t('advantage9.title')}</h2>
                <p className={`mt-4`}>{t('advantage9.description')}</p>

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
