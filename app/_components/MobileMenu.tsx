'use client'
import { closeIcon, mobileMenuIcon } from "@/src/lib/icons"
import clsx from "clsx"
import Link from "next/link";
import { useState } from "react"

interface MobileMenuProps {
    lng: string;
    t: { [key: string]: any };
}

export default function MobileMenu({ lng, t }: MobileMenuProps) {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className={`block lg:hidden h-8 w-8`} onClick={() => setOpen(true)}>
                {mobileMenuIcon}
            </div>
            <div className={clsx([`w-full h-full bg-white top-0 left-0`, open ? `fixed` : `hidden`])}>
                <div className={`fixed mt-8 mr-4 right-0 top-0`} onClick={() => setOpen(false)}>
                    <div className={`h-8 w-8`}>
                        {closeIcon}
                    </div>
                </div>
                <div className={`flex w-full h-full items-center justify-center`}>
                    <ul className={`flex flex-col items-center gap-4 text-2xl`}>
                        <li>
                            <Link
                                href={`/${lng}/pages/objective`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.objective}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${lng}/pages/training`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.training}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${lng}/pages/advantages`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.advantages}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${lng}/pages/insurance`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.insurance}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${lng}/pages/contact`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.contact}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${lng}/members/home/dashboard`}
                                onClick={() => setOpen(false)}
                            >
                                {t.navigation.members}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}