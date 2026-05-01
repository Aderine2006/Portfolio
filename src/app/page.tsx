import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { WhyHireMe } from "@/components/why-hire";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <WhyHireMe />
      <Skills />
      <Achievements />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
