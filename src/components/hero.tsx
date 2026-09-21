import { ArrowDown, Mail } from "lucide-react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WordRotate } from "@/components/magicui/word-rotate";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const primaryBtn =
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
      <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        <BlurFade delay={0.05}>
          <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
        </BlurFade>
        <BlurFade delay={0.12}>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-7xl">
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
            <span className="text-muted">{"> "}</span>
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
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryBtn} bg-foreground text-background hover:bg-zinc-200`}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryBtn} border border-white/15 bg-white/[0.04] hover:bg-white/10`}
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`${primaryBtn} text-muted hover:text-foreground`}
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
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
