'use client'
import { ReactNode, useActionState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Toaster } from "react-hot-toast";

export default function ToastProvider({ children }: { children: ReactNode }) {

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