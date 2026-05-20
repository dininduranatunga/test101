"use client";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  Zap,
  Activity,
  HeadphonesIcon,
  Code2,
  RefreshCw,
  Cloud,
  Shield,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Database Design & Architecture",
    color: "#ed7b2f",
    gradient: "from-orange-500/20 to-orange-600/5",
    border: "hover:border-orange-500/40",
    description:
      "Scalable, resilient database architectures built for enterprise workloads. We design for performance, availability, and growth.",
    features: [
      "Scalable database architecture",
      "Data modeling & schema design",
      "High Availability / Disaster Recovery",
      "Enterprise database blueprints",
    ],
  },
  {
    icon: Server,
    title: "SQL DBA Services",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
    description:
      "Full-spectrum SQL Server administration from routine maintenance to complex enterprise operations and migrations.",
    features: [
      "SQL Server administration",
      "Performance tuning & indexing",
      "Backup and recovery strategies",
      "Monitoring & maintenance",
    ],
  },
  {
    icon: Zap,
    title: "Query Optimization",
    color: "#f59e0b",
    gradient: "from-yellow-500/20 to-yellow-600/5",
    border: "hover:border-yellow-500/40",
    description:
      "Transform slow queries into lightning-fast operations. We analyze, optimize, and monitor your database performance at scale.",
    features: [
      "Slow query diagnosis & analysis",
      "Index strategy optimization",
      "Execution plan tuning",
      "Deadlock resolution",
    ],
  },
  {
    icon: Activity,
    title: "Database Health Checks",
    color: "#20a84b",
    gradient: "from-green-500/20 to-green-600/5",
    border: "hover:border-green-500/40",
    description:
      "Comprehensive database audits that identify risks before they become outages. Proactive health monitoring for peace of mind.",
    features: [
      "Security vulnerability audits",
      "Performance assessments",
      "Risk analysis & mitigation",
      "Capacity planning",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Remote DBA Support",
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "hover:border-purple-500/40",
    description:
      "Round-the-clock expert DBA support for mission-critical systems. We monitor, respond, and resolve — so your team can focus on business.",
    features: [
      "Real-time monitoring & alerts",
      "Instant incident response",
      "Proactive maintenance",
      "Emergency troubleshooting",
    ],
  },
  {
    icon: Code2,
    title: "Oracle APEX Development",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    border: "hover:border-cyan-500/40",
    description:
      "Rapid enterprise web application development using Oracle APEX. From dashboards to complex workflows — delivered fast.",
    features: [
      "Custom enterprise web apps",
      "Dashboard & reporting systems",
      "Workflow automation",
      "Mobile-friendly applications",
    ],
  },
  {
    icon: RefreshCw,
    title: "Oracle Forms Modernization",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-600/5",
    border: "hover:border-pink-500/40",
    description:
      "Transform legacy Oracle Forms into modern, cloud-ready web applications. Preserve business logic while gaining modern UX.",
    features: [
      "Oracle Forms → APEX migration",
      "Legacy system modernization",
      "UI/UX transformation",
      "Cloud-ready upgrades",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Database Solutions",
    color: "#0ea5e9",
    gradient: "from-sky-500/20 to-sky-600/5",
    border: "hover:border-sky-500/40",
    description:
      "Expert cloud database management across Azure SQL, AWS RDS, Oracle Cloud, and Google Cloud SQL for scalable deployments.",
    features: [
      "Azure SQL management",
      "AWS RDS optimization",
      "Oracle Cloud deployments",
      "Google Cloud SQL",
    ],
  },
  {
    icon: Shield,
    title: "Database Security & Compliance",
    color: "#16a34a",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "hover:border-emerald-500/40",
    description:
      "Harden your databases against threats with enterprise-grade security. Ensure compliance with industry regulations and standards.",
    features: [
      "Database hardening",
      "Encryption & access control",
      "Compliance support (GDPR, HIPAA)",
      "Continuous security monitoring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-6">
            <Database className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            End-to-End{" "}
            <span className="gradient-text-primary">Database Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From architecture to optimization, Oracle modernization to 24/7 support —
            we cover every aspect of enterprise database management.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`group relative glass border border-white/8 ${service.border} rounded-2xl p-6 transition-all duration-400 cursor-default overflow-hidden`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white/95 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 mb-5 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-300">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: service.color }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-4">
            Not sure what you need? Let our experts assess your environment.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:shadow-glow-primary transition-all"
          >
            Request a Free Assessment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
