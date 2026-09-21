import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Research />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
