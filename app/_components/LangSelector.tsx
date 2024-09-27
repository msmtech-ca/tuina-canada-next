'use client'
import { languages } from "./i18n/settings"
import { usePathname, useRouter } from "next/navigation"
import Select from "./Select"

interface LangSelectorProps {
    lng: string
}

export default function LangSelector({ lng }: LangSelectorProps) {

    const pathname = usePathname()
    const router = useRouter()
    let defaultLng = ''

    const mappedLanguages = languages.map((lang) => {

        let splitPath = pathname.split(`/`)
        splitPath[1] = lang
        const joinedPath = splitPath.join(`/`)

        if (lang === lng) {
            defaultLng = `${process.env.NEXT_PUBLIC_HOST}${joinedPath}`
        }

        return {
            label: lang,
            value: `${process.env.NEXT_PUBLIC_HOST}${joinedPath}`,
        }
    })

    return (
        <Select
            labelName={`Language`}
            name={`lang`}
            options={mappedLanguages}
            defaultValue={defaultLng}
            labelHidden
            onChange={(event) => router.push(event.target.value, { scroll: false })}
        />
    )
}