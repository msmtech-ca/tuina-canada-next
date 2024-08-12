import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface TableProps {
    headings: string[];
}

export default function Table({ headings, children }: PropsWithChildren<TableProps>) {
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
                {children}
            </tbody>
        </table>
    )
}

function Row({ children }: {children: ReactNode}) {
    return (
        <tr>{children}</tr>
    )
}

function Cell({ children }: {children: ReactNode}) {
    return (
        <td className={`border-t border-t-neutral-400 py-2`}>{children}</td>
    )
}

Table.Row = Row
Table.Cell = Cell