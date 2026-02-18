"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <footer id="contact" className="w-full py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
                        Ready to build the <span className="text-gradient">future?</span>
                    </h2>
                    <p className="text-xl text-foreground/60 mb-12 max-w-xl mx-auto">
                        I'm currently looking for high-impact roles in selective product teams.
                        Let's discuss how I can contribute to your mission.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
                        <a
                            href="mailto:contact@aderine.dev"
                            className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" /> contact@aderine.dev
                        </a>
                        <div className="flex items-center gap-4">
                            <SocialIcon href="#" icon={<Github />} />
                            <SocialIcon href="#" icon={<Linkedin />} />
                            <SocialIcon href="#" icon={<Youtube />} />
                        </div>
                    </div>

                    <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/40 font-medium">
                        <p>© 2024 Aderine Perez Victor Joans. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-primary flex items-center gap-1">Resume <ArrowUpRight className="w-3 h-3" /></a>
                            <a href="#" className="hover:text-primary flex items-center gap-1">GATE Prep <ArrowUpRight className="w-3 h-3" /></a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] -z-10 rounded-full" />
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="p-4 glass-card rounded-full hover:bg-white/10 transition-all hover:scale-110 flex items-center justify-center"
        >
            {icon}
        </a>
    );
}
