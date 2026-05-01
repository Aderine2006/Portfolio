"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-10 py-4 glass-card rounded-1xl flex items-center gap-10 border border-foreground/10 shadow-2xl shadow-primary/5"
        >
            <Link href="/" className="text-2xl font-black tracking-tighter hover:text-primary transition-colors whitespace-nowrap">
                Aderine Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-base font-bold text-foreground/70 hover:text-foreground transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link
                    href="#contact"
                    className="px-8 py-3 bg-primary text-white rounded-full text-base font-black hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 whitespace-nowrap"
                >
                    Hire Me
                </Link>
            </div>
        </motion.nav>
    );
}
