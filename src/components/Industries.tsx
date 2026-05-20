"use client";
import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Truck,
  Factory,
  ShoppingCart,
  Globe,
  Cpu,
  Rocket,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Banking & Finance",
    desc: "Core banking systems, transaction databases, compliance reporting, real-time analytics.",
    color: "#3b82f6",
    stats: "Zero-downtime guarantee",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "HIPAA-compliant databases, patient records management, medical data security.",
    color: "#ec4899",
    stats: "HIPAA compliant",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Real-time tracking databases, supply chain optimization, route analytics.",
    color: "#f59e0b",
    stats: "Real-time tracking",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Production databases, IoT data management, quality control systems.",
    color: "#8b5cf6",
    stats: "IoT data ready",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    desc: "High-volume transaction databases, inventory systems, customer analytics.",
    color: "#20a84b",
    stats: "High-volume capable",
  },
  {
    icon: Globe,
    name: "Telecommunications",
    desc: "Subscriber databases, billing systems, network analytics, CDR management.",
    color: "#06b6d4",
    stats: "Carrier-grade",
  },
  {
    icon: Cpu,
    name: "SaaS Platforms",
    desc: "Multi-tenant databases, scalable architectures, automated operations.",
    color: "#ed7b2f",
    stats: "Multi-tenant",
  },
  {
    icon: Rocket,
    name: "Startups & Scale-ups",
    desc: "Rapid growth database strategies, cloud-first architectures, cost optimization.",
    color: "#a855f7",
    stats: "Growth-ready",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Trusted Across{" "}
            <span className="gradient-text-blue">Every Industry</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From fintech to healthcare, retail to manufacturing — Ponder Solutions
            delivers database excellence across all sectors and verticals.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass border border-white/8 hover:border-white/25 rounded-2xl p-6 transition-all duration-400 cursor-default relative overflow-hidden"
            >
              {/* Hover background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${industry.color}12, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${industry.color}15`,
                    border: `1px solid ${industry.color}30`,
                  }}
                >
                  <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{industry.desc}</p>

                {/* Stat badge */}
                <span
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    color: industry.color,
                    background: `${industry.color}15`,
                  }}
                >
                  {industry.stats}
                </span>
              </div>

              {/* Bottom border accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${industry.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Don't see your industry?{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary-400 hover:text-primary-300 font-semibold transition-colors cursor-pointer"
          >
            Contact us — we work with businesses of all types and sizes.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
