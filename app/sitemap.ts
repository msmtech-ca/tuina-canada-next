import { MetadataRoute } from "next"
import { fallbackLng, languages } from "./_components/i18n/settings"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    let sitemap = []
    const publicUrl = process.env.NEXT_PUBLIC_HOST || ''

    sitemap.push({
        url: `${publicUrl}/${fallbackLng}`,
        lastModified: new Date(),
        alternates: {
            languages: (function(){
                let res: {[key:string]: string} = {}
                for (const lng of languages) {
                    res[`${lng}` as string] = `${publicUrl}/${lng}`
                }
                return res
            })()
        }
    })
    const pages = [
        'advantages',
        'contact',
        'insurance',
        'objective',
        'privacy-policy',
        'terms-conditions',
        'training',
    ]
    for (const page of pages) {
        sitemap.push({
            url: `${publicUrl}/${fallbackLng}/pages/${page}`,
            lastModified: new Date(),
            alternates: {
                languages: (function(){
                    let res: {[key:string]: string} = {}
                    for (const lng of languages) {
                        res[`${lng}` as string] = `${publicUrl}/${lng}/${page}`
                    }
                    return res
                })()
            }
        })
    }

    return sitemap
}