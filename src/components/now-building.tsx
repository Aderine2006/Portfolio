"use client";

import { motion } from "framer-motion";
import { Rocket, Clock, CheckCircle2 } from "lucide-react";

const currentWork = [
    {
        title: "Bruno AI Chatbot",
        status: "In Progress",
        progress: 75,
        description: "Integrating an advanced AI assistant into the RoomHunter platform for real-time student support.",
        tags: ["LLM", "RAG", "Next.js"]
    },
    {
        title: "GATE CSE 2026 Preparation",
        status: "Daily Rigor",
        progress: 40,
        description: "Intensive study of core CS fundamentals: OS, DBMS, Algorithms, and Theory of Computation.",
        tags: ["Academics", "Fundamentals"]
    }
];

export function CurrentlyBuilding() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Currently <span className="text-gradient">Building</span></h2>
                        <p className="text-foreground/60">A glimpse into my current focus and active engineering challenges.</p>
                    </div>
                    <div className="px-4 py-2 glass-card rounded-full flex items-center gap-2 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Active Status: Open for Collaborations
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {currentWork.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 text-primary">
                                    <Rocket className="w-5 h-5" />
                                    <span className="font-bold tracking-widest uppercase text-xs">{work.status}</span>
                                </div>
                                <span className="text-sm font-bold text-foreground/40">{work.progress}%</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                            <p className="text-foreground/60 mb-6">{work.description}</p>

                            <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${work.progress}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {work.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-primary/5 border border-primary/10 rounded-md text-[10px] font-mono text-primary/80">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
