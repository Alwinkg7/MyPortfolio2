/**
 * SINGLE SOURCE OF TRUTH
 * Every string below is taken from alwinkg_resume.pdf.
 * Nothing here is invented. If you change your resume, change this file.
 */

export const profile = {
  name: "Alwin K G",
  role: "Software Engineer",
  tagline: "Backend & Full-Stack Developer",
  location: "Thrissur, Kerala, India",
  phone: "+91 9633529303",
  email: "alwinkgofficial@gmail.com",
  github: "https://github.com/Alwinkg7",
  githubHandle: "github.com/Alwinkg7",
  linkedin: "https://linkedin.com/in/alwin-k-g",
  linkedinHandle: "linkedin.com/in/alwin-k-g",
  resumeUrl: "/alwinkg_resume.pdf",
  summary:
    "Software Engineer with 1+ year of professional experience developing and supporting production web applications using C#, ASP.NET Core, SQL Server, Next.js, and React. Hands-on experience in REST API development, business logic, database programming, authentication and authorization, frontend integration, third-party APIs, logging, and production troubleshooting.",
} as const;

/** Scroll-morphing role sequence for the opening section. */
export const roleMorph = [
  "Software Engineer",
  "Backend Engineer",
  "Full-Stack Engineer",
  "Production Systems",
  "Technical Lead",
] as const;

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "Entity Framework Core",
      "ADO.NET",
      "REST APIs",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Database",
    items: [
      "Microsoft SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Transactions",
    ],
  },
  {
    label: "Security & APIs",
    items: [
      "JWT Authentication",
      "Role-Based Access Control",
      "Refresh Tokens",
      "API Validation",
      "Rate Limiting",
      "Payment Gateway Integration",
    ],
  },
  {
    label: "Deployment",
    items: [
      "IIS",
      "NSSM",
      "Nginx",
      "PM2",
      "Windows Server",
      "Ubuntu/Linux",
      "Application Logs",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio",
      "VS Code",
      "Serilog",
      "Swagger",
    ],
  },
];

/** Technology graph: nodes + the paths they illuminate on focus/hover. */
export type TechNode = {
  id: string;
  label: string;
  group: "frontend" | "api" | "logic" | "data" | "external";
  /** node ids this one connects to when activated */
  connects: string[];
};

export const techGraph: TechNode[] = [
  { id: "nextjs", label: "Next.js", group: "frontend", connects: ["react", "rest"] },
  { id: "react", label: "React", group: "frontend", connects: ["nextjs", "rest"] },
  { id: "ts", label: "TypeScript", group: "frontend", connects: ["nextjs", "react"] },
  { id: "rest", label: "REST API", group: "api", connects: ["aspnet", "nextjs", "react"] },
  { id: "aspnet", label: "ASP.NET Core", group: "api", connects: ["rest", "csharp", "auth", "ef", "sql"] },
  { id: "csharp", label: "C#", group: "logic", connects: ["aspnet", "ef"] },
  { id: "auth", label: "JWT / RBAC", group: "logic", connects: ["aspnet", "sql"] },
  { id: "ef", label: "EF Core / ADO.NET", group: "logic", connects: ["aspnet", "sql", "csharp"] },
  { id: "sql", label: "SQL Server", group: "data", connects: ["aspnet", "ef", "tsql"] },
  { id: "tsql", label: "T-SQL / Procs", group: "data", connects: ["sql"] },
  { id: "whatsapp", label: "Meta WhatsApp API", group: "external", connects: ["aspnet"] },
  { id: "payments", label: "Payment Gateway", group: "external", connects: ["aspnet"] },
];

/** "Systems I build" — each rebuilds a small architecture when selected. */
export type SystemDef = {
  id: string;
  label: string;
  blurb: string;
  stack: string[]; // top -> bottom architecture column
  project: string;
};

export const systems: SystemDef[] = [
  {
    id: "crm",
    label: "CRM",
    blurb:
      "Lead management, follow-ups, conversions, task assignment, role-based access and project workflows.",
    stack: ["Next.js / React", "ASP.NET Core API", "Business Logic (C#)", "SQL Server / T-SQL", "Meta WhatsApp API"],
    project: "VoleergoCRM",
  },
  {
    id: "automation",
    label: "WhatsApp Automation",
    blurb:
      "Template management, audience creation and broadcast messaging via Meta WhatsApp API integration.",
    stack: ["Admin UI (Next.js)", "ASP.NET Core API", "Automation Logic", "SQL Server", "Meta WhatsApp API"],
    project: "VoleergoCRM",
  },
  {
    id: "enterprise",
    label: "Enterprise Systems",
    blurb:
      "Asset custody, transfers, write-offs, stock, users, permissions and audit trails across operational workflows.",
    stack: ["Next.js Frontend", "ASP.NET Core API", "Auth + Audit Trails", "SQL Server Stored Procedures", "Reporting"],
    project: "Enterprise Asset Management System",
  },
  {
    id: "booking",
    label: "Booking",
    blurb:
      "Packages, time slots, customer bookings, administrative management and payment processing.",
    stack: ["Next.js Frontend", "ASP.NET Core API", "Booking Logic + Validation", "SQL Server", "Payment Gateway"],
    project: "Booking & Payment Platform",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    blurb:
      "Product, inventory, user, order and payment workflows with authentication and authorization.",
    stack: ["Next.js Storefront", "ASP.NET Core API", "Order / Inventory Logic", "SQL Server", "Payment Gateway"],
    project: "E-Commerce Platform",
  },
  {
    id: "apis",
    label: "APIs",
    blurb:
      "Production REST APIs with validation, rate limiting, logging and refresh-token auth workflows.",
    stack: ["Client / Frontend", "ASP.NET Core REST API", "Validation + Rate Limiting", "EF Core / ADO.NET", "SQL Server"],
    project: "Across all platforms",
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  year: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Technical Lead",
    org: "Voleergo Solutions LLP",
    period: "Jul 2026 — Present",
    year: "2026",
    points: [
      "Continue hands-on software development while taking on additional technical responsibilities across production applications.",
      "Contribute to backend and full-stack development using ASP.NET Core, C#, SQL Server, Next.js, React, and REST APIs.",
      "Review implementation and code quality, assist with technical problem solving, and guide developers on backend, frontend, API, and database development practices.",
      "Participate in application security and production-readiness checks covering authentication, authorization, API validation, dependencies, logging, and configuration.",
      "Support production deployment and troubleshooting across Windows/IIS and Linux/Nginx environments.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Voleergo Solutions LLP",
    period: "Sep 2025 — Jul 2026",
    year: "2025",
    points: [
      "Developed and maintained production REST APIs using ASP.NET Core and C# for CRM, booking, e-commerce, payment, and business management workflows.",
      "Developed SQL Server functionality using T-SQL stored procedures, queries, transactions, validation logic, and data access patterns.",
      "Implemented JWT authentication, role-based authorization, refresh-token workflows, API validation, rate limiting, audit trails, and application logging.",
      "Developed Next.js and React frontend features and integrated them with backend APIs.",
      "Worked on CRM and lead management, WhatsApp automation, finance workflows, role and permission management, project management, booking, and e-commerce features.",
      "Supported production deployment and troubleshooting using IIS/NSSM on Windows and Nginx/PM2 on Linux.",
    ],
  },
  {
    title: "Software Trainee",
    org: "Voleergo Solutions LLP",
    period: "Jun 2025 — Sep 2025",
    year: "2025",
    points: [
      "Contributed to application development using ASP.NET, SQL/Stored Procedures, APIs, and frontend technologies.",
      "Worked on application features, database operations, debugging, and API integration while learning production development practices.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  kind: string;
  domain: string;
  stack: string[];
  /** architecture / capability breakdown shown in the case study */
  layers: { label: string; detail: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "VoleergoCRM",
    kind: "Production Project",
    domain: "Business Management Platform",
    stack: ["ASP.NET Core", "C#", "SQL Server", "T-SQL", "Meta WhatsApp API"],
    layers: [
      { label: "Scope", detail: "CRM, WhatsApp configuration & automation, finance, role & permission management, and project management." },
      { label: "Backend", detail: "APIs and business logic in ASP.NET Core and C#, with SQL Server and T-SQL stored procedures for database operations." },
      { label: "Workflows", detail: "Lead management, follow-ups, lead conversion, task assignment, WhatsApp workflows, financial transactions, role-based access and project workflows." },
      { label: "Integrations", detail: "Meta WhatsApp API integration, template management, audience creation and broadcast messaging." },
    ],
  },
  {
    index: "02",
    title: "Enterprise Asset Management System",
    kind: "Production Project",
    domain: "Enterprise Operations",
    stack: ["ASP.NET Core", "SQL Server", "Stored Procedures", "RBAC", "Audit Trails"],
    layers: [
      { label: "Scope", detail: "Managing organizational assets and operational workflows across the enterprise." },
      { label: "Backend", detail: "Backend APIs, SQL Server stored procedures, business logic, authentication, authorization and audit trails with frontend integration." },
      { label: "Workflows", detail: "Asset custody, transfers, write-offs, configuration, users, permissions, stock and asset-related workflows." },
    ],
  },
  {
    index: "03",
    title: "Booking & Payment Platform",
    kind: "Production Project",
    domain: "Booking & Payments",
    stack: ["ASP.NET Core", "Next.js", "SQL Server", "Payment Gateway"],
    layers: [
      { label: "Scope", detail: "Booking workflows for packages, time slots, customer bookings, administrative management and payment processing." },
      { label: "Backend", detail: "ASP.NET Core APIs and SQL Server database workflows, integrated with a Next.js frontend." },
      { label: "Security", detail: "Authentication, authorization, validation, booking workflows and payment gateway integration." },
    ],
  },
  {
    index: "04",
    title: "E-Commerce Platform",
    kind: "Production Project",
    domain: "Commerce",
    stack: ["ASP.NET Core", "Next.js", "SQL Server"],
    layers: [
      { label: "Scope", detail: "Product, inventory, user, order and payment workflows." },
      { label: "Backend", detail: "ASP.NET Core APIs, SQL Server database operations, authentication and authorization." },
      { label: "Frontend", detail: "Next.js frontend functionality for storefront and administrative flows." },
    ],
  },
  {
    index: "05",
    title: "ApplyEngine",
    kind: "Personal Project",
    domain: "AI-Assisted Job Application Platform",
    stack: ["ASP.NET Core", "SQL Server", "Next.js", "LLM Integration"],
    layers: [
      { label: "Scope", detail: "AI-assisted job application platform built with ASP.NET Core, SQL Server, Next.js and LLM integration." },
      { label: "Workflows", detail: "Processing job information, evaluating opportunities, generating application-related content and tracking applications." },
      { label: "Frontend", detail: "Next.js / React dashboard for reviewing opportunities and application history." },
    ],
  },
];

/** Production pipeline sequence. */
export const productionPipeline = [
  { step: "CODE", tools: ["C#", "TypeScript"] },
  { step: "BUILD", tools: [".NET", "Next.js"] },
  { step: "API", tools: ["ASP.NET Core", "REST"] },
  { step: "DATABASE", tools: ["SQL Server", "T-SQL"] },
  { step: "DEPLOY", tools: ["IIS / NSSM", "Nginx / PM2"] },
  { step: "MONITOR", tools: ["Serilog", "Application Logs"] },
  { step: "TROUBLESHOOT", tools: ["Windows Server", "Ubuntu/Linux"] },
] as const;

/** Production-readiness / security chain. */
export const securityChain = [
  { label: "AUTH", detail: "JWT authentication" },
  { label: "AUTHORIZATION", detail: "Role-based access control" },
  { label: "TOKENS", detail: "Refresh-token workflows" },
  { label: "VALIDATION", detail: "API validation" },
  { label: "RATE LIMITING", detail: "Request rate limiting" },
  { label: "LOGGING", detail: "Application logging (Serilog)" },
  { label: "AUDIT TRAILS", detail: "Audit trails across workflows" },
] as const;

/** Technical Lead responsibilities, mapped to action verbs. */
export const leadership = [
  { verb: "BUILD", detail: "Production software, hands-on across backend and full-stack." },
  { verb: "REVIEW", detail: "Implementation and code quality across production applications." },
  { verb: "SOLVE", detail: "Technical problems and production incidents." },
  { verb: "LEAD", detail: "Guide developers on backend, frontend, API and database practices." },
  { verb: "DEPLOY", detail: "Production deployment and troubleshooting on Windows/IIS and Linux/Nginx." },
] as const;

export const education = [
  {
    school: "Ilahia College of Engineering & Technology",
    degree: "Master of Computer Applications (MCA)",
    period: "2023 — 2025",
    detail: "CGPA: 8.67 / 10",
  },
  {
    school: "Prajyoti Niketan College",
    degree: "BSc Electronics",
    period: "2020 — 2023",
    detail: "CGPA: 6.65 / 10",
  },
] as const;

export const certifications = ["Cloud Computing — NPTEL Swayam"] as const;

export const mentorship =
  "Technical Mentor — mentored interns on backend and frontend development, including ASP.NET Core, SQL Server, REST APIs, Next.js, React, and clean coding practices.";

export const navSections = [
  { id: "identity", label: "Identity" },
  { id: "systems", label: "Systems" },
  { id: "stack", label: "Stack" },
  { id: "architecture", label: "Architecture" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;
