import clsx from "clsx"
import { HTMLInputTypeAttribute, useId } from "react"

interface SelectProps {
    name: string;
    labelName: string;
    error?: string | string[] | undefined;
    required?: boolean;
    disabled?: boolean;
    options: Array<{
        label: string;
        value: string;
    }>;
}

export default function Select({ name, labelName, error, required=false, disabled=false, options }: SelectProps) {
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
                <select
                    className={clsx([`w-full bg-transparent rounded-md border px-2 py-2 shadow-sm text-base mt-1 disabled:text-neutral-300 disabled:border-neutral-300`, error ? `border-red-500` : `border-neutral-500`])}
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled}
                >
                    {options.map((option, optionIndex, optionArray) => (
                        <option key={`${id}-optionIndex-${optionIndex}`} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}