"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Next-Gen Personal Tracker",
        category: "Productivity / SaaS",
        description: "MYMate - A modern, beautiful career tracking web application. Features a dashboard for progress, goals management, and skill development monitoring.",
        impact: "Includes Daily Schedule, Budget Planner, and Content Creation analysis tools.",
        tech: ["React 18", "TypeScript", "Tailwind CSS", "Firebase", "Lucide"],
        github: "https://github.com/Aderine2006/My_Mate",
        link: "https://mymate-2487.web.app/",
        image: "/Next-gen-personal-tracker.png"
    },
    {
        title: "Smart Attendance System",
        category: "AI / Facial Recognition",
        description: "AI-powered system for automatic attendance tracking with fraud prevention and liveness detection using webcam feeds.",
        impact: "Features real-time monitoring, blink detection for security, and detailed PDF/Excel reports.",
        tech: ["Python", "OpenCV", "Face Recognition", "SQLite", "Flask"],
        github: "https://github.com/Aderine2006/Smart_Attendance",
    },
    {
        title: "AI Agent Fleet Maintenance",
        category: "AI Agentic Workflow / n8n",
        description: "Agentic automation system for real-time vehicle fleet health monitoring using LangChain and Gemini.",
        impact: "Improved maintenance efficiency by 40% with automated proactive alerts.",
        tech: ["n8n", "LangChain", "Gemini", "Google Sheets"],
        github: "https://github.com/Aderine2006/AI_Agent_for_vehicleFleet",
        image: "/fleet-maintenance-workflow.png"
    },
    {
        title: "Aderine Bank",
        category: "Python / OOP",
        description: "A secure mini-banking system built entirely with manual logic (No AI) using Object-Oriented Programming.",
        impact: "Supports Signup, Deposit, Withdraw, and precise Transaction Tallying using pure OOP.",
        tech: ["Python", "OOP", "Logic Design"],
        github: "https://github.com/Aderine2006/Aderine_Bank",
    }
];

export function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-4 overflow-hidden scroll-mt-32">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="text-gradient">Projects</span></h2>
                        <p className="text-foreground/60 text-lg">Case studies of solving complex problems with high-performance engineering.</p>
                    </div>
                    <a href="https://github.com/Aderine2006" target="_blank" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                        View All on GitHub <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-all"
                        >
                            {/* Project Card Header/Visual */}
                            <div className="h-56 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                ) : (
                                    <div className="text-4xl font-black opacity-10 select-none tracking-tighter uppercase group-hover:scale-110 group-hover:opacity-20 transition-all">
                                        {project.title.split(' ')[0]}
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.github && <CardAction href={project.github} icon={<Github className="w-4 h-4" />} />}
                                    {project.link && <CardAction href={project.link} icon={<ExternalLink className="w-4 h-4" />} />}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/60 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>

                                <div className="space-y-4 mb-8 flex-1">
                                    <div className="p-4 bg-foreground/[0.02] border border-foreground/5 rounded-2xl">
                                        <span className="text-[10px] text-foreground/40 font-black uppercase block mb-1 tracking-widest">Impact</span>
                                        <p className="text-foreground/80 text-xs italic">"{project.impact}"</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-foreground/5 border border-foreground/5 rounded-lg text-[9px] font-bold text-foreground/40 group-hover:border-primary/20 group-hover:text-primary/80 transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Case Study Snippet */}
                                <div className="pt-6 border-t border-foreground/5 mt-auto">
                                    <a href={project.github} target="_blank" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors flex items-center gap-2 group/btn">
                                        View Repository <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CardAction({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            className="w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-foreground/5 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/5 z-20"
        >
            {icon}
        </a>
    );
}
