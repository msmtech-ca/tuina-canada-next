import authManager from "@/src/auth"
import { redirect } from "next/navigation"
import RegistrationsForm from "../_components/RegistrationsForm"
import Image from "next/image"

export default async function Page() {

    const user = await authManager.authenticate()
    if (user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
    }

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/engin-akyurt-IxX6XrMfu4U-unsplash.jpg`}
                        width={1600}
                        height={900}
                        alt={`main-splash`}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>Start your Member Registration</h1>
                <div className={`mt-4`}>
                    <RegistrationsForm />
                </div>
            </div>
        </div>
    )
}