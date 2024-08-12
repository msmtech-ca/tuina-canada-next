import clsx from "clsx"
import { HTMLInputTypeAttribute, useId } from "react"

interface TextAreaProps {
    name: string;
    labelName: string;
    rows: number;
    error?: string | string[] | undefined;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
}

export default function TextArea({ name, labelName, rows, error, required=false, readonly=false, disabled=false }: TextAreaProps) {
    const id = useId()
    return (
        <div className={`py-1 h-full w-full flex items-end`}>
            <div className={`grow`}>
                <label
                    className={clsx([`block font-medium`, disabled ? `text-neutral-300` : ``])}
                    htmlFor={id}
                >
                    <span>{labelName}</span>
                    {required && (
                        <span className={`text-red-600`}>*</span>
                    )}
                </label>
                <textarea
                    className={clsx([`w-full bg-transparent rounded-md border px-2 py-2 shadow-sm text-base mt-1`, error ? `border-red-500` : `border-neutral-500`])}
                    id={id}
                    rows={rows}
                    name={name}
                    required={required}
                    readOnly={readonly}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}