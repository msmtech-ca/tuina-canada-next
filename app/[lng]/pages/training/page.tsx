import Button from '@/app/_components/Button'
import Image from 'next/image'
import { useTranslation } from '@/app/_components/i18n'

export default async function Page({ params }: { params: { lng: string } }) {
    const { t } = await useTranslation(params.lng, 'pages/training')

    return (
        <div className={`py-12 container mx-auto`}>
            <div className={`max-w-screen-md mx-auto`}>
                <div className={`aspect-video shadow overflow-hidden rounded-2xl`}>
                    <Image
                        src={`/engin-akyurt-IxX6XrMfu4U-unsplash.jpg`}
                        width={1600}
                        height={900}
                        alt={t('main_splash_alt')}
                        className={`h-full w-full object-cover`}
                    />
                </div>
                <h1 className={`mt-8 font-serif text-5xl leading-none font-bold text-center`}>
                    {t('training_program')}
                </h1>
                <p className={`mt-4`}>{t('paragraph1')}</p>
                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('program_overview')}
                </h2>
                <p className={`mt-4`}>{t('total_training_hours')}</p>

                {/** Section 1 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section1.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section1.items', { returnObjects: true }, string[]>('sections.section1.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/** Section 2 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section2.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section2.items', { returnObjects: true }, string[]>('sections.section2.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/** Section 3 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section3.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section3.items', { returnObjects: true }, string[]>('sections.section3.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/** Section 4 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section4.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section4.items', { returnObjects: true }, string[]>('sections.section4.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/** Section 5 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section5.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section5.items', { returnObjects: true }, string[]>('sections.section5.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/** Section 6 */}
                <h3 className={`mt-8 font-serif text-xl leading-none font-bold`}>
                    {t('sections.section6.title')}
                </h3>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'sections.section6.items', { returnObjects: true }, string[]>('sections.section6.items', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('why_train_with_us')}
                </h2>
                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4`}>
                    {t<'why_train_list', { returnObjects: true }, string[]>('why_train_list', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>
                    {t('enroll_today')}
                </h2>
                <p className={`mt-4`}>{t('paragraph2')}</p>
                <div className={`mt-12 w-full flex justify-center items-center`}>
                    <Button
                        to={`/members/register`}
                        variant={`dark`}
                    >
                        {t('become_member_today')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
