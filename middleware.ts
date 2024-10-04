import { type NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language'
import { cookieName, fallbackLng, languages } from './app/_components/i18n/settings'

acceptLanguage.languages(languages)

export async function middleware(req: NextRequest) {

    const response = NextResponse.next()

    try {
        let lng
        //@ts-ignore
        if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
        if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
        if (!lng) lng = fallbackLng
    
        // split path will split up to ['', 'locale', 'pathname']
        let splitPathname = req.nextUrl.pathname.split(`/`)
        
        // // Redirect to fallback locale with pathname appended for root visits /solutions => /en/solutions
        // if (splitPathname.length < 3 && !languages.some(loc => new RegExp((`^${loc}$`)).test(splitPathname[1]))) {
        //     return NextResponse.redirect(new URL(`/${fallbackLng}${req.nextUrl.pathname}${req.nextUrl.search ? req.nextUrl.search : ``}`, req.url))
        // }
        
        // Redirect if lng in path is not supported /de/solutions => /en/solutions
        if (
            // splitPathname.length > 2 &&
            !languages.some(loc => new RegExp((`^${loc}$`)).test(splitPathname[1])) &&
            !req.nextUrl.pathname.startsWith('/_next')
        ) {
            // const removedLocale = splitPathname.splice(1, 1)
            // const purifiedPathname = splitPathname.join('/')
            return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}${req.nextUrl.search ? req.nextUrl.search : ``}`, req.url), 301)
        }
        
        if (req.headers.has('referer')) {
            const refererUrl = new URL(req.headers.get('referer') || ``)
            const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
            if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
            return response
        }
    
        return response
    } catch (error) {
        console.error('Middleware localization error:', error);
        return response
    }
}

export const config = {
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
     */
    // matcher: ['/((?!api|_next|_next/static|_next/image|assets|favicon.ico|sw.js|.*\.svg).*)']
    matcher: ['/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};