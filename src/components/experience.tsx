"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Award, ArrowUpRight } from "lucide-react";
import React from "react";

const experiences = [
    {
        role: "Software Engineer Intern",
        company: "SNS Square",
        location: "Coimbatore",
        period: "Feb 2026 - May 2026",
        description: "Orchestrating backend automation and API-driven architectures using n8n and advanced integrations.",
        metrics: [
            "Developed 10+ custom automation nodes",
            "Reduced operational overhead by 50% through end-to-end workflow automation",
            "Implemented enterprise-grade OAuth 2.0 authentication systems",
        ],
        color: "var(--primary)"
    },
    {
        role: "Python Developer Intern",
        company: "Elevate Labs",
        location: "Remote",
        period: "Aug 2025 - Sept 2025",
        description: "Developed multiple Python-based applications focusing on automation, object-oriented programming, and efficient problem-solving.",
        metrics: [
            "Built 8+ projects leveraging automation and OOP principles",
            "Improved application performance by 30% through code optimization",
            "Achieved 90%+ code reliability using testing and debugging techniques"
        ],
        certificate: "/python_intern_certificate.png",
        color: "var(--primary)"
    },
    {
        role: "R&D Intern",
        company: "EdTech Startup",
        location: "Remote",
        period: "2025",
        description: "Pioneered AI-driven educational framing strategies to optimize pedagogical content delivery.",
        metrics: [
            "Achieved 30% boost in course framing efficiency",
            "Reduced research-to-deployment cycle by 14 days",
            "Leveraged LLMs for automated pedagogy mapping"
        ],
        color: "var(--secondary)"
    }
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${exp.color}15, transparent 80%)`;

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/30 transition-all mb-12 last:mb-0"
        >
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background }}
            />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 relative z-10">
                <div className="flex-1">
                    <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="w-4 h-4" />
                        </div>
                        {exp.company}
                    </div>

                    <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-foreground/60 mb-10 max-w-2xl text-base leading-relaxed">{exp.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {exp.metrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-start gap-3 p-4 bg-foreground/[0.02] border border-foreground/5 rounded-2xl group/metric hover:bg-primary/5 hover:border-primary/10 transition-all"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 opacity-40 group-hover/metric:opacity-100" />
                                <span className="text-[11px] font-bold text-foreground/50 group-hover/metric:text-foreground/80 leading-tight tracking-tight uppercase">{metric}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certificate Action */}
                    {exp.certificate && (
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={exp.certificate}
                            target="_blank"
                            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all group/cert shadow-2xl shadow-black/5"
                        >
                            <Award className="w-4 h-4" />
                            View Internship Certificate
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover/cert:translate-x-1 group-hover/cert:-translate-y-1 transition-transform" />
                        </motion.a>
                    )}
                </div>

                <div className="flex flex-col gap-4 pt-2">
                    <div className="px-6 py-3 bg-background/50 backdrop-blur-xl border border-foreground/5 rounded-2xl flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                            <Calendar className="w-3.5 h-3.5" /> Period
                        </div>
                        <span className="text-sm font-bold">{exp.period}</span>
                    </div>
                    <div className="px-6 py-3 bg-background/50 backdrop-blur-xl border border-foreground/5 rounded-2xl flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                            <MapPin className="w-3.5 h-3.5" /> Location
                        </div>
                        <span className="text-sm font-bold">{exp.location}</span>
                    </div>
                </div>
            </div>

            {/* Premium visual indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -z-10 rounded-full group-hover:bg-primary/20 transition-all" />
        </motion.div>
    );
}

export function Experience() {
    return (
        <section id="experience" className="w-full py-32 px-4 relative overflow-hidden bg-background scroll-mt-32">
            <div className="absolute inset-0 grid-pattern opacity-[0.02] -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-24 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Professional <span className="text-gradient">Experience</span>
                        </h2>
                        <p className="text-foreground/60 max-w-xl text-lg leading-relaxed mx-auto md:mx-0">
                            Driving high-impact value through technical innovation and <br />
                            strategic product-first engineering methodologies.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-12 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent -z-10 hidden lg:block" />

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
