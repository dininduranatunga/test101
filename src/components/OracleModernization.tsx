"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  Smartphone,
  TrendingUp,
  Cpu,
  RefreshCw,
  Cloud,
  Gauge,
} from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Modern Web Interface",
    desc: "Responsive, mobile-friendly applications with professional UI/UX — a complete upgrade from legacy Forms interfaces.",
    color: "#3b82f6",
  },
  {
    icon: Gauge,
    title: "Faster Deployment",
    desc: "Oracle APEX enables rapid development cycles — dramatically reducing time-to-delivery compared to legacy systems.",
    color: "#20a84b",
  },
  {
    icon: TrendingUp,
    title: "Lower Maintenance Cost",
    desc: "Eliminate expensive legacy infrastructure. Modern APEX applications are easier, cheaper, and faster to maintain.",
    color: "#ed7b2f",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready Architecture",
    desc: "Applications designed for cloud deployment on Oracle Cloud, Azure, or AWS — scalable and future-proof.",
    color: "#8b5cf6",
  },
  {
    icon: Cpu,
    title: "Preserved Business Logic",
    desc: "We carefully migrate all existing business rules, validations, and workflows — zero loss of critical functionality.",
    color: "#06b6d4",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Built on Oracle's proven platform with modern architectural patterns for enterprise-grade scalability.",
    color: "#f59e0b",
  },
];

const migrationSteps = [
  { step: "01", label: "Audit Legacy Forms", icon: "🔍" },
  { step: "02", label: "Map Business Logic", icon: "📋" },
  { step: "03", label: "APEX Design Sprint", icon: "⚡" },
  { step: "04", label: "Migrate & Modernize", icon: "🔄" },
  { step: "05", label: "Test & Deploy", icon: "🚀" },
  { step: "06", label: "Training & Support", icon: "🎯" },
];

export default function OracleModernization() {
  return (
    <section id="oracle" className="relative py-24 lg:py-32 overflow-hidden bg-navy-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10" />
      </div>

      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
              <RefreshCw className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300 tracking-wide">
                Oracle Modernization
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Transform Legacy Oracle Systems Into{" "}
              <span className="gradient-text-primary">Modern Web Applications</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Don't let aging Oracle Forms hold your business back. We specialize in
              Oracle Forms-to-APEX migration, delivering enterprise workflow automation,
              improved UX, and cloud-ready scalability — preserving every line of
              critical business logic.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Oracle Forms to APEX migration specialists",
                "100% business logic preservation",
                "Mobile-first, responsive UI/UX",
                "Cloud-ready deployment",
                "Reduced total cost of ownership",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-white bg-gradient-to-r from-primary-500 to-orange-600 rounded-xl hover:shadow-glow-primary transition-all"
            >
              Start Your Modernization Journey
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Before/After visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Legacy system */}
            <div className="glass border border-red-500/20 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-red-500/10 border-b border-red-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-red-400 font-mono font-semibold">
                  LEGACY: Oracle Forms 6i
                </span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2">
                <div className="flex gap-4 text-slate-500">
                  <span className="text-red-400">File</span>
                  <span className="text-red-400">Edit</span>
                  <span className="text-red-400">View</span>
                  <span className="text-red-400">Help</span>
                </div>
                <div className="border border-slate-700 p-3 rounded space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-slate-500 w-20">Cust ID:</span>
                    <div className="flex-1 bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-slate-400">|</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-slate-500 w-20">Name:</span>
                    <div className="flex-1 bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-slate-400">|</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-slate-500 w-20">Status:</span>
                    <div className="flex-1 bg-slate-800 border border-slate-600 px-2 py-0.5 rounded text-slate-400">|</div>
                  </div>
                </div>
                <div className="text-center text-slate-500 text-[10px] mt-2">
                  Not mobile-friendly • Requires thick client • High maintenance
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/50" />
              <div className="flex items-center gap-2 glass border border-primary-500/30 px-4 py-2 rounded-full">
                <RefreshCw className="w-4 h-4 text-primary-400 animate-spin" style={{ animationDuration: "3s" }} />
                <span className="text-xs font-bold text-primary-400">PONDER MODERNIZATION</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-500/50" />
            </div>

            {/* Modern APEX app */}
            <div className="glass border border-secondary-500/25 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-secondary-500/10 border-b border-secondary-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary-500/80" />
                  <div className="w-3 h-3 rounded-full bg-secondary-500/60" />
                  <div className="w-3 h-3 rounded-full bg-secondary-500/40" />
                </div>
                <span className="text-xs text-secondary-400 font-semibold">
                  MODERN: Oracle APEX 23.2
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-lg font-semibold">Dashboard</div>
                    <div className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-lg">Customers</div>
                    <div className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-lg">Reports</div>
                  </div>
                  <div className="w-20 h-6 bg-white/5 rounded-lg" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["12.4K", "98.2%", "4.8s"].map((v, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/8">
                      <div className="text-sm font-black text-white">{v}</div>
                      <div className="text-[10px] text-slate-500">Metric {i + 1}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-secondary-400 text-[10px] font-semibold">
                  Mobile-ready • Cloud-native • Low maintenance
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Migration steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center text-2xl font-black text-white mb-10">
            Our Proven Migration Process
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {migrationSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 glass border border-white/10 hover:border-primary-500/30 rounded-xl px-5 py-3.5 transition-all"
              >
                <span className="text-xl">{step.icon}</span>
                <div>
                  <div className="text-[10px] font-bold text-primary-400 tracking-widest">STEP {step.step}</div>
                  <div className="text-sm font-semibold text-white">{step.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass border border-white/8 hover:border-white/20 rounded-2xl p-6 transition-all group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${benefit.color}20`, border: `1px solid ${benefit.color}30` }}
              >
                <benefit.icon className="w-5 h-5" style={{ color: benefit.color }} />
              </div>
              <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
