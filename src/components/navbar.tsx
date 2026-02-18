"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass-card rounded-full flex items-center gap-8"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                AVJ.
            </Link>
            <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link
                href="#contact"
                className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
                Hire Me
            </Link>
        </motion.nav>
    );
}
