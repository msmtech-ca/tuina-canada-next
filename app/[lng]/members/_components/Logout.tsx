'use client'

import { handleLogOut } from "@/app/actions"

export default function Logout() {
    return <span onClick={() => handleLogOut()}>Log Out Securely</span>
}