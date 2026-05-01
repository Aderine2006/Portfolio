"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Layers, Database, Code2 } from "lucide-react";

const bentoItems = [
    {
        title: "The Stack",
        description: "Next.js, React, Tailwind, and Node.js for scalable web apps.",
        icon: <Layout className="w-6 h-6 text-primary" />,
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-transparent",
        logos: [
            { name: "Next.js", slug: "nextdotjs" },
            { name: "React", slug: "react" },
            { name: "Tailwind", slug: "tailwindcss" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Firebase", slug: "firebase" },
            { name: "Python", slug: "python" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "Prisma", slug: "prisma" },
            { name: "OpenAI", slug: "openai" },
        ]
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
        icon: <Layers className="w-6 h-6 text-primary" />,
        className: "md:col-span-2 md:row-span-1"
    }
];

export function TechArchitecture() {
    return (
        <section className="w-full py-24 px-4 bg-foreground/5 overflow-hidden">
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
                            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center transition-transform group-hover:scale-110">
                                {item.icon}
                            </div>

                            {item.logos && (
                                <div className="flex-1 flex items-center justify-center py-12">
                                    <div className="grid grid-cols-4 md:grid-cols-5 gap-8 md:gap-10">
                                        {item.logos.map((logo, i) => (
                                            <motion.div
                                                key={logo.slug}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 + (i * 0.05) }}
                                                whileHover={{ scale: 1.2, rotate: 5 }}
                                                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                                title={logo.name}
                                            >
                                                <img
                                                    src={`https://cdn.simpleicons.org/${logo.slug}`}
                                                    alt={logo.name}
                                                    className="w-full h-full object-contain dark:brightness-200"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

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
