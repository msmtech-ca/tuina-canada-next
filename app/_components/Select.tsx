import clsx from "clsx"
import { HTMLAttributes, HTMLInputTypeAttribute, SelectHTMLAttributes, useId } from "react"

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
    value?: SelectHTMLAttributes<HTMLSelectElement>['value'];
    defaultValue?: HTMLAttributes<HTMLSelectElement>['defaultValue']
}

export default function Select({ name, labelName, error, required=false, disabled=false, options, value, defaultValue }: SelectProps) {
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
                    className={clsx([`w-full bg-transparent rounded-md border px-2 py-1.5 shadow-sm text-base mt-1 disabled:text-neutral-300 disabled:border-neutral-300`, error ? `border-red-500` : `border-neutral-500`])}
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled}
                    value={value}
                    defaultValue={defaultValue}
                >
                    {options.map((option, optionIndex, optionArray) => (
                        <option key={`${id}-optionIndex-${optionIndex}`} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}