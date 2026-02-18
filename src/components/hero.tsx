"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden text-center">
            {/* Background Glows */}
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-12 flex flex-col items-center"
            >
                {/* Avatar Placeholder / Memoji Glow */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 relative z-10 shadow-2xl shadow-primary/20">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aderine&backgroundColor=030014"
                            alt="Aderine"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
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
                    Hello! I'm Aderine Perez
                </span>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] w-full">
                    Architecting High-Performance <br />
                    <span className="text-gradient">Product Systems.</span>
                </h1>
                <p className="text-lg md:text-2xl text-foreground/50 mb-12 max-w-3xl leading-relaxed font-medium mx-auto">
                    4th Sem CS Engineer & Product Thinker. Interned at Clofy Technologies & EdTech startups.
                    Bridging technical excellence with product intuition to build high-impact solutions.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <a
                        href="#projects"
                        className="px-10 py-5 bg-white text-black rounded-full font-black flex items-center gap-3 hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-white/10 w-full md:w-auto text-center justify-center"
                    >
                        View My Work <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="flex items-center gap-4">
                        <SocialLink href="#" icon={<Github className="w-6 h-6" />} />
                        <SocialLink href="#" icon={<Linkedin className="w-6 h-6" />} />
                        <SocialLink href="#" icon={<Youtube className="w-6 h-6" />} />
                    </div>
                </div>
            </motion.div>

            {/* Metrics Row - Improved Visual Presence */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-32 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-12"
            >
                <Metric value="30%" label="Efficiency Gain" />
                <Metric value="200+" label="Items Scoped" />
                <Metric value="20+" label="Community Leads" />
                <Metric value="4th" label="Sem CSE" />
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="p-4 glass-card rounded-full hover:bg-white/10 transition-all hover:scale-110 flex items-center justify-center text-foreground/50 hover:text-white border-white/5 hover:border-white/20"
        >
            {icon}
        </a>
    );
}

function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center group">
            <span className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">{value}</span>
            <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-[0.2em]">{label}</span>
            <div className="w-8 h-1 bg-primary/20 mt-4 rounded-full group-hover:w-12 transition-all" />
        </div>
    );
}
