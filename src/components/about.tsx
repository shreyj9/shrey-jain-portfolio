import { BlurFade } from "@/components/magicui/blur-fade";
import { Section, Tag } from "@/components/section";
import { about } from "@/lib/data";

export function About() {
  const { education } = about;
  return (
    <Section id="about" index="04" title="About" description="A bit about me.">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <BlurFade inView>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-zinc-900/40 p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Education
              </p>
              <p className="mt-3 font-medium">{education.school}</p>
              <p className="mt-1 text-sm text-muted">{education.degree}</p>
              <p className="text-sm text-muted">{education.graduation}</p>
              <p className="mt-3 text-sm text-zinc-300">
                Focus: {education.focus}
              </p>
            </div>
            <dl className="space-y-4">
              {about.skills.map((group) => (
                <div key={group.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                    {group.label}
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
