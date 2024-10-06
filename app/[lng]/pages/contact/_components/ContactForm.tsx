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
import FormSuccessMessage from '@/app/[lng]/members/_components/FormSuccessMessage'
import { TFunction } from 'i18next'

const initialState = caseSchema._output

interface ContactFormProps {
    lng: string;
    t: { [key:string]: any }
}

export default function ContactForm({ lng, t }: ContactFormProps) {

    //@ts-ignore
    const [state, formAction] = useFormState(handleContactFormSubmit, initialState)

    const translations = t.ContactForm

    return state?.result?.success === true ? (
        <FormSuccessMessage
            t={t}
        />
    ) : (
        <form action={formAction}>
            <input name={`lng`} hidden value={lng} readOnly />
            <div className={`flex flex-col gap-4`}>
                <div>
                    <Input
                        labelName={translations.form.name.label}
                        name={`name`}
                        error={state?.errors?.name}
                        type={`text`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={translations.form.email.label}
                        name={`email`}
                        error={state?.errors?.email}
                        type={`email`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={translations.form.phone.label}
                        name={`phone`}
                        error={state?.errors?.phone}
                        type={`tel`}
                        required
                    />
                </div>
                <div>
                    <Input
                        labelName={translations.form.subject.label}
                        name={`subject`}
                        error={state?.errors?.subject}
                        type={`text`}
                        required
                    />
                </div>
                <div>
                    <TextArea
                        labelName={translations.form.message.label}
                        name={`message`}
                        rows={4}
                        error={state?.errors?.message}
                        required
                    />
                </div>
            </div>
            <SendButton
                lng={lng}
                sendMessageText={translations.form.send_message}
            />
        </form>
    )
}

function SendButton({ lng, sendMessageText }: { lng: string; sendMessageText: string }) {

    const { pending } = useFormStatus()

    return (
        <Button
            className={`mt-4`}
            variant={`dark`}
            loading={pending}
            lng={lng}
        >
            {sendMessageText}
        </Button>
    )
}
