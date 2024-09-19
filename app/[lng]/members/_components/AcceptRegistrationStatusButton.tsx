'use client'

import Button from "@/app/_components/Button";
import { handleChangeRegistrationStatus } from "@/app/actions";
import { changeRegistrationStatusSchema } from "@/src/validation";
import { RegistrationStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export default function AcceptRegistrationStatusButton({ resourceId }: { resourceId: string; }) {
    const [state, formAction] = useFormState(handleChangeRegistrationStatus, changeRegistrationStatusSchema._output)
    const router = useRouter()

    if (state?.result?.success === true) {
        toast.success(`Operation successful`)
        state.result.success = false
        router.refresh()
    }
    return (
        <form action={formAction}>
            <input type={`hidden`} id={`resourceId`} name={`resourceId`} value={resourceId} />
            <input type={`hidden`} id={`status`} name={`status`} value={RegistrationStatus['ACCEPTED']} />
            <Button
                className={`mt-4`}
                variant={`dark`}
            >{`Mark as accepted`}</Button>
        </form>
    )
}