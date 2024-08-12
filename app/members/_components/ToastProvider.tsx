'use client'
import { toastTest } from "@/app/actions";
import { ReactNode, useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({ children }: { children: ReactNode }) {

    const [state, formAction] = useFormState(toastTest, { success: false })

    useEffect(() => {
        if (state.success) {
            console.log('ToastProvider Success!!!')
        }
    })

    return (
        <>
            {children}
            <Toaster
                toastOptions={{
                    className: `border border-neutral-900 bg-neutral-100 text-neutral-900`
                }}
                containerStyle={{ position: 'absolute' }}
                position="top-center"
            />
        </>
    )
}