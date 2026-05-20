"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Zap,
  Award,
  Users,
  BarChart3,
  Lock,
  HeadphonesIcon,
} from "lucide-react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  );
}

const reasons = [
  {
    icon: Award,
    title: "Certified Database Experts",
    desc: "Our team holds certifications from Oracle, Microsoft, AWS, and other leading vendors. Years of hands-on enterprise experience.",
    color: "#ed7b2f",
    stat: "15+",
    statLabel: "Certifications",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring & Support",
    desc: "Round-the-clock database monitoring with guaranteed response times. Your systems never sleep, and neither do we.",
    color: "#3b82f6",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Zap,
    title: "Rapid Response Times",
    desc: "Critical issues get immediate attention. Our SLA guarantees sub-15 minute response for P1 incidents.",
    color: "#f59e0b",
    stat: "<15",
    statLabel: "Min Response",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    desc: "Every engagement starts with a security mindset. Database hardening, encryption, and compliance built in from day one.",
    color: "#20a84b",
    stat: "100%",
    statLabel: "Security Audits",
  },
  {
    icon: Users,
    title: "Dedicated Remote DBA Team",
    desc: "A dedicated team of remote DBA specialists assigned to your account — deep knowledge of your environment.",
    color: "#8b5cf6",
    stat: "200+",
    statLabel: "Clients Served",
  },
  {
    icon: BarChart3,
    title: "Proactive Optimization",
    desc: "We don't wait for problems. Continuous performance monitoring and proactive tuning keeps your databases running at peak.",
    color: "#06b6d4",
    stat: "10x",
    statLabel: "Avg Speed Gain",
  },
  {
    icon: HeadphonesIcon,
    title: "Tailored Solutions",
    desc: "No cookie-cutter approaches. Every solution is designed specifically for your infrastructure, requirements, and business goals.",
    color: "#ec4899",
    stat: "0",
    statLabel: "Generic Templates",
  },
  {
    icon: Lock,
    title: "Business Continuity Focused",
    desc: "HA/DR architectures, automated backups, and failover strategies ensure your business keeps running no matter what.",
    color: "#16a34a",
    stat: "99.99%",
    statLabel: "Uptime SLA",
  },
];

const counters = [
  { value: 500, suffix: "+", label: "Projects Completed", color: "#ed7b2f" },
  { value: 200, suffix: "+", label: "Enterprise Clients", color: "#3b82f6" },
  { value: 15, suffix: "+", label: "Years Experience", color: "#20a84b" },
  { value: 99, suffix: ".99%", label: "Uptime Delivered", color: "#8b5cf6" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-navy-800/40 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-500/10 border border-secondary-500/20 px-4 py-1.5 rounded-full mb-6">
            <Award className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-green-300 tracking-wide">
              Why Ponder Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            The Enterprise Standard in{" "}
            <span className="gradient-text-secondary">Database Excellence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            When your mission-critical databases demand the best, Ponder Solutions delivers
            certified expertise, unmatched reliability, and proactive support.
          </p>
        </motion.div>

        {/* Counter stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {counters.map((counter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center glass border border-white/8 rounded-2xl p-6"
            >
              <div
                className="text-4xl lg:text-5xl font-black mb-2"
                style={{ color: counter.color }}
              >
                <CountUp target={counter.value} suffix={counter.suffix} />
              </div>
              <div className="text-slate-400 text-sm font-medium">{counter.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass border border-white/8 hover:border-white/20 rounded-2xl p-5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${reason.color}10, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}25` }}
                >
                  <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
                </div>

                <div className="text-2xl font-black mb-0.5" style={{ color: reason.color }}>
                  {reason.stat}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                  {reason.statLabel}
                </div>

                <h3 className="text-white font-bold text-sm mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
