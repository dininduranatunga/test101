"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "105/14, Palagama, Polgasowita 10320",
    href: "https://maps.google.com",
    color: "#ed7b2f",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Support@pondersl.com",
    href: "mailto:Support@pondersl.com",
    color: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 345 7794",
    href: "tel:+94773457794",
    color: "#20a84b",
  },
];

const urgentFeatures = [
  { icon: Clock, label: "Emergency DBA Support Available", color: "#ed7b2f" },
  { icon: Shield, label: "Free Initial Consultation", color: "#20a84b" },
  { icon: Zap, label: "Response Within 2 Business Hours", color: "#3b82f6" },
];

const services = [
  "SQL DBA Services",
  "Oracle APEX Development",
  "Oracle Forms Migration",
  "Database Performance Optimization",
  "24/7 Remote DBA Support",
  "Cloud Database Management",
  "Database Security & Compliance",
  "Database Health Check",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-navy-800/50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Start Your{" "}
            <span className="gradient-text-primary">Free Consultation</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Speak with a certified database expert today. No obligation, no sales pressure —
            just honest, expert advice about your database environment.
          </p>
        </motion.div>

        {/* Urgent features */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {urgentFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2.5 glass border border-white/10 px-5 py-2.5 rounded-full"
            >
              <f.icon className="w-4 h-4" style={{ color: f.color }} />
              <span className="text-sm font-semibold text-slate-300">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.label === "Office" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 glass border border-white/8 hover:border-white/25 rounded-2xl p-5 transition-all group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}25` }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    {info.label}
                  </div>
                  <div className="text-white font-semibold text-sm group-hover:text-slate-200 transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/94773457794"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full glass border border-secondary-500/30 hover:border-secondary-500/60 rounded-2xl p-5 transition-all group bg-secondary-500/5 hover:bg-secondary-500/10"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-secondary-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest mb-0.5">
                  WhatsApp
                </div>
                <div className="text-white font-bold">Chat on WhatsApp</div>
                <div className="text-slate-400 text-xs">Typically replies within minutes</div>
              </div>
            </motion.a>

            {/* Map placeholder */}
            <div className="glass border border-white/8 rounded-2xl overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-navy-800/80 flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-sm font-semibold text-white">Polgasowita, Sri Lanka</div>
                <div className="text-xs text-slate-400">105/14, Palagama, Polgasowita 10320</div>
                <a
                  href="https://maps.google.com/?q=Polgasowita,Sri+Lanka"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-xs text-primary-400 hover:text-primary-300 font-semibold underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="glass border border-white/10 rounded-3xl p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary-500/20 border border-secondary-500/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will contact you within 2 business
                    hours to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-2 text-sm text-primary-400 hover:text-primary-300 font-semibold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 focus:bg-white/8 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 focus:bg-white/8 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 focus:bg-white/8 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 focus:bg-white/8 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                      Service Required
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 outline-none appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-navy-800">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-navy-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your database environment, challenges, or what you're trying to achieve..."
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm transition-all focus:border-primary-500 focus:bg-white/8 outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl hover:shadow-glow-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message & Book Consultation
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-slate-500">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
