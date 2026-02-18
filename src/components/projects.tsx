"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "RoomHunter",
        category: "PropTech / Platform",
        description: "A brokerage platform for students featuring unique trade-in discount logic and AI-driven room matching.",
        impact: "Recieved IEEE-level research recognition for its innovative trade-in logic.",
        tech: ["Next.js", "Node.js", "Prisma", "AI Chatbot"],
        problem: "Students struggling with high brokerage fees and inefficient room hunting.",
        approach: "Built a peer-to-peer system with trade-in discounts to eliminate middle-men.",
        link: "#",
        github: "#"
    },
    {
        title: "Realtime Disaster Aggregation",
        category: "System Design / SIH",
        description: "Highly scalable system for real-time aggregation of disaster data across multiple sources.",
        impact: "Designed to handle 10k+ concurrent requests with minimal latency.",
        tech: ["React", "Express", "API Integration", "GeoJSON"],
        problem: "Fragmented data sources making disaster response slow and erratic.",
        approach: "Aggregated live feeds into a centralized dashboard with predictive heat-mapping.",
        link: "#",
        github: "#"
    },
    {
        title: "One-Shot Video Explainer",
        category: "Generative AI",
        description: "AI-based tool that automatically generates educational explainer videos from text inputs.",
        impact: "Reduced video production time from hours to seconds.",
        tech: ["Python", "OpenAI", "MoviePy", "Next.js"],
        problem: "Content creators spending excessive time on basic frame sequencing.",
        approach: "Leveraged LLMs to script and sequence frames automatically using Generative AI.",
        link: "#",
        github: "#"
    },
    {
        title: "Last Hope",
        category: "Social Impact / Hackathon",
        description: "A community-driven lost and found platform built during a high-pressure hackathon.",
        impact: "Built MVP in under 24 hours with full geolocation support.",
        tech: ["Next.js", "Firebase", "Tailwind"],
        problem: "Lack of a centralized, trusted platform for lost items in local communities.",
        approach: "Community-verified reporting with real-time notifications.",
        github: "#"
    }
];

export function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="text-gradient">Projects</span></h2>
                        <p className="text-foreground/60 text-lg">Case studies of solving complex problems with high-performance engineering.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                        See all projects <ArrowRight className="w-4 h-4" />
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
                            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full"
                        >
                            {/* Project Card Header/Visual */}
                            <div className="h-48 bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="text-4xl font-black opacity-20 select-none tracking-widest uppercase">
                                    {project.title.split(' ')[0]}
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.github && <CardAction icon={<Github className="w-4 h-4" />} />}
                                    {project.link && <CardAction icon={<ExternalLink className="w-4 h-4" />} />}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                <p className="text-foreground/60 text-sm mb-6 line-clamp-2">{project.description}</p>

                                <div className="space-y-4 mb-6 flex-1">
                                    <div className="text-xs">
                                        <span className="text-foreground/40 font-bold uppercase block mb-1">Impact</span>
                                        <p className="text-foreground/80 italic">"{project.impact}"</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Case Study Snippet */}
                                <div className="pt-6 border-t border-border mt-auto">
                                    <button className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                                        View Case Study <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CardAction({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-border flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
            {icon}
        </div>
    );
}
