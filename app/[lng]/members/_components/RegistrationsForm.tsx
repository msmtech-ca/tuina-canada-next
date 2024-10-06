// RegistrationsForm.tsx

"use client"
import Button from '@/app/_components/Button'
import Input from '@/app/_components/Input'
import Select from '@/app/_components/Select'
import { handleAddRegistration } from '@/app/actions'
import { registrationSchema } from '@/src/validation'
import { useFormState, useFormStatus } from 'react-dom'
import FormSuccessMessage from './FormSuccessMessage'

const initialState = registrationSchema._output

interface RegistrationsFormProps {
    lng: string
    t: { [key: string]: any }
    options: {
        titles: { value: string; label: string }[]
        sexes: { value: string; label: string }[]
        provinces: { value: string; label: string }[]
        countries: { value: string; label: string }[]
    }
}

export default function RegistrationsForm({ lng, t, options }: RegistrationsFormProps) {

    //@ts-ignore
    const [state, formAction] = useFormState(handleAddRegistration, initialState)

    function SubmitButton() {
        const { pending } = useFormStatus()
        return (
            <Button
                className={`mt-4`}
                variant={`dark`}
                loading={pending}
                lng={lng}
            >
                {t.RegistrationsForm.form.send_registration}
            </Button>
        )
    }

    return state?.result?.success === true ? (
        <FormSuccessMessage
            t={t.ContactForm}
        />
    ) : (
        <form action={formAction}>
            <input name={`lng`} hidden value={lng} readOnly />
            <div dangerouslySetInnerHTML={{__html: t.RegistrationsForm.form.required_fields_note}}></div>
            <div className={`mt-4 flex flex-col gap-4`}>
                <div>
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{t.RegistrationsForm.form.personal_information}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Select
                                labelName={t.RegistrationsForm.form.title.label}
                                name={`title`}
                                error={state?.errors?.title}
                                options={options.titles}
                                required
                                defaultValue={initialState?.title ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Input
                                labelName={t.RegistrationsForm.form.first_name.label}
                                name={`firstName`}
                                error={state?.errors?.firstName}
                                type={`text`}
                                required
                                defaultValue={initialState?.firstName ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Input
                                labelName={t.RegistrationsForm.form.middle_name.label}
                                name={`middleName`}
                                error={state?.errors?.middleName}
                                type={`text`}
                                defaultValue={initialState?.middleName ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Input
                                labelName={t.RegistrationsForm.form.last_name.label}
                                name={`lastName`}
                                error={state?.errors?.lastName}
                                type={`text`}
                                required
                                defaultValue={initialState?.lastName ?? undefined}
                            />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div>
                            <Input
                                labelName={t.RegistrationsForm.form.email.label}
                                name={`email`}
                                error={state?.errors?.email}
                                type={`email`}
                                required
                                defaultValue={initialState?.email ?? undefined}
                            />
                        </div>
                        <div>
                            <Input
                                labelName={t.RegistrationsForm.form.phone.label}
                                name={`phone`}
                                error={state?.errors?.phone}
                                type={`tel`}
                                required
                                defaultValue={initialState?.phone ?? undefined}
                            />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div>
                            <Select
                                labelName={t.RegistrationsForm.form.sex.label}
                                name={`sex`}
                                error={state?.errors?.sex}
                                options={options.sexes}
                                required
                                defaultValue={initialState?.sex ?? undefined}
                            />
                        </div>
                        <div>
                            <Input
                                labelName={t.RegistrationsForm.form.date_of_birth.label}
                                name={`dateOfBirth`}
                                error={state?.errors?.dateOfBirth}
                                type={`date`}
                                required
                                defaultValue={initialState?.dateOfBirth ?? undefined}
                            />
                        </div>
                    </div>
                </div>
                <div className={`border-t border-t-neutral-600 mt-4 pt-4`}>
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{t.RegistrationsForm.form.location_information.label}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-8`}>
                            <Input
                                labelName={t.RegistrationsForm.form.address.label}
                                name={`address1`}
                                error={state?.errors?.address1}
                                type={`text`}
                                required
                                defaultValue={initialState?.address1 ?? undefined}
                            />
                        </div>
                        <div className={`col-span-4`}>
                            <Input
                                labelName={t.RegistrationsForm.form.address2.label}
                                name={`address2`}
                                error={state?.errors?.address2}
                                type={`text`}
                                defaultValue={initialState?.address2 ?? undefined}
                            />
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Input
                                labelName={t.RegistrationsForm.form.city.label}
                                name={`city`}
                                error={state?.errors?.city}
                                type={`text`}
                                required
                                defaultValue={initialState?.city ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Select
                                labelName={t.RegistrationsForm.form.province.label}
                                name={`province`}
                                error={state?.errors?.province}
                                options={options.provinces}
                                required
                                defaultValue={initialState?.province ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Input
                                labelName={t.RegistrationsForm.form.zip.label}
                                name={`zip`}
                                error={state?.errors?.zip}
                                type={`text`}
                                required
                                defaultValue={initialState?.zip ?? undefined}
                            />
                        </div>
                        <div className={`col-span-6 lg:col-span-3`}>
                            <Select
                                labelName={t.RegistrationsForm.form.country.label}
                                name={`country`}
                                error={state?.errors?.country}
                                options={options.countries}
                                required
                                defaultValue={initialState?.country ?? undefined}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SubmitButton />
        </form>
    )
}
