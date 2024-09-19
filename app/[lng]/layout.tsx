import type { Metadata } from 'next'
import { Mukta, Gentium_Book_Plus } from 'next/font/google'
import Image from 'next/image'
import '@/app//globals.css'
import Link from 'next/link'
import { useTranslation } from '@/app/_components/i18n'

const gentium = Gentium_Book_Plus({
    subsets: ['latin'],
    weight: [
        '400',
        '700',
    ],
    variable: '--font-gentium'
})

const mukta = Mukta({
    subsets: ['latin'],
    weight: [
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
    ],
    variable: '--font-mukta'
})

export default async function RootLayout({
    params: { lng },
    children,
}: {
    params: {
        lng: string;
    };
    children: React.ReactNode;
}) {

    const { t } = await useTranslation(lng, 'global')

    return (
        <html lang={lng} className={`${mukta.variable} ${gentium.variable} antialiased`}>
            <body className={`bg-neutral-100 text-neutral-900 text-lg relative`}>
                <header>
                    <nav className={`flex justify-between items-center gap-4 px-4 py-2 shadow border-b border-neutral-600 z-10 relative`}>
                        <Link
                            href={`/`}
                            className={`block`}
                        >
                            <Image
                                src={`/logo-horizontal-x192.png`}
                                height={128}
                                width={600}
                                alt={t('association_name')}
                                className={`h-16 xl:h-20 w-auto`}
                            />
                        </Link>
                        <ul className={`flex items-center gap-8 text-lg`}>
                            <li>
                                <Link
                                    href={`/pages/objective`}
                                >
                                    {t('navigation.objective')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/pages/training`}
                                >
                                    {t('navigation.training')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/pages/advantages`}
                                >
                                    {t('navigation.advantages')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/pages/insurance`}
                                >
                                    {t('navigation.insurance')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/pages/contact`}
                                >
                                    {t('navigation.contact')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/members/home/dashboard`}
                                >
                                    {t('navigation.members')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="relative min-h-screen flex flex-col w-full items-stretch">
                    {children}
                </main>
                <footer className={`pt-24 bg-neutral-900 text-neutral-50`}>
                    <div className={`container mx-auto`}>
                        <div className={`grid grid-cols-2`}>
                            <div>
                                <Link
                                    href={`/`}
                                    className={`block`}
                                >
                                    <Image
                                        src={`/logo-horizontal-inverted-x192.png`}
                                        height={128}
                                        width={600}
                                        alt={t('association_name')}
                                        className={`h-20 w-auto`}
                                    />
                                </Link>
                                <p className={`mt-4 w-2/3`}>{t('mission_statement')}</p>
                            </div>
                            <div className={`grid grid-cols-2 gap-8`}>
                                <div>
                                    <h3 className={`text-2xl font-serif font-bold`}>{t('navigation_title')}</h3>
                                    <ul className={`mt-4 flex flex-col gap-2`}>
                                        <li>
                                            <Link
                                                href={`/pages/objective`}
                                            >
                                                {t('navigation.objective')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/pages/training`}
                                            >
                                                {t('navigation.training')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/pages/advantages`}
                                            >
                                                {t('navigation.advantages')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/pages/insurance`}
                                            >
                                                {t('navigation.insurance')}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div>
                                    <h3 className={`text-2xl font-serif font-bold`}>Resources</h3>
                                    <ul className={`mt-4 flex flex-col gap-2`}>
                                        <li>
                                            <Link
                                                href={`/`}
                                            >
                                                Resource 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/`}
                                            >
                                                Resource 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/`}
                                            >
                                                Resource 3
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/`}
                                            >
                                                Resource 4
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className={`mt-24 px-2 py-8 border-t border-neutral-600 flex justify-between`}>
                            <div className={`text-sm`}>
                                {t('footer.copy')}
                                <Link href={`https://msmtech.ca`}>{t('footer.web_solution')}</Link>
                            </div>
                            <div className={`flex gap-8 text-sm`}>
                                <Link
                                    href={`/pages/privacy-policy`}
                                >
                                    {t('footer.privacy_policy')}
                                </Link>
                                <Link
                                    href={`/pages/terms-conditions`}
                                >
                                    {t('footer.terms_conditions')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
