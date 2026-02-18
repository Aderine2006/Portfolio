"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Frontend & Backend Intern",
        company: "Clofy Technologies",
        location: "Remote",
        period: "2024",
        description: "Developed and optimized full-stack components for core products, focusing on scalability and user experience.",
        metrics: ["15% improvement in load times", "Built 5+ core features"]
    },
    {
        role: "Applications Engineering Intern",
        company: "Revenue Operations",
        location: "Chennai, TN",
        period: "2024",
        description: "Streamlined internal workflows and automated revenue tracking systems using modern technical stacks.",
        metrics: ["Automated 3 manual processes", "Optimized data flow by 20%"]
    },
    {
        role: "R&D Intern",
        company: "EdTech Startup",
        location: "Remote",
        period: "2 mos",
        description: "Researched and implemented AI-based content framing strategies to improve educational delivery.",
        metrics: ["30% efficiency boost in course framing", "Reduced R&D cycle by 2 weeks"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="w-full py-24 px-4 bg-black/20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
                    <p className="text-foreground/60 text-lg">Driving impact through technical excellence and strategic execution.</p>
                </div>

                <div className="grid gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{exp.role}</h3>
                                    <p className="text-foreground/70 mb-6 max-w-2xl">{exp.description}</p>

                                    <div className="flex flex-wrap gap-4">
                                        {exp.metrics.map((metric, i) => (
                                            <div key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase">
                                                {metric}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 text-sm text-foreground/40 font-medium">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative side bar */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-50 transition-all group-hover:w-2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
