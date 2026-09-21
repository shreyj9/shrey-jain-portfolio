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
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-5 font-mono text-xs text-muted sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Magic UI</p>
        </div>
      </footer>
    </>
  );
}
