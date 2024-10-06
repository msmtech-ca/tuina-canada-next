import Link from "next/link";
import prisma from "@/src/database";
import UsersForm from "@/app/[lng]/members/_components/UsersForm";
import { handleAddUserSubmit } from "@/app/actions";
import { titles, sexes, provinces, countries } from "@/src/lib/constants";
import { useTranslation } from "@/app/_components/i18n";
import { fallbackLng } from "@/app/_components/i18n/settings";

export default async function Page() {

    const plans = await prisma.plan.findMany({
        where: {
            deleted: false,
        }
    })

    const { t } = await useTranslation(fallbackLng, 'members/register')

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

    return (
        <div>
            <Link href={`/members/home/admin/users`} className={`mb-4`}>Go back</Link>
            <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Add new member`}</h1>
            <div className={`mt-4`}>
                <UsersForm
                    action={handleAddUserSubmit}
                    plans={plans}
                    submitText={`Add member`}
                    options={{
                        titles: mappedTitles,
                        sexes: mappedSexes,
                        provinces: mappedProvinces,
                        countries: mappedCountries,
                    }}
                />
            </div>
        </div>
    )
}