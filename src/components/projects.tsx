import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { Section, Tag } from "@/components/section";
import { GitHubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-zinc-900/40">
      <MagicCard
        className="h-full rounded-xl"
        gradientColor="#10b98120"
        gradientFrom="#34d399"
        gradientTo="#0ea5e9"
      >
        <article
          className={cn(
            "flex h-full flex-col p-6",
            featured ? "sm:p-8" : "sm:p-6",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-xs text-muted">{project.kicker}</p>
            {featured && (
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                Featured
              </span>
            )}
          </div>
          <h3
            className={cn(
              "mt-3 font-semibold tracking-tight",
              featured ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-1 flex-wrap content-end gap-1.5">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <GitHubIcon className="size-4" />
              {project.linkLabel ?? "View source"}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </article>
      </MagicCard>
      {featured && (
        <BorderBeam
          size={120}
          duration={10}
          colorFrom="#34d399"
          colorTo="#0ea5e9"
          borderWidth={1}
        />
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section
      id="projects"
      index="01"
      title="Projects"
      description="Systems, tools, and applications I've built."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <BlurFade key={p.title} inView delay={0.05 * i}>
            <ProjectCard project={p} />
          </BlurFade>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <BlurFade key={p.title} inView delay={0.05 * i}>
            <ProjectCard project={p} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
