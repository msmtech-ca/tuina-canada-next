import authManager from "@/src/auth";
import { redirect } from "next/navigation";
import NavLinks from "../_components/NavLinks";
import ToastProvider from "../_components/ToastProvider";

export default async function MembersLayout({ children }: { children: React.ReactNode }) {

    const user = await authManager.authenticate()
    if (!user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/login`)
    }

    return (
        <ToastProvider>
            <div className={`grow grid grid-cols-12 bg-neutral-100`}>
                <div className={`col-span-2`}>
                    <div className={`h-full bg-neutral-200 py-4 shadow`}>
                        <NavLinks user={user}  />
                    </div>
                </div>
                <div className={`col-span-10 py-4 px-8`}>
                    {children}
                </div>
            </div>
        </ToastProvider>
    )
}