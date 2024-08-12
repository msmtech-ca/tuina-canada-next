"use client"
import { useActionState, useState } from 'react'
import Button from '@/app/_components/Button'
import { handleAddUserSubmit, toastTest } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { typeToFlattenedError, z } from 'zod'
import { addUserSchema } from '@/src/validation'
import clsx from 'clsx'
import Input from '@/app/_components/Input'
import TextArea from '@/app/_components/TextArea'
import { Plan } from '@prisma/client'
import Select from '@/app/_components/Select'
import toast from 'react-hot-toast'
import { redirect, useRouter } from 'next/navigation'
import { countries, provinces, sexes, titles } from '@/src/lib/constants'

const initialState = addUserSchema._output

interface AddUserFormProps {
    plans: Plan[]
}

export default function AddUserForm({ plans }: AddUserFormProps) {

    const router = useRouter()
    const [state, formAction, pending] = useActionState(handleAddUserSubmit, initialState)
    type State = typeof state

    const planSelectOptions = plans.map((plan, planIndex, planArray) => {
        return {
            label: plan.title,
            value: plan.id,
        }
    })

    if (state?.result?.success === true) {
        toast.success(`Added member ${state.result.createdUser.email}.`)
        router.push(`${process.env.NEXT_PUBLIC_HOST}/members/home/admin/users`)
    }

    return (
        <form
            action={formAction}
            noValidate
        >
            <div>(<span className={`text-red-600`}>*</span>) are required fields</div>
                <div className={`mt-4 flex flex-col gap-4`}>
                    <div>
                        <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Personal Information`}</h2>
                        <div className={`grid grid-cols-12 gap-4`}>
                            <div className={`col-span-1`}>
                                <Select
                                    labelName={`Title`}
                                    name={`title`}
                                    options={titles}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`First Name`}
                                    name={`firstName`}
                                    error={state?.errors?.firstName}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Input
                                    labelName={`Middle Name`}
                                    name={`middleName`}
                                    error={state?.errors?.middleName}
                                    type={`text`}
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`Last Name`}
                                    name={`lastName`}
                                    error={state?.errors?.lastName}
                                    type={`text`}
                                    required
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Phone`}
                                    name={`phone`}
                                    error={state?.errors?.phone}
                                    type={`tel`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                        </div>
                        <div className={`grid grid-cols-3 gap-4`}>
                            <div>
                                <Select
                                    labelName={`Sex`}
                                    name={`sex`}
                                    options={sexes}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Date of birth`}
                                    name={`dateOfBirth`}
                                    error={state?.errors?.dateOfBirth}
                                    type={`date`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Social insurance number`}
                                    name={`sin`}
                                    error={state?.errors?.sin}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                    maxLength={9}
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
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`Apt./Suite`}
                                    name={`address2`}
                                    error={state?.errors?.address2}
                                    type={`text`}
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Select
                                    labelName={`Province`}
                                    name={`province`}
                                    options={provinces}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Input
                                    labelName={`Postal/zip code`}
                                    name={`zip`}
                                    error={state?.errors?.zip}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Select
                                    labelName={`Country`}
                                    name={`country`}
                                    options={countries}
                                    required
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                        </div>
                        <div>
                            <Select
                                labelName={`Plan`}
                                name={`plan`}
                                options={planSelectOptions}
                                required
                                disabled={pending}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    className={`mt-4`}
                    variant={`dark`}
                    loading={pending}
                >Add member</Button>
        </form>
        
    )

    function FormContent({ state, plans }: { state: State ; plans: Plan[] }) {
        const { pending } = useFormStatus()

        const planSelectOptions = plans.map((plan, planIndex, planArray) => {
            return {
                label: plan.title,
                value: plan.id,
            }
        })

        return (
            <>
                <div>(<span className={`text-red-600`}>*</span>) are required fields</div>
                <div className={`mt-4 flex flex-col gap-4`}>
                    <div>
                        <h2 className={`text-2xl leading-none font-bold mb-4`}>{`Personal Information`}</h2>
                        <div className={`grid grid-cols-12 gap-4`}>
                            <div className={`col-span-1`}>
                                <Select
                                    labelName={`Title`}
                                    name={`title`}
                                    options={titles}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`First Name`}
                                    name={`firstName`}
                                    error={state?.errors?.firstName}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Input
                                    labelName={`Middle Name`}
                                    name={`middleName`}
                                    error={state?.errors?.middleName}
                                    type={`text`}
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`Last Name`}
                                    name={`lastName`}
                                    error={state?.errors?.lastName}
                                    type={`text`}
                                    required
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Phone`}
                                    name={`phone`}
                                    error={state?.errors?.phone}
                                    type={`tel`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                        </div>
                        <div className={`grid grid-cols-3 gap-4`}>
                            <div>
                                <Select
                                    labelName={`Sex`}
                                    name={`sex`}
                                    options={sexes}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Date of birth`}
                                    name={`dateOfBirth`}
                                    error={state?.errors?.dateOfBirth}
                                    type={`date`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div>
                                <Input
                                    labelName={`Social insurance number`}
                                    name={`sin`}
                                    error={state?.errors?.sin}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                    maxLength={9}
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
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-4`}>
                                <Input
                                    labelName={`Apt./Suite`}
                                    name={`address2`}
                                    error={state?.errors?.address2}
                                    type={`text`}
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Select
                                    labelName={`Province`}
                                    name={`province`}
                                    options={provinces}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Input
                                    labelName={`Postal/zip code`}
                                    name={`zip`}
                                    error={state?.errors?.zip}
                                    type={`text`}
                                    required
                                    disabled={pending}
                                />
                            </div>
                            <div className={`col-span-3`}>
                                <Select
                                    labelName={`Country`}
                                    name={`country`}
                                    options={countries}
                                    required
                                    disabled={pending}
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
                                    disabled={pending}
                                />
                            </div>
                        </div>
                        <div>
                            <Select
                                labelName={`Plan`}
                                name={`plan`}
                                options={planSelectOptions}
                                required
                                disabled={pending}
                            />
                        </div>
                    </div>
                </div>
                <Button
                    className={`mt-4`}
                    variant={`dark`}
                    loading={pending}
                >Add member</Button>
            </>
        )
    }
}
