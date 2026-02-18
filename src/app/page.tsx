import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { WhyHireMe } from "@/components/why-hire";
import { CurrentlyBuilding } from "@/components/now-building";
import { TechArchitecture } from "@/components/architecture";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <WhyHireMe />
      <TechArchitecture />
      <Experience />
      <Projects />
      <CurrentlyBuilding />
      <Contact />
    </main>
  );
}
