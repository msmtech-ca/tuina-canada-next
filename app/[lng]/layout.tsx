import type { Metadata } from 'next'
import { Mukta, Gentium_Book_Plus } from 'next/font/google'
import Image from 'next/image'
import '@/app//globals.css'
import Link from 'next/link'
import { useTranslation } from '@/app/_components/i18n'
import LangSelector from '../_components/LangSelector'
import MobileMenu from '../_components/MobileMenu'

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
                            href={`/${lng}`}
                            className={`block`}
                        >
                            <Image
                                src={`/logo-horizontal-x192.png`}
                                height={128}
                                width={600}
                                alt={t('association_name')}
                                className={`h-12 md:h-16 xl:h-20 w-auto`}
                            />
                        </Link>
                        <div className={`flex items-center gap-4 lg:gap-8`}>
                            <ul className={`hidden lg:flex items-center gap-4 xl:gap-8 text-lg`}>
                                <li>
                                    <Link
                                        href={`/${lng}/pages/objective`}
                                    >
                                        {t('navigation.objective')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lng}/pages/training`}
                                    >
                                        {t('navigation.training')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lng}/pages/advantages`}
                                    >
                                        {t('navigation.advantages')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lng}/pages/insurance`}
                                    >
                                        {t('navigation.insurance')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lng}/pages/contact`}
                                    >
                                        {t('navigation.contact')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/${lng}/members/home/dashboard`}
                                    >
                                        {t('navigation.members')}
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <LangSelector
                                    lng={lng}
                                />
                            </div>
                            <div>
                                <MobileMenu
                                    lng={lng}
                                    t={{
                                        navigation: t('navigation', { returnObjects: true }),
                                    }}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="relative min-h-screen flex flex-col w-full items-stretch">
                    {children}
                </main>
                <footer className={`pt-24 bg-neutral-900 text-neutral-50`}>
                    <div className={`container mx-auto`}>
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8`}>
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
                                                href={`/${lng}/pages/objective`}
                                            >
                                                {t('navigation.objective')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/${lng}/pages/training`}
                                            >
                                                {t('navigation.training')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/${lng}/pages/advantages`}
                                            >
                                                {t('navigation.advantages')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={`/${lng}/pages/insurance`}
                                            >
                                                {t('navigation.insurance')}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-serif font-bold`}>{t('footer.choose_your_language')}</h3>
                                    <ul className={`mt-4 flex flex-col gap-2`}>
                                        <li>
                                            <LangSelector
                                                lng={lng}
                                            />
                                        </li>
                                        {/* <li>
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
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-24 px-2 pt-4 pb-4 lg:py-4 border-t border-neutral-600 flex flex-col-reverse lg:flex-row justify-between gap-8`}>
                            <div className={`text-xs lg:text-sm block leading-none`}>
                                <span>{t('footer.copy')}</span>
                                <Link href={`https://msmtech.ca/${lng}`}>{t('footer.web_solution')}</Link>
                            </div>
                            <div className={`flex gap-8 lg:gap-8 text-sm justify-end leading-none`}>
                                <Link
                                    href={`/${lng}/pages/privacy-policy`}
                                >
                                    {t('footer.privacy_policy')}
                                </Link>
                                <Link
                                    href={`/${lng}/pages/terms-conditions`}
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
