// page.tsx

import Image from 'next/image'
import Button from '@/app/_components/Button'
import { useTranslation } from '@/app/_components/i18n'

export default async function Home({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/home')

    return (
        <div>
            {/* Hero Section */}
            <div className={`relative`}>
                <Image
                    src={`/pexels-cottonbro-studio-7235055.jpg`}
                    width={1600}
                    height={900}
                    alt={t('main_splash_alt')}
                    className={`min-h-[calc(100vh_-_5rem)] w-full object-cover`}
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 from-0% via-40% to-100% to-transparent`}></div>
                <div className={`absolute top-1/2 -translate-y-1/2 w-full`}>
                    <div className={`container mx-auto`}>
                        <h1 className={`font-serif text-neutral-50 text-6xl md:text-7xl leading-none w-full xl:w-3/5 font-bold`}>
                            {t('empowering_members')}
                        </h1>
                        <h2 className={`mt-8 text-neutral-50 text-xl md:text-2xl leading-tight xl:w-1/2 font-medium`}>
                            {t('provide_resources')}
                        </h2>
                        <Button to={`/members/register`} className={`mt-8`} variant={`dark`}>
                            {t('become_member_today')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className={`bg-neutral-700 text-neutral-50 py-12`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center`}>
                    <div className={`text-2xl font-bold text-center`}>{t('gain_credibility')}</div>
                    <div className={`text-2xl font-bold text-center`}>{t('receive_support')}</div>
                    <div className={`text-2xl font-bold text-center`}>{t('ensure_reimbursement')}</div>
                </div>
            </div>

            {/* Challenges Section */}
            <div className={`py-24`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    <div className={`aspect-square overflow-hidden rounded-2xl shadow`}>
                        <Image
                            src={`/pexels-anntarazevich-5196821.jpg`}
                            width={1600}
                            height={900}
                            alt={t('main_splash_alt')}
                            className={`h-full w-full object-cover`}
                        />
                    </div>
                    <div className={`flex justify-center items-center`}>
                        <div className={`container`}>
                            <h2 className={`text-5xl font-serif font-bold`}>{t('running_clinic_hard')}</h2>
                            <ul className={`mt-8 list-disc list-outside flex flex-col gap-2 ps-4`}>
                                {t<'clinic_challenges', { returnObjects: true }, string[]>('clinic_challenges', { returnObjects: true }).map((item: string, index: number) => (
                                    <li key={index} className={`text-xl`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button to={`/members/register`} className={`mt-8`} variant={`dark`}>
                                {t('become_member_today')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className={`py-24 bg-neutral-700`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-neutral-50 text-center`}>
                        {t('we_take_care')}
                    </h2>
                    <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8`}>
                        {t<'benefits', { returnObjects: true }, { image: string; title: string; description: string }[]>('benefits', { returnObjects: true }).map(
                            (benefit: { image: string; title: string; description: string }, index: number) => (
                                <div key={index}>
                                    <div className={`aspect-video overflow-hidden rounded-xl shadow`}>
                                        <Image
                                            src={benefit.image}
                                            width={1600}
                                            height={900}
                                            alt={t('main_splash_alt')}
                                            className={`h-full w-full object-cover`}
                                        />
                                    </div>
                                    <div className={`px-4`}>
                                        <h3 className={`mt-4 text-3xl font-bold text-neutral-50 text-center`}>
                                            {benefit.title}
                                        </h3>
                                        <p className={`mt-2 text-neutral-50 text-center`}>{benefit.description}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className={`mt-16 w-full flex justify-center items-center`}>
                        <Button to={`/members/register`} variant={`light`}>
                            {t('become_member_today')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className={`py-24 bg-neutral-50`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-center`}>{t('weve_helped')}</h2>
                    <p className={`mt-2 text-center`}>{t('members_success')}</p>
                    <div className={`mt-8 max-w-screen-sm mx-auto overflow-hidden rounded-2xl bg-neutral-200 p-8`}>
                        <p className={`text-center text-xl font-medium`}>{t('testimonial.quote')}</p>
                    </div>
                    <p className={`mt-4 text-center text-xl font-bold`}>{t('testimonial.author')}</p>
                    <div className={`mt-4 flex flex-wrap gap-8 justify-center items-center`}>
                        <Image
                            src={`/logo-intact.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-32 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-beneva.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-16 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-canada-life.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-12 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-manulife.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-8 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-sunlife.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-32 w-auto object-cover`}
                        />
                    </div>
                    <div className={`mt-4 w-full flex justify-center items-center`}>
                        <Button to={`/members/register`} variant={`dark`}>
                            {t('become_member_today')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className={`py-24 bg-neutral-50`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-center`}>{t('how_it_works')}</h2>
                    <div className={`mt-12 flex flex-col gap-12 justify-center items-start max-w-screen-sm mx-auto`}>
                        {t<'steps', { returnObjects: true }, { title: string; description: string }[]>('steps', { returnObjects: true }).map(
                            (step: { title: string; description: string }, index: number) => (
                                <div key={index}>
                                    <h3 className={`text-3xl font-bold`}>{step.title}</h3>
                                    <p className={`text-xl`}>{step.description}</p>
                                </div>
                            )
                        )}
                    </div>
                    <div className={`mt-12 w-full flex justify-center items-center`}>
                        <Button to={`/members/register`} variant={`dark`}>
                            {t('become_member_today')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Our Objective Section */}
            <div className={`py-24 bg-neutral-100`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    <div className={`flex justify-center items-center`}>
                        <div className={`container`}>
                            <h2 className={`text-5xl font-serif font-bold`}>{t('our_objective')}</h2>
                            {t<'paragraphs', { returnObjects: true }, string[]>('paragraphs', { returnObjects: true }).map((paragraph: string, index: number) => (
                                <p key={index} className={`mt-8`}>
                                    {paragraph}
                                </p>
                            ))}
                            <Button to={`/members/register`} className={`mt-8`} variant={`dark`}>
                                {t('become_member_today')}
                            </Button>
                        </div>
                    </div>
                    <div className={`aspect-square overflow-hidden rounded-2xl shadow`}>
                        <Image
                            src={`/amy-hirschi-K0c8ko3e6AA-unsplash.jpg`}
                            width={1600}
                            height={900}
                            alt={t('main_splash_alt')}
                            className={`h-full w-full object-cover`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
