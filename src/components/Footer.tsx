"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  services: [
    { label: "SQL DBA Services", href: "#services" },
    { label: "Oracle APEX Development", href: "#services" },
    { label: "Oracle Forms Migration", href: "#oracle" },
    { label: "Performance Optimization", href: "#services" },
    { label: "24/7 Remote DBA Support", href: "#services" },
    { label: "Cloud Database Management", href: "#services" },
  ],
  technologies: [
    { label: "Oracle Database", href: "#technologies" },
    { label: "Microsoft SQL Server", href: "#technologies" },
    { label: "MySQL & PostgreSQL", href: "#technologies" },
    { label: "MongoDB", href: "#technologies" },
    { label: "Azure SQL & AWS RDS", href: "#technologies" },
    { label: "Oracle Cloud", href: "#technologies" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "SLA Agreement", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077B5" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Github, href: "#", label: "GitHub", color: "#ffffff" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollTo = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-navy-900 border-t border-white/8 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-[2fr,1fr,1fr,1fr] gap-12 lg:gap-8">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600" />
                <Database className="absolute inset-0 m-auto w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-xl leading-none block">Ponder</span>
                <span className="text-primary-400 font-bold text-xs tracking-widest uppercase">
                  Solutions Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Enterprise database consulting specialists. SQL DBA services, Oracle APEX
              development, Forms modernization, performance optimization, and 24/7 remote
              DBA support for mission-critical systems.
            </p>

            {/* Contact quick info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: "105/14, Palagama, Polgasowita 10320", href: "#" },
                { icon: Mail, text: "Support@pondersl.com", href: "mailto:Support@pondersl.com" },
                { icon: Phone, text: "+94 77 345 7794", href: "tel:+94773457794" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-slate-200 transition-colors group text-sm"
                >
                  <item.icon className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 glass border border-white/10 hover:border-white/30 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all group"
                >
                  <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Technologies
            </h4>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Newsletter
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Database insights, performance tips, and industry updates — straight to your inbox.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-secondary-400 text-sm font-semibold p-3 glass border border-secondary-500/20 rounded-xl"
              >
                <CheckCircle className="w-4 h-4" />
                You're subscribed!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl text-sm focus:border-primary-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:shadow-glow-primary transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Company quick links */}
            <div className="mt-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Ponder Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
