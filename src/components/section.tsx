import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
  tone = "accent",
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "accent" | "research";
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <BlurFade inView>
          <p
            className={cn(
              "font-mono text-xs uppercase tracking-[0.2em]",
              tone === "research" ? "text-research" : "text-accent",
            )}
          >
            {index} / {title}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {description ?? title}
          </h2>
        </BlurFade>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Tag({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "research";
}) {
  return (
    <span
      className={cn(
        "rounded-md border px-2 py-0.5 font-mono text-[11px] leading-5",
        tone === "research"
          ? "border-research/20 bg-research/5 text-research/90"
          : "border-white/10 bg-white/[0.03] text-zinc-300",
      )}
    >
      {children}
    </span>
  );
}
