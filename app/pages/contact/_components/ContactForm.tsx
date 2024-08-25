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
import FormSuccessMessage from '@/app/members/_components/FormSuccessMessage'

const initialState = caseSchema._output

export default function ContactForm() {

    const [state, formAction] = useFormState(handleContactFormSubmit, initialState)

    return state?.result?.success === true ? (
        <FormSuccessMessage />
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
                        labelName={`Message`}
                        name={`message`}
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