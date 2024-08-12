import authManager from "@/src/auth"

export async function GET(
    request: Request,
    { params }: { params: { token: string; email: string; } }
) {
    const { token, email} = params

    console.info('Running verify magic link', {
        email: email,
        token: token,
    })

    const isLoggedIn = await authManager.login(token, email)
    if (!isLoggedIn) {

        console.info('Verify magic link attempt failed', {
            email: email,
            token: token,
        })

        return Response.redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    console.info('Verify magic link was successful', {
        email: email,
        token: token,
    })

    return Response.redirect(`${process.env.NEXT_PUBLIC_HOST}/members/home/dashboard`)
}