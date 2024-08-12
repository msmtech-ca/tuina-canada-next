import clsx from "clsx"
import { HTMLInputTypeAttribute, InputHTMLAttributes, useId } from "react"

interface InputProps {
    name: string;
    labelName: string;
    type?: HTMLInputTypeAttribute;
    error?: string | string[] | undefined;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
    value?: InputHTMLAttributes<HTMLInputElement>['value'];
}

export default function Input({ name, labelName, type='text', error, required=false, readonly=false, disabled=false, minLength, maxLength, value }: InputProps) {
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
                {error && (
                    <div className={`text-red-500 peer text-sm`}>{Array.isArray(error) ? error?.join(' | ') : error}</div>
                )}
                <input
                    className={clsx([`w-full bg-transparent rounded-md border px-2 py-2 shadow-sm text-base mt-1 read-only:text-neutral-300 read-only:border-neutral-300 disabled:text-neutral-300 disabled:border-neutral-300`, error ? `border-red-500` : `border-neutral-500`])}
                    type={type}
                    id={id}
                    name={name}
                    required={required}
                    readOnly={readonly}
                    disabled={disabled}
                    minLength={minLength}
                    maxLength={maxLength}
                    value={value}
                />
            </div>
        </div>
    )
}