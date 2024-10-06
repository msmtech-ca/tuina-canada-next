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

interface LoginFormProps {
    lng: string;
    t: { [key:string]: any }
}

export default function LoginForm({ lng, t }: LoginFormProps) {

    //@ts-ignore
    const [state, formAction] = useFormState(handleLoginInitiate, initialState)

    return state?.result?.success === true ? (
        <div className={`h-full flex flex-col gap-4 items-center justify-center text-center p-12 bg-primary-100 rounded-xl mt-8`}>
            <h2 className={`font-serif text-3xl leading-none font-bold`}>{t.LoginForm.success.title}</h2>
            <p className={`mt-4`} dangerouslySetInnerHTML={{__html: t.LoginForm.success.message.replace('{{email}}', state?.result?.email)}}></p>
        </div>
    ) : (
        <>
            <p className={`mt-8`}>{t.LoginForm.prompt}</p>
            <div className={`mt-4`}>
                <form
                    action={formAction}
                >
                    <input name={`lng`} hidden value={lng} readOnly />
                    <div className={`flex flex-col gap-4`}>
                        <div>
                            <Input
                                labelName={t.LoginForm.form.email.label}
                                name={`email`}
                                error={state?.errors?.email}
                                type={`email`}
                                required
                            />
                        </div>
                    </div>
                    <LoginButton
                        lng={lng}
                        sendMessageText={t.LoginForm.form.submit}
                    />
                </form>
            </div>
        </>
    )
}

function LoginButton({ lng, sendMessageText }: { lng: string; sendMessageText: string }) {

    const { pending } = useFormStatus()

    return (
        <Button
            className={`mt-4`}
            variant={`dark`}
            loading={pending}
            lng={lng}
        >{sendMessageText}</Button>
    )
}