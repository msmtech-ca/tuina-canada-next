// page.tsx
import { redirect } from 'next/navigation'
import LoginForm from '../_components/LoginForm'
import authManager from '@/src/auth'
import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {

    const user = await authManager.authenticate()
    if (user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
    }

    const { t } = await useTranslation(params.lng, 'members/login')

    return (
        <div className={`py-12 min-h-screen container mx-auto flex items-center justify-center`}>
            <div className={`max-w-screen-sm w-full mx-auto border border-neutral-600 rounded-2xl shadow px-8 py-8`}>
                <h1 className={`font-serif text-5xl leading-none font-bold text-center`}>
                    {t('title')}
                </h1>
                <LoginForm
                    lng={params.lng}
                    t={{
                        LoginForm: t('sections.LoginForm', {returnObjects: true})
                    }}
                />
            </div>
        </div>
    )
}
