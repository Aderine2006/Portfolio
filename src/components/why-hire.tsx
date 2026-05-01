"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Zap, Target, Users, BookOpen } from "lucide-react";
import React from "react";

const differentiators = [
    {
        title: "Product Engineering Mindset",
        description: "I don't just write code; I build solutions. I focus on user impact, business goals, and scalable architecture from day one.",
        icon: <Target className="w-6 h-6 text-primary" />,
        color: "var(--primary)"
    },
    {
        title: "Community & Leadership",
        description: "Built a 20-member tech community and conducted bootcamps for government school students. I thrive in collaborative environments.",
        icon: <Users className="w-6 h-6 text-secondary" />,
        color: "var(--secondary)"
    },
    {
        title: "Continuous Innovation",
        description: "Building AI systems. I maintain a rigorous discipline (gym & learning) for peak performance.",
        icon: <Zap className="w-6 h-6 text-accent" />,
        color: "var(--accent)"
    },
    {
        title: "Research-Oriented",
        description: "Published an IEEE-level research paper. I approach problems with academic rigor and engineering precision.",
        icon: <BookOpen className="w-6 h-6 text-primary" />,
        color: "var(--primary)"
    }
];

function SpotlightCard({ item, index }: { item: typeof differentiators[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${item.color}15, transparent 80%)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-all relative overflow-hidden h-full flex flex-col"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background }}
            />

            <div className="relative z-10">
                <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
            </div>
        </motion.div>
    );
}

export function WhyHireMe() {
    return (
        <section id="about" className="py-32 px-4 relative overflow-hidden bg-background scroll-mt-32">
            <div className="absolute inset-0 grid-pattern opacity-[0.02] -z-10" />
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Why Hire <span className="text-gradient">Me?</span>
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                            What differentiates me from the average developer is my unique blend of technical depth, product intuition, and leadership.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item, index) => (
                        <SpotlightCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
