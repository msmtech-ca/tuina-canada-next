'use client'

import Button from "@/app/_components/Button";
import { handleDeleteUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
    resourceId: null,
}

export default function DeleteUserButton({ resourceId }: { resourceId: string; }) {

    const [state, formAction] = useFormState(handleDeleteUser, initialState)
    const router = useRouter()

    if (state?.result?.success === true) {
        toast.success(`Operation successful`)
        router.push(`${process.env.NEXT_PUBLIC_HOST}/members/home/admin/users`)
    }

    return (
        <form action={formAction}>
            <input type={`hidden`} id={`resourceId`} name={`resourceId`} value={resourceId} />
            <Button
                size={`small`}
                className={`mt-4`}
                variant={`dark`}
            >{`Delete Member`}</Button>
        </form>
    )
}