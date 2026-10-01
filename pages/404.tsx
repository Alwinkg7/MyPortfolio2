import Head from "next/head";
import Link from "next/link";
import { profile } from "@/content/resume";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page not found · {profile.name}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-accent">{"// error 404"}</p>
        <h1 className="fluid-display mt-6 font-display font-medium tracking-tightest">
          NOT FOUND
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          That page doesn&apos;t exist. The route may have moved, or the link was
          mistyped.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors hover:border-accent hover:text-accent"
          data-cursor=""
        >
          ← Back to home
        </Link>
      </main>
    </>
  );
}
