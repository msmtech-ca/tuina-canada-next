import { spinnerIcon } from "@/src/lib/icons";
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react"

type variants = 'light' | 'dark' | 'primary' | 'secondary' | 'tertiary';
type sizes = 'small' | 'medium';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, HTMLButtonElement & HTMLAnchorElement> {
    to?: string;
    size?: sizes;
    variant?: variants;
    loading?: boolean;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {

    const { to, size='medium', variant='dark', loading=false, className, children, ...rest } = props

    const baseClass = 'inline-block shadow-sm rounded-full font-semibold transition-all hover:no-underline disabled:pointer-events-none aria-disabled:pointer-events-none'

    const sizes = {
        'small': 'py-2 px-4 text-base',
        'medium': 'py-3 px-8 text-lg',
    }

    const variants = {
        'light': 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 disabled:text-neutral-400 disabled:bg-neutral-200 aria-disabled:text-neutral-400 aria-disabled:bg-neutral-200',
        'dark': 'bg-neutral-900 text-neutral-50 hover:bg-neutral-950 active:bg-black disabled:text-neutral-400 disabled:bg-neutral-700 aria-disabled:text-neutral-400 aria-disabled:bg-neutral-700',
        'primary': 'bg-primary-600 text-neutral-50 hover:bg-primary-700 active:bg-primary-800 disabled:text-neutral-300 disabled:bg-primary-700 aria-disabled:text-neutral-300 aria-disabled:bg-primary-700',
        'secondary': 'bg-secondary-600 text-neutral-50 hover:bg-secondary-700 active:bg-secondary-800 disabled:text-neutral-300 disabled:bg-secondary-700 aria-disabled:text-neutral-300 aria-disabled:bg-secondary-700',
        'tertiary': 'bg-tertiary-600 text-neutral-50 hover:bg-tertiary-700 active:bg-tertiary-800 disabled:text-neutral-300 disabled:bg-tertiary-700 aria-disabled:text-neutral-300 aria-disabled:bg-tertiary-700',
    }

    if (props.to) {
        return (
            <Link aria-disabled={loading || props.disabled} href={props.to} className={clsx(baseClass, sizes[size], variants[variant], className)} {...rest}>{children}</Link>
        )
    }

    return (
        <button aria-disabled={loading || props.disabled} disabled={loading || props.disabled} className={clsx(baseClass, sizes[size], variants[variant], className)} {...rest}>
            {loading ? (
                <>
                    {`Please wait...`}
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    )
}