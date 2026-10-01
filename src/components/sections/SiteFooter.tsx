import { profile } from "@/content/resume";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tightest">
            {profile.name.toUpperCase()}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            Software Engineer · Backend · Full-Stack · Systems
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted link-underline hover:text-fg"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted link-underline hover:text-fg"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="SEND"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted link-underline hover:text-fg"
            >
              Email
            </a>
          </div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
            © {year} {profile.name} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
