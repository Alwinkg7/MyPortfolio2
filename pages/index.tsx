import Head from "next/head";
import dynamic from "next/dynamic";
import { profile } from "@/content/resume";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Grain from "@/components/layout/Grain";
import Nav from "@/components/layout/Nav";
import Identity from "@/components/sections/Identity";
import HowIThink from "@/components/sections/HowIThink";
import SystemsIBuild from "@/components/sections/SystemsIBuild";
import TechGraph from "@/components/sections/TechGraph";
import Architecture from "@/components/sections/Architecture";
import Production from "@/components/sections/Production";
import Security from "@/components/sections/Security";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

// Custom cursor is desktop-only and purely decorative — load client-side only.
const Cursor = dynamic(() => import("@/components/layout/Cursor"), { ssr: false });

const SITE_URL = "https://alwinkg.vercel.app";

export default function Home() {
  const title = `${profile.name} — Software Engineer · Backend & Full-Stack Developer`;
  const description = profile.summary;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Technical Lead",
    description,
    url: SITE_URL,
    email: profile.email,
    worksFor: { "@type": "Organization", name: "Voleergo Solutions LLP" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "Entity Framework Core",
      "REST APIs",
      "SQL Server",
      "T-SQL",
      "Next.js",
      "React",
      "TypeScript",
      "JWT Authentication",
      "Role-Based Access Control",
      "Production Deployment",
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Alwin K G, Software Engineer, Backend Developer, Full Stack Developer, ASP.NET Core Developer, .NET Developer, Next.js Developer, React Developer, SQL Server, Technical Lead, Kerala"
        />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}/portfolio1.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/portfolio1.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <a
        href="#systems"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-accent-ink"
      >
        Skip to content
      </a>

      <SmoothScroll>
        <Grain />
        <Cursor />
        <Nav />

        <main>
          <Identity />
          <HowIThink />
          <SystemsIBuild />
          <TechGraph />
          <Architecture />
          <Production />
          <Security />
          <ExperienceTimeline />
          <ProjectsShowcase />
          <Leadership />
          <Contact />
        </main>

        <SiteFooter />
      </SmoothScroll>
    </>
  );
}
