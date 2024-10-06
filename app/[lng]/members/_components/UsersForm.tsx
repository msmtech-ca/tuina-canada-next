"use client"
import Button from '@/app/_components/Button'
import Input from '@/app/_components/Input'
import Select from '@/app/_components/Select'
import { handleAddUserSubmit, handleEditUserSubmit } from '@/app/actions'
import { countries, provinces, sexes, titles } from '@/src/lib/constants'
import { addUserSchema } from '@/src/validation'
import { Plan } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

interface UsersFormProps {
    action: typeof handleAddUserSubmit|typeof handleEditUserSubmit;
    initialState?: typeof addUserSchema._output;
    plans: Plan[]
    submitText: string;
    options: {
        titles: { value: string; label: string }[]
        sexes: { value: string; label: string }[]
        provinces: { value: string; label: string }[]
        countries: { value: string; label: string }[]
    }
}

export default function UsersForm({ action, initialState=addUserSchema._output, plans, submitText, options }: UsersFormProps) {

    const router = useRouter()
    //@ts-ignore
    const [state, formAction] = useFormState(action, initialState)
    type State = typeof state

    const planSelectOptions = plans.map((plan, planIndex, planArray) => {
        return {
            label: plan.title,
            value: plan.id,
        }
    })

    if (state?.result?.success === true) {
        toast.success(`Operation successful`)
        router.push(`${process.env.NEXT_PUBLIC_HOST}/members/home/admin/users`)
    }

    function SubmitButton({ submitText }: { submitText: string }) {
        const { pending } = useFormStatus()
        return (
            <Button
                className={`mt-4`}
                variant={`dark`}
                loading={pending}
            >{submitText}</Button>
        )
    }

    return (
        <form
            action={formAction}
        >
            <input type={`hidden`} id={`resourceId`} name={`resourceId`} value={initialState?.resourceId ?? undefined} />
            <div>(<span className={`text-red-600`}>*</span>) are required fields</div>
            <div className={`mt-4 flex flex-col gap-4`}>
                <div>
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Personal Information`}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-1`}>
                            <Select
                                labelName={`Title`}
                                name={`title`}
                                error={state?.errors?.title}
                                options={options.titles}
                                required
                                defaultValue={initialState?.title ?? undefined}
                            />
                        </div>
                        <div className={`col-span-4`}>
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
                        <div className={`col-span-4`}>
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
                    <div className={`grid grid-cols-3 gap-4`}>
                        <div>
                            <Select
                                labelName={`Sex`}
                                name={`sex`}
                                error={state?.errors?.sex}
                                options={options.sexes}
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
                        <div>
                            <Input
                                labelName={`Social insurance number`}
                                name={`sin`}
                                error={state?.errors?.sin}
                                type={`text`}
                                required
                                maxLength={9}
                                defaultValue={initialState?.sin ?? undefined}
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
                                options={options.provinces}
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
                                options={options.countries}
                                required
                                defaultValue={initialState?.country ?? undefined}
                            />
                        </div>
                    </div>
                </div>
                <div className={`border-t border-t-neutral-600 mt-4 pt-4`}>
                    <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Plan Selection`}</h2>
                    <div className={`grid grid-cols-12 gap-4`}>
                        <div className={`col-span-1`}>
                            <Input
                                labelName={`Assoc. no.`}
                                name={`assId`}
                                type={`number`}
                                readonly
                                value={1118}
                            />
                        </div>
                        <div className={`col-span-11`}>
                            <Input
                                labelName={`Member no.`}
                                name={`userId`}
                                error={state?.errors?.userId}
                                type={`number`}
                                required
                                defaultValue={initialState?.userId ?? undefined}
                            />
                        </div>
                    </div>
                    <div>
                        <Select
                            labelName={`Plan`}
                            name={`plan`}
                            error={state?.errors?.plan}
                            options={planSelectOptions}
                            required
                            defaultValue={initialState?.plan ?? undefined}
                        />
                    </div>
                </div>
            </div>
            <SubmitButton
                submitText={submitText}
            />
        </form>
        
    )
}
