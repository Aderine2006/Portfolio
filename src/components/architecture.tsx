"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Layers, Database, Code2 } from "lucide-react";

const bentoItems = [
    {
        title: "The Stack",
        description: "Next.js, React, Tailwind, and Node.js for scalable web apps.",
        icon: <Layout className="w-6 h-6 text-primary" />,
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-transparent"
    },
    {
        title: "AI Integration",
        description: "Leveraging OpenAI and Generative AI for automation.",
        icon: <Cpu className="w-6 h-6 text-secondary" />,
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "System Design",
        description: "API-first architecture and SIH-level problem solving.",
        icon: <Database className="w-6 h-6 text-accent" />,
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "UI/UX Masterclass",
        description: "Certified design thinking and high-fidelity prototyping.",
        icon: <Layers className="w-6 h-6 text-white" />,
        className: "md:col-span-2 md:row-span-1"
    }
];

export function TechArchitecture() {
    return (
        <section className="w-full py-24 px-4 bg-black/20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Architecture</span></h2>
                    <p className="text-foreground/60 max-w-xl">How I visualize and build modern software systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/50 transition-all ${item.className}`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-foreground/40 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
