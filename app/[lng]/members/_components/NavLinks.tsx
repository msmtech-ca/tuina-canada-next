'use client'

import { Prisma } from "@prisma/client"
import Link from "next/link"
import Logout from "./Logout"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export default function NavLinks({ user }: { user: Prisma.UserGetPayload<{ include: { role: true } }> }) {

    const pathname = usePathname()

    return (
        <ul className={`flex flex-col items-stretch`}>
            <li>
                <Link href={`/members/home/dashboard`} className={clsx([`block w-full ps-8 pr-2 py-2 hover:bg-neutral-300 no-underline hover:no-underline`, pathname.startsWith('/members/home/dashboard') ? `font-bold` : ``])}>Dashboard</Link>
            </li>
            {user?.role?.title === 'ADMIN' && (
                <>
                    <li>
                        <Link href={`/members/home/admin/users`} className={clsx([`block w-full ps-8 pr-2 py-2 hover:bg-neutral-300 no-underline hover:no-underline`, pathname.startsWith('/members/home/admin/users') ? `font-bold` : ``])}>Members</Link>
                    </li>
                    <li>
                        <Link href={`/members/home/admin/cases`} className={clsx([`block w-full ps-8 pr-2 py-2 hover:bg-neutral-300 no-underline hover:no-underline`, pathname.startsWith('/members/home/admin/cases') ? `font-bold` : ``])}>Cases</Link>
                    </li>
                    <li>
                        <Link href={`/members/home/admin/finances`} className={clsx([`block w-full ps-8 pr-2 py-2 hover:bg-neutral-300 no-underline hover:no-underline`, pathname.startsWith('/members/home/admin/finances') ? `font-bold` : ``])}>Finances</Link>
                    </li>
                    <li>
                        <Link href={`/members/home/admin/registrations`} className={clsx([`block w-full ps-8 pr-2 py-2 hover:bg-neutral-300 no-underline hover:no-underline`, pathname.startsWith('/members/home/admin/registrations') ? `font-bold` : ``])}>Registrations</Link>
                    </li>
                </>
            )}
            <li className={`ps-8 pr-2 py-2 hover:bg-neutral-300`}>
                <Logout />
            </li>
        </ul>
    )
}