'use client'

import Button from "@/app/_components/Button"
import { handleChangeCaseStatus } from "@/app/actions";
import { changeCaseStatusSchema } from "@/src/validation";
import { CaseStatus } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom"
import toast from "react-hot-toast";

export default function ChangeCaseStatusButton({ resourceId, currentStatus }: { resourceId: string; currentStatus: CaseStatus }) {
    //@ts-ignore
    const [state, formAction] = useFormState(handleChangeCaseStatus, changeCaseStatusSchema._output)
    const router = useRouter()

    if (state?.result?.success === true) {
        toast.success(`Operation successful`)
        state.result.success = false
        router.refresh()
    }
    return (
        <form action={formAction}>
            <input type={`hidden`} id={`resourceId`} name={`resourceId`} value={resourceId} />
            <input type={`hidden`} id={`status`} name={`status`} value={currentStatus === CaseStatus['NEW'] ? CaseStatus['ANSWERED'] : CaseStatus['NEW']} />
            <Button
                className={`mt-4`}
                variant={`dark`}
            >{currentStatus === 'NEW' ? 'Mark as answered' : 'Mark as new'}</Button>
        </form>
    )
}