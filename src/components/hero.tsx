import { ArrowDown, Mail } from "lucide-react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const btn =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-14"
    >
      <AnimatedGridPattern
        numSquares={24}
        maxOpacity={0.12}
        duration={4}
        className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] inset-0 h-full w-full fill-accent/40 stroke-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <BlurFade delay={0.05}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            Georgia Tech · Class of 2028
          </p>
        </BlurFade>
        <BlurFade delay={0.12}>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="mt-4 text-xl text-zinc-300 sm:text-2xl">
            {profile.role}
          </p>
        </BlurFade>
        <BlurFade delay={0.28}>
          <div
            aria-label={profile.rotating.join(", ")}
            className="mt-1 flex items-center gap-2 font-mono text-base text-accent sm:text-lg"
          >
            <span className="text-muted">{">"}</span>
            <span className="inline-block">
              <WordRotate words={profile.rotating} duration={2600} />
            </span>
          </div>
        </BlurFade>
        <BlurFade delay={0.36}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
        </BlurFade>
        <BlurFade delay={0.44}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-foreground text-background hover:bg-zinc-200`}
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`${btn} border border-white/15 bg-white/[0.04] hover:bg-white/10`}
            >
              <Mail className="size-4" />
              Email me
            </a>
          </div>
        </BlurFade>
        <BlurFade delay={0.52}>
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-8">
            {profile.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
                  {s.label}
                </dt>
                <dd className="font-mono text-xl font-medium text-foreground sm:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </BlurFade>
      </div>
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
