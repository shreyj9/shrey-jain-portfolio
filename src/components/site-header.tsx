const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
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
            <li key={l.href} className={l.href === "#about" ? "hidden sm:block" : ""}>
              <a
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
