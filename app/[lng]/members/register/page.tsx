// page.tsx

import authManager from "@/src/auth"
import { redirect } from "next/navigation"
import RegistrationsForm from "../_components/RegistrationsForm"
import Image from "next/image"
import { useTranslation } from "@/app/_components/i18n"
import { provinces, countries, sexes, titles } from "@/src/lib/constants"

export default async function Page({ params }: { params: { lng: string } }) {
    const user = await authManager.authenticate()
    if (user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
    }

    const { t } = await useTranslation(params.lng, 'members/register')
    const { t: tContact } = await useTranslation(params.lng, 'pages/contact')

    const mappedTitles = titles.map(value => ({
        value,
        label: t(`sections.RegistrationsForm.form.titles.${value}`),
    }))

    const mappedSexes = sexes.map(value => ({
        value,
        label: t(`sections.RegistrationsForm.form.sexes.${value}`),
    }))

    const mappedProvinces = provinces.map(value => ({
        value,
        label: t(`sections.RegistrationsForm.form.provinces.${value}`),
    }))

    const mappedCountries = countries.map(value => ({
        value,
        label: t(`sections.RegistrationsForm.form.countries.${value}`),
    }))

    const registrationsFormTranslations = t('sections.RegistrationsForm', {
        returnObjects: true,
        interpolation: { escapeValue: false },
        symbol: '<span class="text-red-600">*</span>',
    })

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/engin-akyurt-IxX6XrMfu4U-unsplash.jpg`}
                        width={1600}
                        height={900}
                        alt={t('main_splash_alt')}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>
                    {t('start_registration')}
                </h1>
                <div className={`mt-4`}>
                    <RegistrationsForm
                        lng={params.lng}
                        t={{
                            RegistrationsForm: registrationsFormTranslations,
                            ContactForm: tContact('sections.ContactForm', { returnObjects: true }),
                        }}
                        options={{
                            titles: mappedTitles,
                            sexes: mappedSexes,
                            provinces: mappedProvinces,
                            countries: mappedCountries,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
