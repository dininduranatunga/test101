"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "99.99%",
    label: "Uptime SLA",
    desc: "Mission-critical reliability",
    color: "#20a84b",
  },
  {
    icon: Users,
    value: "200+",
    label: "Enterprise Clients",
    desc: "Across 12+ industries",
    color: "#3b82f6",
  },
  {
    icon: TrendingUp,
    value: "10x",
    label: "Query Performance",
    desc: "Average improvement",
    color: "#ed7b2f",
  },
  {
    icon: Award,
    value: "500+",
    label: "Projects Delivered",
    desc: "On time and on budget",
    color: "#8b5cf6",
  },
];

const techLogos = [
  { name: "Oracle", abbr: "ORA", bg: "#C74634" },
  { name: "Microsoft SQL", abbr: "SQL", bg: "#CC2927" },
  { name: "Oracle APEX", abbr: "APX", bg: "#F80000" },
  { name: "PostgreSQL", abbr: "PG", bg: "#336791" },
  { name: "MySQL", abbr: "MY", bg: "#4479A1" },
  { name: "MongoDB", abbr: "MDB", bg: "#47A248" },
  { name: "Azure SQL", abbr: "AZ", bg: "#0078D4" },
  { name: "AWS RDS", abbr: "AWS", bg: "#FF9900" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 bg-navy-900/80 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 glass p-5 rounded-2xl border border-white/5 hover:border-white/15 transition-all group"
            >
              <div
                className="p-3 rounded-xl flex-shrink-0"
                style={{ background: `${m.color}20` }}
              >
                <m.icon className="w-6 h-6" style={{ color: m.color }} />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{m.value}</div>
                <div className="text-sm font-semibold text-slate-200">{m.label}</div>
                <div className="text-xs text-slate-400">{m.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech platforms strip */}
        <div className="text-center mb-8">
          <p className="text-sm text-slate-400 font-medium tracking-wider uppercase">
            Certified expertise across leading database platforms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {techLogos.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/25 transition-all cursor-default"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-black flex-shrink-0"
                style={{ background: tech.bg }}
              >
                {tech.abbr}
              </div>
              <span className="text-sm font-semibold text-slate-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
