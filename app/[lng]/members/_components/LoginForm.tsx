"use client"
import { useState } from 'react'
import Button from '@/app/_components/Button'
import { handleLoginInitiate } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { typeToFlattenedError } from 'zod'
import { loginInitiateSchema } from '@/src/validation'
import clsx from 'clsx'
import Input from '@/app/_components/Input'

const initialState = loginInitiateSchema._output

export default function LoginForm() {

    const [state, formAction] = useFormState(handleLoginInitiate, initialState)

    return state?.result?.success === true ? (
        <div className={`h-full flex flex-col gap-4 items-center justify-center text-center p-12 bg-primary-100 rounded-xl mt-8`}>
            <h2 className={`font-serif text-3xl leading-none font-bold`}>Check your email.</h2>
            <p className={`mt-4`}>We sent an email to <b>{state?.result?.email}</b> with instructions to log in.</p>
        </div>
    ) : (
        <>
            <p className={`mt-8`}>If you are a member of the association, we will send instructions to your email for logging in.</p>
            <div className={`mt-4`}>
                <form
                    action={formAction}
                >
                    <div className={`flex flex-col gap-4`}>
                        <div>
                            <Input
                                labelName={`Email`}
                                name={`email`}
                                error={state?.errors?.email}
                                type={`email`}
                                required
                            />
                        </div>
                    </div>
                    <LoginButton />
                </form>
            </div>
        </>
    )
}

function LoginButton() {

    const { pending } = useFormStatus()

    return (
        <Button
            className={`mt-4`}
            variant={`dark`}
            loading={pending}
        >Login</Button>
    )
}