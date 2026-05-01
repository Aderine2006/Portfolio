"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex items-center justify-between pointer-events-none"
        >
            <div className="flex items-center gap-4 pointer-events-auto">
                <Link href="/" className="group flex items-center gap-3 glass-card px-5 py-3 rounded-2xl border-primary/20 bg-background/50">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-lg group-hover:rotate-12 transition-transform">A</div>
                    <span className="text-sm font-black tracking-tighter uppercase group-hover:text-primary transition-colors">Aderine Perez Victor Joans</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-2 pointer-events-auto glass-card p-1.5 rounded-2xl border-foreground/5 bg-background/30 backdrop-blur-3xl">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-5 py-2.5 text-[10px] font-black text-foreground/40 hover:text-primary hover:bg-primary/5 rounded-xl transition-all uppercase tracking-[0.2em] whitespace-nowrap"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
                <div className="glass-card p-2 rounded-xl border-foreground/5 bg-background/30">
                    <ThemeToggle />
                </div>
                <Link
                    href="#contact"
                    className="px-6 py-3 bg-foreground text-background rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-xl active:scale-95"
                >
                    Let's Talk
                </Link>
            </div>
        </motion.nav>
    );
}
