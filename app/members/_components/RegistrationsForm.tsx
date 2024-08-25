"use client"
import Button from '@/app/_components/Button'
import Input from '@/app/_components/Input'
import Select from '@/app/_components/Select'
import { handleAddRegistration } from '@/app/actions'
import { countries, provinces, sexes, titles } from '@/src/lib/constants'
import { registrationSchema } from '@/src/validation'
import { useFormState, useFormStatus } from 'react-dom'
import FormSuccessMessage from './FormSuccessMessage'

const initialState = registrationSchema._output

interface RegistrationsFormProps {
}

export default function RegistrationsForm({}: RegistrationsFormProps) {

    const [state, formAction] = useFormState(handleAddRegistration, initialState)

    function SubmitButton() {
        const { pending } = useFormStatus()
        return (
            <Button
                className={`mt-4`}
                variant={`dark`}
                loading={pending}
            >{`Send registration`}</Button>
        )
    }

    return state?.result?.success === true ? (
        <FormSuccessMessage />
    ) : (
        <form
            action={formAction}
        >
            <div>(<span className={`text-red-600`}>*</span>) are required fields</div>
            <div className={`mt-4 flex flex-col gap-4`}>
                <div>
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Personal Information`}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-3`}>
                            <Select
                                labelName={`Title`}
                                name={`title`}
                                error={state?.errors?.title}
                                options={titles}
                                required
                                defaultValue={initialState?.title ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Input
                                labelName={`First Name`}
                                name={`firstName`}
                                error={state?.errors?.firstName}
                                type={`text`}
                                required
                                defaultValue={initialState?.firstName ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Input
                                labelName={`Middle Name`}
                                name={`middleName`}
                                error={state?.errors?.middleName}
                                type={`text`}
                                defaultValue={initialState?.middleName ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Input
                                labelName={`Last Name`}
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
                                labelName={`Email`}
                                name={`email`}
                                error={state?.errors?.email}
                                type={`email`}
                                required
                                defaultValue={initialState?.email ?? undefined}
                            />
                        </div>
                        <div>
                            <Input
                                labelName={`Phone`}
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
                                labelName={`Sex`}
                                name={`sex`}
                                error={state?.errors?.sex}
                                options={sexes}
                                required
                                defaultValue={initialState?.sex ?? undefined}
                            />
                        </div>
                        <div>
                            <Input
                                labelName={`Date of birth`}
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
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Location Information`}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-8`}>
                            <Input
                                labelName={`Address`}
                                name={`address1`}
                                error={state?.errors?.address1}
                                type={`text`}
                                required
                                defaultValue={initialState?.address1 ?? undefined}
                            />
                        </div>
                        <div className={`col-span-4`}>
                            <Input
                                labelName={`Apt./Suite`}
                                name={`address2`}
                                error={state?.errors?.address2}
                                type={`text`}
                                defaultValue={initialState?.address2 ?? undefined}
                            />
                        </div>
                    </div>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-3`}>
                            <Input
                                labelName={`City`}
                                name={`city`}
                                error={state?.errors?.city}
                                type={`text`}
                                required
                                defaultValue={initialState?.city ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Select
                                labelName={`Province`}
                                name={`province`}
                                error={state?.errors?.province}
                                options={provinces}
                                required
                                defaultValue={initialState?.province ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Input
                                labelName={`Postal/zip code`}
                                name={`zip`}
                                error={state?.errors?.zip}
                                type={`text`}
                                required
                                defaultValue={initialState?.zip ?? undefined}
                            />
                        </div>
                        <div className={`col-span-3`}>
                            <Select
                                labelName={`Country`}
                                name={`country`}
                                error={state?.errors?.country}
                                options={countries}
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
