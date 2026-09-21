import { Mail } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

const item =
  "group flex items-center gap-3 rounded-xl border border-border bg-zinc-900/40 px-5 py-4 text-sm transition-colors hover:border-accent/40 hover:bg-zinc-900/80 focus-visible:outline-2 focus-visible:outline-accent";

export function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      description="Let's build something reliable."
      className="pb-24"
    >
      <BlurFade inView>
        <p className="max-w-lg text-muted">
          I&apos;m always open to talking about software engineering, distributed
          systems, and research. The best way to reach me is by email.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className={item}>
            <Mail className="size-5 shrink-0 text-accent" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={item}
          >
            <GitHubIcon className="size-5 shrink-0 text-accent" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={item}
          >
            <LinkedInIcon className="size-5 shrink-0 text-accent" />
            LinkedIn
          </a>
        </div>
      </BlurFade>
    </Section>
  );
}
