"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Zap,
  Cloud,
  Server,
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";

const floatingElements = [
  { icon: Database, label: "SQL Server", color: "#ed7b2f", x: "8%", y: "20%", delay: 0 },
  { icon: Cloud, label: "Oracle Cloud", color: "#3b82f6", x: "88%", y: "15%", delay: 0.5 },
  { icon: Shield, label: "Security", color: "#20a84b", x: "5%", y: "70%", delay: 1 },
  { icon: Server, label: "DBA Support", color: "#8b5cf6", x: "92%", y: "65%", delay: 1.5 },
  { icon: Zap, label: "Performance", color: "#f59e0b", x: "78%", y: "85%", delay: 0.8 },
  { icon: Lock, label: "Encryption", color: "#06b6d4", x: "18%", y: "88%", delay: 1.2 },
];

const sqlKeywords = [
  "SELECT", "OPTIMIZE", "INDEX", "CLUSTER", "BACKUP",
  "RESTORE", "MONITOR", "TUNE", "SCALE", "SECURE",
];

const stats = [
  { value: "99.99%", label: "Uptime SLA", color: "#20a84b" },
  { value: "24/7", label: "Monitoring", color: "#3b82f6" },
  { value: "10x", label: "Query Speed", color: "#ed7b2f" },
  { value: "500+", label: "Projects", color: "#8b5cf6" },
];

function AnimatedSQLTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const commands = [
    "-- Ponder Solutions DBA Engine v4.2",
    "EXEC sp_OptimizeQueryPerformance @db='ProductionDB';",
    "-- Index optimization: 847ms → 12ms",
    "ALTER INDEX ALL ON Orders REBUILD;",
    "-- Analyzing execution plans...",
    "CREATE STATISTICS stats_CustomerID ON Orders;",
    "-- Health check: All systems nominal ✓",
    "DBCC CHECKDB ('EnterpriseDB') WITH NO_INFOMSGS;",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setLines((prev) => [...prev, commands[i]]);
        i++;
      } else {
        setLines([]);
        i = 0;
      }
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-2xl border border-white/10 overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-slate-400 text-[10px] tracking-wider">PONDER_DBA_CONSOLE</span>
      </div>
      <div className="p-4 space-y-1 min-h-[180px]">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={
              line.startsWith("--")
                ? "text-secondary-400"
                : line.startsWith("EXEC") || line.startsWith("ALTER") || line.startsWith("CREATE") || line.startsWith("DBCC")
                ? "text-accent"
                : "text-slate-300"
            }
          >
            <span className="text-primary-500 mr-2">›</span>
            {line}
          </motion.div>
        ))}
        <div className="flex items-center gap-1 text-slate-500">
          <span className="text-primary-500">›</span>
          <span className="w-2 h-4 bg-primary-500 inline-block animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function DatabaseOrb() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Central orb */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-primary-500/30 to-primary-600/10 border border-primary-500/30 backdrop-blur-sm flex items-center justify-center">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent border border-primary-500/20" />
        <Database className="w-12 h-12 text-primary-400" />
      </div>

      {/* Orbit ring 1 */}
      <div className="absolute inset-12 rounded-full border border-primary-500/20 animate-spin" style={{ animationDuration: "20s" }}>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 shadow-glow-primary" />
      </div>

      {/* Orbit ring 2 */}
      <div className="absolute inset-4 rounded-full border border-accent/15" style={{ animation: "spin 30s linear infinite reverse" }}>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-glow-blue" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary-500 shadow-glow-secondary" />
      </div>

      {/* Orbit ring 3 */}
      <div className="absolute inset-0 rounded-full border border-white/5" style={{ animation: "spin 15s linear infinite" }}>
        <div className="absolute -top-1.5 left-1/4 w-2.5 h-2.5 rounded-full bg-purple-500" />
        <div className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full bg-cyan-500" />
      </div>

      {/* Glow background */}
      <div className="absolute inset-1/3 rounded-full bg-primary-500/10 blur-2xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Floating background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-3xl" />

      {/* Floating tech elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: el.delay + 1, duration: 0.5 }}
          style={{ left: el.x, top: el.y }}
          className="absolute hidden xl:flex flex-col items-center gap-1 animate-float"
        >
          <div
            className="glass p-2.5 rounded-xl border"
            style={{
              borderColor: `${el.color}30`,
              animationDelay: `${el.delay}s`,
            }}
          >
            <el.icon className="w-5 h-5" style={{ color: el.color }} />
          </div>
          <span className="text-[10px] text-slate-400 font-medium">{el.label}</span>
        </motion.div>
      ))}

      {/* Floating SQL keywords */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sqlKeywords.map((kw, i) => (
          <motion.div
            key={kw}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.15, 0.15, 0],
              y: [-50, -200],
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            style={{ left: `${10 + i * 8}%` }}
            className="absolute bottom-0 font-mono text-xs text-primary-400 font-semibold tracking-wider"
          >
            {kw}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary-500/30"
            >
              <div className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">
                Enterprise Database Specialists
              </span>
              <span className="text-xs text-primary-400 font-semibold">Since 2015</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Enterprise</span>
                <br />
                <span className="gradient-text-primary">Database Solutions</span>
                <br />
                <span className="text-white">That Never Sleep</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Expert SQL DBA services, Oracle APEX development, and database
              performance optimization for mission-critical systems. Oracle Forms
              modernization, 24/7 remote DBA support, cloud database management,
              and enterprise-grade security — all under one roof.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "SQL Server & Oracle",
                "APEX Development",
                "Forms Modernization",
                "24/7 Remote DBA",
                "Cloud Database",
              ].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-sm text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-secondary-400 flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(237,123,47,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl transition-all duration-300 shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white glass border border-white/20 rounded-2xl hover:border-primary-500/50 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-primary-400" />
                DB Health Check
              </motion.a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-4 gap-4 pt-4 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-black" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <DatabaseOrb />
            <AnimatedSQLTerminal />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}
