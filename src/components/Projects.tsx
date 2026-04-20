import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Rocket, Globe, Smartphone, CreditCard, Bot } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Shopify WhatsApp Automation",
    description: "Event-driven system integrating Shopify webhooks with Meta WhatsApp API for real-time order processing and communication.",
    tech: [".NET", "Shopify API", "Meta API", "SQL Server", "Webhooks", "Idempotency", "API Design", "Table Design"],
    category: "Full Stack",
    icon: Bot,
    featured: true,
    link: "https://voleergo-store.myshopify.com/",
    github: "#",
  },
  {
    id: 2,
    title: "Smart Mess Management",
    description: "Full-stack system with QR attendance and automated billing, improving operational efficiency for canteen management.",
    tech: [".NET", "Next.js", "SQL Server", "QR API", "EF Core", "API Design", "Table Design", "JWT", "Role Based Access", "Clean Architecture"],
    category: "Full Stack",
    icon: CreditCard,
    link: "https://messwebapp-ten.vercel.app/home",
    github: "https://github.com/Alwinkg7/MessAppWEB",
  },
  {
    id: 3,
    title: "FinBridge AI",
    description: "AI-powered budgeting and financial analytics features using MERN stack. Recognized in EY GDS Top 40 projects.",
    tech: ["MongoDB", "Express", "React", "Node", "ML"],
    category: "AI/ML",
    icon: Globe,
    link: "https://finbridge-beta.vercel.app/",
    github: "https://github.com/Alwinkg7/Personal-Finance-Manager.git",
  },
  {
    id: 4,
    title: "Voleergo Academy",
    description: "Educational platform backend with file uploads and automated WhatsApp messaging workflows post-registration.",
    tech: [".NET Web API", "SQL Server", "Meta API", "Next.JS"],
    category: "Full Stack",
    icon: Code2,
    link: "https://voleergoacademy.com/",
    github: "#",
  },
  {
    id: 5,
    title: "Kayaking Booking Platform",
    description: "Backend APIs for booking, approvals, and admin workflows with concurrency handling and database validations.",
    tech: [".NET", "SQL Server", "Clean Architecture", "Next.JS", "JWT", "Role Based Access", "Concurrency Handling", "Idempotency", "API Design", "Table Design"],
    category: "Full Stack",
    icon: Rocket,
    link: "https://walkingtrees.in/",
    github: "#",
  },
  {
    id: 6,
    title: "E-commerce Web App",
    description: "Implemented JWT authentication, role-based access, and PhonePe payment gateway integration.",
    tech: [".NET", "Next.JS", "PhonePe API", "JWT","SQL Server", "Role Based Access"],
    category: "Full Stack",
    icon: CreditCard,
    link: "https://ecommerceqa.voleergo.com/website/home",
    github: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "AI/ML"];

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" className="slide-section bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center min-h-screen py-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">06. Projects</span>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-brand-offwhite">
              {"Things I've Built"}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-brand-cyan text-brand-navy" 
                    : "bg-brand-surface text-brand-slate hover:text-brand-offwhite border border-brand-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className={`glass-card p-6 flex flex-col h-full relative group hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <div className="absolute top-2 right-4 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 text-brand-cyan text-[10px] uppercase font-bold tracking-wider">
                    ✦ Featured
                  </div>
                )}
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                    {React.createElement(project.icon as any, { size: 24 })}
                  </div>
                  <div className="flex items-center space-x-3 text-brand-slate group-hover:text-brand-offwhite transition-colors">
                    <a href={project.github} className="hover:text-brand-cyan"><Github size={20} /></a>
                    <a href={project.link} className="hover:text-brand-cyan"><ExternalLink size={20} /></a>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-brand-offwhite font-grotesk group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-mono px-2 py-1 rounded bg-brand-navy border border-brand-border/30 text-brand-cyan/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;