"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-40 pb-30 px-8 overflow-hidden text-center">
            {/* Background Glows */}
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-12 flex flex-col items-center"
            >
                {/* Avatar Placeholder / Memoji Glow */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1 relative z-10 shadow-2xl shadow-primary/20">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img
                            src="/Professional 2.png"
                            alt="Aderine"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                    {/* Resume Download Button */}
                    <motion.a
                        href="/Aderine_CV.pdf"
                        download
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -top-4 -left-4 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 cursor-pointer z-30 group border-2 border-background"
                    >
                        <FileText className="w-6 h-6" />
                        <span className="absolute left-16 bg-background border border-primary/20 px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-xl text-primary">
                            Download CV
                        </span>
                    </motion.a>
                </div>

                {/* Available Badge - Improved Positioning */}
                <div className="absolute -bottom-2 right-0 md:-right-4 bg-background border border-primary/30 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl z-20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Available
                </div>

                <div className="absolute -inset-8 bg-primary/20 blur-[60px] rounded-full -z-10 animate-pulse pointer-events-none" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col items-center max-w-7xl w-full"
            >
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 px-4 py-2 glass-card rounded-full inline-block">
                    Hello!    I'm Aderine Perez Victor Joans
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto text-center text-balance">
                    Architecting High-Performance <span className="text-gradient">Product Systems.</span>
                </h1>
                <p className="text-lg md:text-2xl text-foreground/50 mb-12 max-w-3xl leading-relaxed font-medium mx-auto">
                    6th Sem CSE Student | Product Thinker. Interned at SNS Square & EdTech startups.
                    Bridging technical excellence with product intuition to build high-impact solutions.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <a
                        href="#projects"
                        className="px-10 py-5 bg-foreground text-background rounded-full font-black flex items-center gap-3 hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-foreground/10 w-full md:w-auto text-center justify-center"
                    >
                        View My Work <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="flex items-center gap-4">
                        <SocialLink href="https://github.com/Aderine2006" icon={<Github className="w-6 h-6" />} isExternal />
                        <SocialLink href="https://www.linkedin.com/in/aderine-perez" icon={<Linkedin className="w-6 h-6" />} isExternal />
                        <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=perezaderine@gmail.com" icon={<Mail className="w-6 h-6" />} isExternal />
                    </div>
                </div>
            </motion.div>

            {/* Metrics Row - Improved Visual Presence */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-32 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-foreground/10 pt-12"
            >
                <Metric value="30%" label="Efficiency Gain" />
                <Metric value="200+" label="Items Scoped" />
                <Metric value="20+" label="Community Leads" />
                <Metric value="6th" label="Sem CSE" />
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, isExternal }: { href: string; icon: React.ReactNode; isExternal?: boolean }) {
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="p-4 glass-card rounded-full hover:bg-primary/10 transition-all hover:scale-110 flex items-center justify-center text-foreground/50 hover:text-primary border-foreground/5 hover:border-primary/20"
        >
            {icon}
        </a>
    );
}

function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center group cursor-default">
            <span className="text-4xl md:text-5xl font-black text-primary mb-2 transition-all group-hover:scale-110 group-hover:text-accent">{value}</span>
            <span className="text-[10px] text-foreground/60 font-black uppercase tracking-[0.2em]">{label}</span>
            <div className="w-12 h-1.5 bg-primary/10 mt-4 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-500" />
            </div>
        </div>
    );
}
