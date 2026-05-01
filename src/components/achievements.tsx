"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Star, ArrowUpRight } from "lucide-react";
import React from "react";

const achievements = [
    {
        title: "Project Expo Winner",
        metric: "Rank #1",
        subtitle: "University Level",
        description: "Awarded 1st place in the University-level Project Expo for exceptional engineering and innovation.",
        icon: Trophy,
        color: "#FFD700"
    },
    {
        title: "AI Automation Mentor",
        metric: "500+",
        subtitle: "Students Trained",
        description: "Empowered 500+ students with AI Automation and Design Thinking through intensive workshops and bootcamps.",
        icon: Users,
        color: "#00E5FF"
    },
    {
        title: "Industry Expert",
        metric: "8+",
        subtitle: "Global Clients",
        description: "Successfully collaborated with and delivered industry-grade software solutions for 8+ diverse clients.",
        icon: Briefcase,
        color: "#7000FF"
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="w-full py-32 px-4 relative overflow-hidden bg-background scroll-mt-32">
            <div className="absolute inset-0 grid-pattern opacity-[0.02] -z-10" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Star className="w-3 h-3 fill-primary" />
                            Milestones
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Key <span className="text-gradient">Achievements</span>
                        </h2>
                        <p className="text-foreground/60 max-w-xl text-lg leading-relaxed mx-auto">
                            Quantifiable impact and recognition earned through relentless <br />
                            pursuit of excellence in engineering and mentorship.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card group p-10 rounded-[3rem] relative overflow-hidden border-foreground/5 hover:border-primary/20 transition-all text-center"
                        >
                            {/* Background Glow */}
                            <div 
                                className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity rounded-full"
                                style={{ backgroundColor: item.color }}
                            />

                            <div className="relative z-10 flex flex-col items-center">
                                <div 
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500"
                                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                                >
                                    <item.icon className="w-8 h-8" />
                                </div>

                                <div className="mb-6">
                                    <div className="text-5xl font-black tracking-tighter mb-2" style={{ color: item.color }}>
                                        {item.metric}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                                        {item.subtitle}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-foreground/50 text-sm leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-foreground/5 w-full">
                                    <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        Impact Verified <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
