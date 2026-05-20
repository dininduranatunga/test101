"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const relationalDatabases = [
  {
    name: "Oracle Database",
    abbr: "ORA",
    bg: "#C74634",
    description: "Enterprise RDBMS, RAC, Data Guard, Exadata optimization",
    level: 98,
  },
  {
    name: "Microsoft SQL Server",
    abbr: "SQL",
    bg: "#CC2927",
    description: "MSSQL administration, Always On, SSRS, SSIS",
    level: 97,
  },
  {
    name: "MySQL",
    abbr: "MY",
    bg: "#4479A1",
    description: "Replication, InnoDB tuning, cluster management",
    level: 92,
  },
  {
    name: "PostgreSQL",
    abbr: "PG",
    bg: "#336791",
    description: "Advanced tuning, logical replication, extensions",
    level: 90,
  },
  {
    name: "MariaDB",
    abbr: "MDB",
    bg: "#003545",
    description: "Galera cluster, columnstore, enterprise features",
    level: 88,
  },
];

const nosqlDatabases = [
  {
    name: "MongoDB",
    abbr: "MGO",
    bg: "#47A248",
    description: "Document databases, Atlas, aggregation pipelines, sharding",
    level: 85,
  },
  {
    name: "Redis",
    abbr: "RDS",
    bg: "#DC382D",
    description: "Caching, sessions, pub/sub, Sentinel & Cluster",
    level: 82,
  },
  {
    name: "Elasticsearch",
    abbr: "ES",
    bg: "#005571",
    description: "Full-text search, log analytics, ELK stack",
    level: 78,
  },
];

const cloudPlatforms = [
  { name: "Azure SQL", abbr: "AZ", bg: "#0078D4" },
  { name: "AWS RDS", abbr: "AWS", bg: "#FF9900" },
  { name: "Oracle Cloud", abbr: "OCI", bg: "#F80000" },
  { name: "Google Cloud SQL", abbr: "GCP", bg: "#4285F4" },
];

const oracleTools = [
  { name: "Oracle APEX", abbr: "APX", bg: "#F80000" },
  { name: "Oracle Forms", abbr: "FRM", bg: "#C74634" },
  { name: "Oracle Reports", abbr: "RPT", bg: "#8B0000" },
  { name: "Oracle RAC", abbr: "RAC", bg: "#990000" },
];

const expertiseBadges = [
  "Query Optimization",
  "Index Tuning",
  "Replication Setup",
  "HA/DR Architecture",
  "Locking & Blocking Analysis",
  "Deadlock Resolution",
  "ETL Optimization",
  "SSIS Development",
  "SSRS Reporting",
  "Power BI Integration",
  "Database Automation",
  "Performance Baselines",
  "Backup & Recovery",
  "Monitoring Solutions",
  "Database Migration",
  "Schema Design",
  "Security Hardening",
  "Capacity Planning",
];

function DatabaseCard({
  db,
  index,
}: {
  db: { name: string; abbr: string; bg: string; description: string; level: number };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group glass border border-white/8 hover:border-white/20 rounded-xl p-5 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black flex-shrink-0"
          style={{ background: db.bg }}
        >
          {db.abbr}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-bold text-base mb-1">{db.name}</h4>
          <p className="text-slate-400 text-xs leading-relaxed">{db.description}</p>
          {/* Skill bar */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Expertise</span>
              <span>{db.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${db.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: db.bg }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-navy-800/50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">
              Our Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Enterprise Database Expertise
            <br />
            <span className="gradient-text-blue">Across SQL & NoSQL Platforms</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We help organizations manage, optimize, modernize, and scale mission-critical
            database environments across Oracle, MSSQL, MySQL, PostgreSQL, and MongoDB
            ecosystems.
          </p>
        </motion.div>

        {/* Relational Databases */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/30" />
            <span className="text-sm font-bold text-primary-400 tracking-widest uppercase px-4 py-1.5 glass border border-primary-500/20 rounded-full">
              SQL / Relational Databases
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-500/30" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relationalDatabases.map((db, i) => (
              <DatabaseCard key={db.name} db={db} index={i} />
            ))}
          </div>
        </div>

        {/* NoSQL Databases */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-secondary-500/30" />
            <span className="text-sm font-bold text-secondary-400 tracking-widest uppercase px-4 py-1.5 glass border border-secondary-500/20 rounded-full">
              NoSQL Databases
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-secondary-500/30" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nosqlDatabases.map((db, i) => (
              <DatabaseCard key={db.name} db={db} index={i} />
            ))}
          </div>
        </div>

        {/* Cloud & Oracle Tools row */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base font-bold text-slate-300 mb-4 tracking-wide uppercase"
            >
              Cloud Platforms
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {cloudPlatforms.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-3 glass border border-white/8 hover:border-white/20 rounded-xl p-3.5 transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                    style={{ background: p.bg }}
                  >
                    {p.abbr}
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{p.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base font-bold text-slate-300 mb-4 tracking-wide uppercase"
            >
              Oracle Tools
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {oracleTools.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-3 glass border border-white/8 hover:border-white/20 rounded-xl p-3.5 transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                    style={{ background: p.bg }}
                  >
                    {p.abbr}
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{p.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-white/8 rounded-2xl p-8"
        >
          <h3 className="text-center text-base font-bold text-slate-300 mb-6 tracking-wide uppercase">
            Technical Competencies
          </h3>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {expertiseBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-300 text-slate-300 text-xs font-semibold rounded-full transition-all cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
