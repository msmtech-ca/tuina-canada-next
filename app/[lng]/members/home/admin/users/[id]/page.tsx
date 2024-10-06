import { handleEditUserSubmit } from "@/app/actions"
import DeleteUserButton from "@/app/[lng]/members/_components/DeleteUserButton"
import UsersForm from "@/app/[lng]/members/_components/UsersForm"
import prisma from "@/src/database"
import { toInputDate } from "@/src/lib/utils"
import Link from "next/link"
import { titles, sexes, provinces, countries } from "@/src/lib/constants"
import { fallbackLng } from "@/app/_components/i18n/settings"
import { useTranslation } from "@/app/_components/i18n"

export default async function Page({ params }: { params: { id: string } }) {

    const { t } = await useTranslation(fallbackLng, 'members/register')

    const userData = await prisma.user.findFirst({
        where: {
            id: params.id,
        },
        include: {
            planSubscription: true,
        }
    })

    if (!userData) {
        throw new Error('User not found!')
    }

    const plans = await prisma.plan.findMany({
        where: {
            deleted: false,
        }
    })

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
            <div className={`flex justify-between items-center`}>
                <h1 className={`font-serif text-4xl leading-none font-bold`}>{`Member Information`}</h1>
                <DeleteUserButton resourceId={params.id} />
            </div>
            <div className={`mt-4`}>
                <UsersForm
                    initialState={{
                        ...userData,
                        resourceId: userData.id,
                        dateOfBirth: toInputDate(userData.dateOfBirth),
                        plan: userData.planSubscription?.planId || '',
                    }}
                    action={handleEditUserSubmit}
                    plans={plans}
                    submitText={`Save changes`}
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