"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users, BookOpen } from "lucide-react";

const differentiators = [
    {
        title: "Product Engineering Mindset",
        description: "I don't just write code; I build solutions. I focus on user impact, business goals, and scalable architecture from day one.",
        icon: <Target className="w-6 h-6 text-primary" />
    },
    {
        title: "Community & Leadership",
        description: "Built a 20-member tech community and conducted bootcamps for government school students. I thrive in collaborative environments.",
        icon: <Users className="w-6 h-6 text-primary" />
    },
    {
        title: "Continuous Innovation",
        description: "Preparing for GATE CSE 2026 while building AI systems. I maintain a rigorous discipline (gym & learning) for peak performance.",
        icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
        title: "Research-Oriented",
        description: "Published an IEEE-level research draft. I approach problems with academic rigor and engineering precision.",
        icon: <BookOpen className="w-6 h-6 text-primary" />
    }
];

export function WhyHireMe() {
    return (
        <section id="about" className="py-24 px-4 bg-gradient-to-b from-transparent to-primary/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Hire <span className="text-gradient">Me?</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">What differentiates me from the average developer is my blend of technical depth, product intuition, and leadership.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
