import { BlurFade } from "@/components/magicui/blur-fade";
import { Section } from "@/components/section";
import { research } from "@/lib/data";

export function Research() {
  return (
    <div className="border-y border-research/15 bg-research/[0.025]">
      <Section
        id="research"
        index="03"
        title="Research"
        description="Publications and presentations."
        tone="research"
      >
        <ol className="divide-y divide-research/10">
          {research.map((paper, i) => (
            <li key={paper.title} className="py-8 first:pt-0 last:pb-0">
              <BlurFade inView delay={0.05 * i}>
                <article className="grid gap-3 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                  <p className="font-mono text-sm text-research/70">
                    [{String(i + 1).padStart(2, "0")}]
                  </p>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                      <span className="rounded border border-research/30 bg-research/10 px-1.5 py-0.5 uppercase tracking-wider text-research">
                        {paper.status}
                      </span>
                      <span className="text-muted">{paper.venue}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl leading-snug tracking-tight text-zinc-100 sm:text-2xl">
                      {paper.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                      {paper.summary}
                    </p>
                    {paper.points.length > 0 && (
                      <ul className="mt-4 max-w-2xl space-y-2 text-sm text-zinc-300">
                        {paper.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-px w-3 shrink-0 bg-research"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </BlurFade>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
