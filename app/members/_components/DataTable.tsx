import clsx from "clsx";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

interface DataTableProps<D> {
    headings: string[];
    data: Array<D>;
    displayDataKeys: Array<keyof D>;
    actions?: Array<{
        href: string;
        label: string;
    }>;
    manageable?: boolean;
    resourceKey?: keyof D;
    resourcePath?: string;
}

export default function DataTable<D>({ headings, data, displayDataKeys, actions, manageable=false, resourceKey, resourcePath }: DataTableProps<D>) {

    return (
        <table className={`table-fixed w-full`}>
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index} className={`text-left py-2`}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`hover:bg-neutral-200`}>
                        {displayDataKeys.map((key, keyIndex) => (
                            <td key={`displayDataKeyIndex-${keyIndex}`} className={`border-t border-t-neutral-400 py-2`}>
                                {(manageable && resourcePath && resourceKey) ? (
                                    <Link href={`${resourcePath}/${row[resourceKey]}`} className={`hover:no-underline block`}>
                                        {row[key] as ReactNode}
                                    </Link>
                                ): (
                                    <>
                                        {row[key] as ReactNode}
                                    </>
                                )}
                            </td>
                        ))}
                        {actions && actions.length && (
                            <>
                                {actions.map((action, actionIndex) => (
                                    <td key={`actionsIndex-${actionIndex}`} className={`border-t border-t-neutral-400 py-2`}>
                                        <Link href={action.href}>{action.label}</Link>
                                    </td>
                                ))}
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}