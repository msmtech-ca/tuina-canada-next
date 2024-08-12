"use client"
import { useState } from 'react'
import Button from '@/app/_components/Button'
import { handleContactFormSubmit } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { typeToFlattenedError } from 'zod'
import { caseSchema } from '@/src/validation'
import clsx from 'clsx'
import Input from '@/app/_components/Input'
import TextArea from '@/app/_components/TextArea'

const initialState = caseSchema._output

export default function ContactForm() {

    const [state, formAction] = useFormState(handleContactFormSubmit, initialState)

    return state?.result?.success === true ? (
        <div className={`h-full flex flex-col gap-4 items-center justify-center text-center`}>
            <h2 className={`mt-8 font-serif text-3xl leading-none font-bold`}>Thank you.</h2>
            <p className={`mt-4`}>We will get back to you very soon.</p>
        </div>
    ) : (
        <form
            action={formAction}
        >
            <div className={`flex flex-col gap-4`}>
                <div>
                    <Input
                        labelName={`Name`}
                        name={`name`}
                        error={state?.errors?.name}
                        type={`text`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={`Email`}
                        name={`email`}
                        error={state?.errors?.email}
                        type={`email`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={`Phone`}
                        name={`phone`}
                        error={state?.errors?.phone}
                        type={`tel`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={`Subject`}
                        name={`subject`}
                        error={state?.errors?.subject}
                        type={`text`}
                        required
                    />
                </div>
                <div>
                    <TextArea
                        labelName={`Subject`}
                        name={`subject`}
                        rows={4}
                        error={state?.errors?.message}
                        required
                    />
                </div>
            </div>
            <SendButton />
        </form>
    )
}

function SendButton() {

    const { pending } = useFormStatus()

    return (
        <Button
            className={`mt-4`}
            variant={`dark`}
            loading={pending}
        >Send message</Button>
    )
}