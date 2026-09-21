"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(`#${visible[0].target.id}`);
        else if (window.scrollY < 200) setActive("");
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="hidden font-mono text-sm font-medium tracking-tight sm:block"
        >
          shrey<span className="text-accent">.</span>dev
        </a>
        <ul className="flex w-full items-center justify-between text-sm text-muted sm:w-auto sm:justify-start sm:gap-6">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.href === "#about" ? "hidden sm:block" : ""}
            >
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={cn(
                  "relative py-1 transition-colors hover:text-foreground",
                  active === l.href && "text-foreground",
                )}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-[15px] h-px bg-accent transition-opacity",
                    active === l.href ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
