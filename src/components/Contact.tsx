import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "alwinkgofficial@gmail.com",
      link: "mailto:alwinkgofficial@gmail.com",
      color: "brand-cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alwin-k-g",
      link: "https://linkedin.com/in/alwin-k-g",
      color: "brand-cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Alwinkg7",
      link: "https://github.com/Alwinkg7",
      color: "brand-cyan",
    },
  ];

  return (
    <section id="contact" className="slide-section bg-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center min-h-screen py-20">
        
        <div className="space-y-4 mb-12 text-center md:text-left">
          <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">07. Contact</span>
          <h2 className="text-4xl md:text-6xl font-grotesk font-bold text-brand-offwhite leading-tight">
            {"Let's Build Something"} <br /> <span className="text-brand-cyan">Together</span>
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl">
            Open to full-time roles, freelance projects, and collaborations. 
            Based in Kerala — available worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate" size={18} />
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-brand-navy border border-brand-border/50 rounded-lg py-4 pl-12 pr-4 text-brand-offwhite focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate" size={18} />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-brand-navy border border-brand-border/50 rounded-lg py-4 pl-12 pr-4 text-brand-offwhite focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-brand-slate" size={18} />
                <textarea 
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-brand-navy border border-brand-border/50 rounded-lg py-4 pl-12 pr-4 text-brand-offwhite focus:border-brand-cyan focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
            
            <button className="btn-primary w-full flex items-center justify-center space-x-2 py-4">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </motion.div>

          {/* Right: Contact Cards */}
          <div className="space-y-6">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-card p-6 flex items-center space-x-6 group hover:border-brand-cyan/50"
              >
                <div className="p-4 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors">
                  <card.icon size={28} />
                </div>
                <div>
                  <h4 className="text-brand-slate text-xs font-mono uppercase tracking-widest">{card.label}</h4>
                  <p className="text-brand-offwhite font-bold text-lg group-hover:text-brand-cyan transition-colors">{card.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability Note */}
            <div className="p-6 rounded-2xl border border-brand-border/20 bg-brand-surface/20">
              <p className="text-brand-slate text-sm italic">
                {"I typically respond within 24 hours. Based in Thrissur, Kerala (GMT+5:30). Let's chat about how I can contribute to your team!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
