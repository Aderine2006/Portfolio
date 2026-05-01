"use client";

import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
    {
        title: "Frontend & UI",
        skills: [
            { name: "Next.js", slug: "nextdotjs", color: "#000000" },
            { name: "React", slug: "react", color: "#61DAFB" },
            { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
            { name: "TypeScript", slug: "typescript", color: "#3178C6" },
            { name: "Framer", slug: "framer", color: "#0055FF" },
        ]
    },
    {
        title: "Backend & Systems",
        skills: [
            { name: "Node.js", slug: "nodedotjs", color: "#339933" },
            { name: "Express", slug: "express", color: "#000000" },
            { name: "Prisma", slug: "prisma", color: "#2D3748" },
            { name: "MongoDB", slug: "mongodb", color: "#47A248" },
            { name: "Firebase", slug: "firebase", color: "#FFCA28" },
            { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
        ]
    },
    {
        title: "Languages & Core",
        skills: [
            { name: "Python", slug: "python", color: "#3776AB" },
            { name: "C++", slug: "cplusplus", color: "#00599C" },
            { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
            { name: "Snowflake", slug: "snowflake", color: "#29B5E8" },
        ]
    },
    {
        title: "AI & Tools",
        skills: [
            { name: "OpenAI", slug: "openai", color: "#412991", iconUrl: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
            { name: "n8n", slug: "n8n", color: "#FF6D5A" },
            { name: "Git", slug: "git", color: "#F05032" },
            { name: "Github", slug: "github", color: "#181717" },
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="w-full py-32 px-4 relative overflow-hidden bg-background scroll-mt-32">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] -z-10" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-24 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Technical <span className="text-gradient">Skills</span>
                        </h2>
                        <p className="text-foreground/60 max-w-xl text-lg leading-relaxed mx-auto md:mx-0">
                            A deep dive into the technologies and tools I use to engineer <br />
                            high-performance software solutions with a focus on speed and scale.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-[3rem] border-foreground/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                            
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12 opacity-40 group-hover:opacity-100 transition-opacity">
                                {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-10 md:gap-12">
                                {category.skills.map((skill, i) => (
                                    <motion.div 
                                        key={skill.name} 
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                                        whileHover={{ scale: 1.1 }}
                                        className="flex flex-col items-center gap-4 group/skill cursor-pointer"
                                    >
                                        <div 
                                            className="w-16 h-16 rounded-[1.5rem] bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center p-3.5 transition-all duration-500 group-hover/skill:bg-primary/10 group-hover/skill:border-primary/30 relative"
                                            style={{ 
                                                // @ts-ignore
                                                "--skill-color": skill.color 
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-[var(--skill-color)] opacity-0 group-hover/skill:opacity-[0.08] transition-opacity rounded-[1.5rem]" />
                                            <img
                                                src={skill.iconUrl || `https://cdn.simpleicons.org/${skill.slug}`}
                                                alt={skill.name}
                                                className="w-full h-full object-contain transition-all duration-500 group-hover/skill:scale-110 dark:brightness-200"
                                                onError={(e) => {
                                                    // Fallback if logo fails
                                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${skill.name}&background=random&color=fff`;
                                                }}
                                            />
                                        </div>
                                        <span className="text-[9px] font-black text-foreground/30 group-hover/skill:text-primary transition-colors uppercase tracking-widest text-center leading-tight">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
