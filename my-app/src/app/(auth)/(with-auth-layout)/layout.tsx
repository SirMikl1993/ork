"use client";

import React from "react"
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./style.css"

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot password", href: "/forgot-password"},
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <>
            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name} className={isActive?"font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
                    );
                })
            }
            <h2>Inner layout</h2>
            {children}
        </>
    )
}