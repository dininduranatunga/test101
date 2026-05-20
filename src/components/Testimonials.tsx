"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Deshan Maduwantha",
    role: "Senior IT Manager",
    company: "Enterprise Technology Group",
    avatar: "DM",
    avatarColor: "#ed7b2f",
    rating: 5,
    text: "Excellent service and highly professional support. The Ponder Solutions team delivered outstanding results — their SQL DBA expertise and Oracle APEX development transformed our database infrastructure. We would gladly work with them again on any future project.",
    highlight: "Outstanding results",
  },
  {
    name: "Kaumadi Alexander",
    role: "Head of Digital Operations",
    company: "Financial Services Ltd",
    avatar: "KA",
    avatarColor: "#3b82f6",
    rating: 5,
    text: "Extremely helpful, innovative, and reliable team. They consistently delivered a very satisfactory outcome and provided exceptional support throughout the entire engagement. Their Oracle Forms modernization expertise is second to none.",
    highlight: "Exceptional support",
  },
  {
    name: "Nipun Perera",
    role: "Chief Technology Officer",
    company: "TechVentures Lanka",
    avatar: "NP",
    avatarColor: "#20a84b",
    rating: 5,
    text: "Their work quality exceeded expectations. Professional, responsive, and technically skilled across Oracle, SQL Server, and cloud databases. The database performance improvements they delivered were remarkable. Looking forward to future collaborations.",
    highlight: "Exceeded expectations",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-navy-800/40 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-yellow-300 tracking-wide">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Trusted by{" "}
            <span className="gradient-text-primary">Enterprise Teams</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Hear from the technology leaders who trust Ponder Solutions with
            their most critical database environments.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Main testimonial card */}
          <div className="relative overflow-hidden min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="glass border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                  {/* Background accent */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
                    style={{ background: testimonials[current].avatarColor }}
                  />

                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-white/5">
                    <Quote className="w-16 h-16" />
                  </div>

                  <div className="relative z-10 grid lg:grid-cols-[auto,1fr] gap-8 items-start">
                    {/* Avatar & info */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${testimonials[current].avatarColor}, ${testimonials[current].avatarColor}90)` }}
                      >
                        {testimonials[current].avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg leading-tight">
                          {testimonials[current].name}
                        </div>
                        <div className="text-slate-400 text-sm">{testimonials[current].role}</div>
                        <div
                          className="text-xs font-semibold mt-1"
                          style={{ color: testimonials[current].avatarColor }}
                        >
                          {testimonials[current].company}
                        </div>
                        <div className="mt-2">
                          <StarRating rating={testimonials[current].rating} />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full inline-block"
                        style={{
                          color: testimonials[current].avatarColor,
                          background: `${testimonials[current].avatarColor}15`,
                        }}
                      >
                        "{testimonials[current].highlight}"
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed font-light">
                        &ldquo;{testimonials[current].text}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-2.5 glass border border-white/10 hover:border-white/30 rounded-xl transition-all text-slate-400 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-primary-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 glass border border-white/10 hover:border-white/30 rounded-xl transition-all text-slate-400 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All testimonials preview */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              whileHover={{ y: -3 }}
              className={`text-left glass border rounded-2xl p-4 transition-all duration-300 ${
                i === current
                  ? "border-primary-500/40 bg-primary-500/5"
                  : "border-white/8 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.company}</div>
                </div>
              </div>
              <StarRating rating={t.rating} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
