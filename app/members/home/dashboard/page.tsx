import authManager from "@/src/auth"
import { redirect } from "next/navigation"
import prisma from '@/src/database'
import { PropsWithChildren } from 'react';
import Link from "next/link";
import { handleLogOut } from "@/app/actions";
import Logout from "../../_components/Logout";
import Table from "../../_components/Table";

export default async function Page() {

    const user = await authManager.authenticate()
    if (!user) {
        redirect(`${process.env.NEXT_PUBLIC_HOST}/members/login`)
    }

    const userData = await prisma.user.findFirst({
        where: {
            id: user.id,
        },
        include: {
            planSubscription: {
                include: {
                    plan: true,
                }
            },
        }
    })

    return (
        <div className={`grid grid-cols-12 gap-8`}>
            <div className={`col-span-4 p-8`}>
                <div>
                    <h1 className={`font-serif text-4xl leading-none font-bold`}>{userData?.title + ` ` + userData?.firstName + ` ` + userData?.lastName}</h1>
                    <p className={`mt-1 text-xl`}>No. 1118-{userData?.userId}</p>
                </div>
                <div className={`mt-4`}>
                    <div className={`font-bold`}>Member Since</div>
                    <div>{new Date(user.createdAt).toLocaleDateString('en-CA', {year: 'numeric', month: 'short'})}</div>
                </div>
                <div className={`mt-8 pt-4 border-t border-t-neutral-400`}>
                    <h3 className={`font-serif text-2xl leading-none font-bold`}>Member details</h3>
                    <div className={`font-bold mt-4`}>Personal</div>
                    <p className={`leading-tight`}>
                        <span className={`font-medium`}>Sex:</span> {user.sex}<br />
                        <span className={`font-medium`}>Date of birth:</span> {new Date(user.dateOfBirth).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})}<br />
                        <span className={`font-medium`}>SIN:</span> {user.sin}
                    </p>
                    <div className={`font-bold mt-4`}>Address</div>
                    <p className={`leading-tight`}>
                        {`${userData?.address1}${userData?.address2 ? ` ` + userData?.address2 : ``}`}<br />
                        {`${userData?.city} ${userData?.province} ${userData?.zip}`}<br />
                        {`${userData?.country}`}<br />
                    </p>
                    <div className={`font-bold mt-4`}>Contact</div>
                    <p className={`leading-tight`}>
                        {`${userData?.email}`}<br />
                        {`${userData?.phone}`}<br />
                    </p>
                </div>
            </div>
            <div className={`col-span-8 p-8`}>
                <div className={`flex items-center gap-2`}>
                    <h2 className={`font-serif text-2xl leading-none font-bold`}>Membership status</h2>
                    <span className={`bg-primary-400 text-primary-900 rounded-full px-4 py-0.5 leading-none font-bold text-sm`}>{userData?.planSubscription?.active ? `ACTIVE` : `INACTIVE`}</span>
                </div>
                <div className={`mt-4`}>
                    <div className={`font-bold text-xl`}>
                        <span>{userData?.planSubscription?.plan.title}</span>
                    </div>
                    <p className={`leading-tight`}>{`Renews ${userData?.planSubscription?.plan.frequency === 'MONTHLY' ? 'monthly' : 'yearly'} at ${userData?.planSubscription?.plan.price.toFixed(2).toString()}`}</p>
                    <div className={`font-bold mt-2`}>Benefits</div>
                    <ul className={`mt-1 list-disc list-outside flex flex-col leading-tight ps-6`}>
                        <li>Professional network</li>
                        <li>Insurance Recognition</li>
                        <li>Full Admin Support</li>
                        <li>Technology Package</li>
                    </ul>
                </div>
                <div className={`mt-8 pt-4 border-t border-t-neutral-400`}>
                    <h3 className={`font-serif text-2xl leading-none font-bold`}>Invoices</h3>
                    <div className={`mt-4`}>
                        <Table
                            headings={[
                                'Date',
                                'Description',
                                'Amount',
                                'Status',
                                'Action',
                            ]}
                        >
                            <Table.Row>
                                <Table.Cell>2022-01-25</Table.Cell>
                                <Table.Cell>Membership renewal</Table.Cell>
                                <Table.Cell>$999.99</Table.Cell>
                                <Table.Cell>
                                    <div className={`flex items-center h-full`}>
                                        <span className={`bg-primary-400 text-primary-900 rounded-full px-4 py-0.5 leading-none font-bold text-sm`}>Paid</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href={`#`}>Download</Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2022-01-25</Table.Cell>
                                <Table.Cell>Membership renewal</Table.Cell>
                                <Table.Cell>$999.99</Table.Cell>
                                <Table.Cell>
                                    <div className={`flex items-center h-full`}>
                                        <span className={`bg-primary-400 text-primary-900 rounded-full px-4 py-0.5 leading-none font-bold text-sm`}>Paid</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link href={`#`}>Download</Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}