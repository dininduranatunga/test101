"use client";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Map,
  Settings2,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    subtitle: "Free Discovery Call",
    description:
      "We start with a no-obligation consultation to understand your database environment, challenges, and business goals. No sales pitch — just a genuine technical conversation.",
    color: "#ed7b2f",
    details: [
      "Business goals alignment",
      "Current environment review",
      "Pain points identification",
      "Opportunity mapping",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Assessment",
    subtitle: "Deep Technical Audit",
    description:
      "A thorough assessment of your database infrastructure — performance, security, architecture, and code quality. We identify issues before they become crises.",
    color: "#3b82f6",
    details: [
      "Performance baseline analysis",
      "Security vulnerability audit",
      "Architecture review",
      "Risk identification",
    ],
  },
  {
    number: "03",
    icon: Map,
    title: "Strategy",
    subtitle: "Tailored Roadmap",
    description:
      "Based on assessment findings, we design a customized strategy with clear milestones, timelines, and ROI projections specific to your business.",
    color: "#8b5cf6",
    details: [
      "Prioritized action plan",
      "Resource estimation",
      "Risk mitigation roadmap",
      "ROI projections",
    ],
  },
  {
    number: "04",
    icon: Settings2,
    title: "Optimization",
    subtitle: "Implementation & Delivery",
    description:
      "Our certified experts execute the strategy with precision — whether it's query optimization, APEX development, Forms migration, or cloud deployment.",
    color: "#20a84b",
    details: [
      "Iterative implementation",
      "Performance benchmarking",
      "Quality assurance testing",
      "Zero-downtime deployments",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monitoring",
    subtitle: "Ongoing Excellence",
    description:
      "Post-delivery, we provide continuous monitoring, proactive maintenance, and on-call DBA support to ensure sustained performance and reliability.",
    color: "#06b6d4",
    details: [
      "24/7 real-time monitoring",
      "Monthly performance reports",
      "Proactive tuning",
      "Priority incident response",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-6">
            <Settings2 className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 tracking-wide">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            A Proven Process for{" "}
            <span className="gradient-text-primary">Database Excellence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Five structured phases that take you from discovery to sustained performance,
            with clear deliverables at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Step connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-12 -right-2 z-10 text-slate-600"
                    style={{ color: step.color + "60" }}
                  >
                    →
                  </div>
                )}

                {/* Card */}
                <div className="glass border border-white/8 group-hover:border-white/20 rounded-2xl p-5 transition-all duration-300 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <div
                      className="text-3xl font-black"
                      style={{ color: step.color + "40" }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-black text-base mb-1">{step.title}</h3>
                  <p
                    className="text-xs font-bold mb-3 uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-slate-400">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: step.color }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-4 glass border border-white/10 rounded-2xl px-8 py-5">
            <div className="text-left">
              <div className="text-white font-bold text-lg">Ready to get started?</div>
              <div className="text-slate-400 text-sm">
                Start with a free, no-obligation consultation today.
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 px-6 py-3 font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:shadow-glow-primary transition-all text-sm"
            >
              Begin Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
