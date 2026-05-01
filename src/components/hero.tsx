"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import React from "react";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-12 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20 -z-10" />
            
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <Sparkles className="w-3 h-3" />
                        Available for Impact
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-balance"
                    >
                        Building <br />
                        <span className="text-gradient">Products</span> <br />
                        not just code.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-foreground/50 mb-12 max-w-xl leading-relaxed font-medium"
                    >
                        6th Sem CSE @ Coimbatore. Bridging the gap between 
                        <span className="text-foreground"> high-performance engineering</span> and 
                        <span className="text-foreground"> strategic product thinking</span>. 
                        Formerly SNS Square & Quillnetics.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-black rounded-2xl font-black flex items-center gap-3 hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-primary/20 w-full sm:w-auto justify-center"
                        >
                            Explore Work <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="flex items-center gap-4">
                            <SocialLink href="https://github.com/Aderine2006" icon={<Github className="w-5 h-5" />} isExternal />
                            <SocialLink href="https://www.linkedin.com/in/aderine-perez" icon={<Linkedin className="w-5 h-5" />} isExternal />
                            <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=perezaderine@gmail.com" icon={<Mail className="w-5 h-5" />} isExternal />
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual (Asymmetrical) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="relative"
                    >
                        {/* Abstract Background Shapes */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-[80px] rounded-full animate-pulse -z-10" />
                        <div className="absolute top-0 -right-4 w-24 h-24 bg-accent/20 blur-3xl rounded-full -z-10 animate-bounce transition-all duration-3000" />

                        {/* Main Avatar Frame */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] bg-foreground/5 p-1 relative z-10 overflow-visible group">
                            <div className="w-full h-full rounded-[2.8rem] bg-background flex items-center justify-center overflow-hidden border border-foreground/10 group-hover:border-primary/50 transition-colors duration-500">
                                <img
                                    src="/Professional 2.png"
                                    alt="Aderine"
                                    className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                                />
                            </div>

                            {/* Download CV (Floaty) */}
                            <motion.a
                                href="/Aderine_CV.pdf"
                                download
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.1 }}
                                className="absolute -top-6 -right-6 w-16 h-16 bg-foreground text-background rounded-2xl flex flex-col items-center justify-center shadow-2xl cursor-pointer z-30 group/cv border border-foreground/10 hover:bg-primary hover:text-black transition-colors"
                            >
                                <FileText className="w-6 h-6" />
                                <span className="text-[8px] font-black uppercase mt-1">CV</span>
                            </motion.a>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -left-6 px-6 py-3 bg-background border border-foreground/10 rounded-2xl shadow-2xl z-20 flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Student @</span>
                                <span className="text-sm font-bold">6th Sem CSE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}

function SocialLink({ href, icon, isExternal }: { href: string; icon: React.ReactNode; isExternal?: boolean }) {
    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="w-12 h-12 glass-card rounded-xl hover:bg-primary hover:text-black transition-all hover:-translate-y-1 flex items-center justify-center text-foreground/40 border-foreground/5"
        >
            {icon}
        </a>
    );
}
