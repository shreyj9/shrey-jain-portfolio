import { BlurFade } from "@/components/magicui/blur-fade";
import { Section, Tag } from "@/components/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      description="Where I've worked."
    >
      <BlurFade inView>
        <div className="relative border-l border-border pl-6 sm:pl-8">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-background"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {experience.role}
              <span className="text-muted"> · {experience.company}</span>
            </h3>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {experience.summary}
          </p>
          <ul className="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-zinc-300">
            {experience.points.map((p) => (
              <li key={p} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {experience.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </BlurFade>
    </Section>
  );
}
