import { redirect } from 'next/navigation'
import LoginForm from '../_components/LoginForm'
import authManager from '@/src/auth'

export default async function Page() {

    const user = await authManager.authenticate()
    if (user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
    }

    return (
        <div className={`py-12 min-h-screen container mx-auto flex items-center justify-center`}>
            <div className={`max-w-screen-sm w-full mx-auto border border-neutral-600 rounded-2xl shadow px-8 py-8`}>
                <h1 className={`font-serif text-5xl leading-none font-bold text-center`}>Members Login</h1>
                <LoginForm />
            </div>
        </div>
    )
}