// src/pages/Home.jsx
// Video modal for "Watch Film"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";
import {
  homeStats, coreValues, academicStreams,
  bentoImages
} from "../data/data";
import { HiX } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

// Stat counter card
function StatCard({ value, label, index }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isNumeric = !isNaN(parseFloat(value));
  const displayed = useCountUp(isNumeric ? value : "0", 2000, isVisible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 group"
    >
      <span className="block mb-2 text-3xl font-black transition-transform text-gold group-hover:scale-110">
        {isNumeric ? (isVisible ? displayed : "0") : value}
      </span>
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

// Floating particle
function Particle({ style }) {
  return <div className="particle" style={style} />;
}

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      background: i % 2 === 0 ? "rgba(252, 212, 0, 0.4)" : "rgba(255,255,255,0.2)",
    }))
  );

  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-screen py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
            alt="University campus building"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </div>

        {/* Floating particles */}
        {particles.map((p, i) => (
          <Particle
            key={i}
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              background: p.background,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-10 text-center">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-2 px-5 bg-gold/20 text-gold rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-gold/30"
            >
              ✦ Now Enrolling for 2026
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[1.05] drop-shadow-2xl"
            >
              The Right Place,{" "}
              <br />
              <span className="text-gold">To Shape Your Future</span>
              <br />
              <span className="block mt-3 text-3xl font-bold md:text-5xl opacity-80">
                SM Jr College, Coaching & Academy
              </span>
            </motion.h1>

            {/* Glassmorphism card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] w-full max-w-2xl shadow-2xl"
            >
              <p className="mb-8 text-lg font-bold leading-relaxed text-white/90 md:text-xl">
                FREE ADMISSION IN INTERMEDIATE FOR MERIT STUDENTS.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-white/80">
                A thoughtful initiative of Saint Mesum Education Society.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/courses" className="flex items-center gap-2 btn-gold">
                  Explore Programs <HiArrowRight />
                </Link>
                <a
                  href={`https://wa.me/919177890581?text=Hi!%20I'm%20interested%20in%20applying%20for%20the%202026%20academic%20year%20at%20SM%20Academy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-outline"
                >
                  Limited Seats - Apply Now
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid w-full grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              {homeStats.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 z-10 w-full h-32 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────── */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col items-end justify-between gap-12 mb-20 lg:flex-row">
            <div className="max-w-3xl">
              <span className="section-label">The SM Advantage</span>
              <h2 className="font-heading font-bold text-primary text-4xl md:text-6xl leading-[1.1]">
                Knowledge is the root{" "}
                <span className="text-primary/20">of all good</span>
              </h2>
            </div>
            <p className="max-w-sm text-lg text-on-surface-variant">
              Impressive infrastructure, dedicated faculty, and result-oriented teaching.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="fade-up">
                <div className="group p-10 rounded-[2.5rem] bg-surface-container-low hover:bg-primary transition-all duration-500 border border-transparent hover:border-white/10 cursor-pointer h-full">
                  <div className="flex items-center justify-center mb-8 text-2xl transition-transform duration-300 bg-white shadow-lg w-14 h-14 rounded-2xl group-hover:scale-110">
                    {val.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold transition-colors duration-300 font-heading text-primary group-hover:text-white">
                    {val.title}
                  </h3>
                  <p className="text-base leading-relaxed transition-colors duration-300 text-on-surface-variant group-hover:text-white/60">
                    {val.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACADEMIC STREAMS ──────────────────────────────── */}
      <section className="py-24 overflow-hidden text-white bg-primary-container">
        <div className="px-6 mx-auto max-w-7xl">
          <AnimatedSection className="mb-20 text-center">
            <span className="text-gold/60 font-bold uppercase tracking-[0.3em] text-sm block mb-4">
              Academic Pathways
            </span>
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-6xl">Curated for Ambition</h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gold" />
          </AnimatedSection>

          <div className="space-y-24">
            {academicStreams.map((stream, i) => (
              <AnimatedSection
                key={i}
                animation={i % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-20 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } group`}
                >
                  {/* Image */}
                  <div className="relative lg:w-1/2">
                    <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-gold/50 transition-colors shadow-2xl">
                      <img
                        src={stream.image}
                        alt={stream.title}
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-4 md:-bottom-6 ${
                        i % 2 === 0 ? "-right-4 md:-right-6" : "-left-4 md:-left-6"
                      } w-24 h-24 md:w-32 md:h-32 bg-gold text-primary flex items-center justify-center rounded-2xl md:rounded-[2rem] font-black text-xl md:text-2xl shadow-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      {stream.code}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`space-y-6 lg:w-1/2 ${i % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}>
                    <div>
                      <p className="mb-2 text-sm font-bold tracking-widest uppercase text-gold/60">
                        {stream.subtitle}
                      </p>
                      <h3 className="text-3xl font-bold md:text-4xl font-heading">{stream.title}</h3>
                    </div>
                    <p className="text-lg text-white/70">{stream.description}</p>
                    <ul className="grid grid-cols-2 gap-4">
                      {stream.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-medium">
                          <span className="text-lg text-gold">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/courses"
                      className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 text-gold group/btn hover:gap-4"
                    >
                      Explore Stream{" "}
                      <HiArrowRight className="transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFE AT SM – BENTO ───────────────────────────── */}
      <section className="py-24 overflow-hidden bg-surface">
        <div className="px-6 mx-auto max-w-7xl">
          <AnimatedSection className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold font-heading text-primary md:text-6xl">
              Campus Life
            </h2>
            <p className="text-lg text-on-surface-variant">
              Safe disciplined campus ensuring overall personality development.
            </p>
          </AnimatedSection>

          <div className="bento-grid">
            {bentoImages.map((item, i) => (
              <div
                key={item.key}
                className={`${item.key} group relative overflow-hidden rounded-[3rem] shadow-xl`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent group-hover:opacity-100">
                  {item.caption && (
                    <h4 className="mb-2 text-xl font-bold text-white">{item.caption}</h4>
                  )}
                  {item.subCaption && (
                    <p className="text-sm text-white/70">{item.subCaption}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="bg-primary rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M0 0 L100 0 L100 100 Z" fill="white" />
                </svg>
              </div>
              <div className="absolute w-64 h-64 rounded-full pointer-events-none -bottom-20 -left-20 bg-gold/10" />
              <div className="absolute rounded-full pointer-events-none -top-20 -right-20 w-96 h-96 bg-white/5" />

              <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
                <div className="max-w-2xl text-center lg:text-left">
                  <h2 className="mb-6 text-4xl font-black text-white md:text-6xl font-heading">
                    Your legacy starts{" "}
                    <span className="text-gold">today.</span>
                  </h2>
                  <p className="text-lg font-light text-white/60">
                    Admissions for the 2026 academic year are now live. Secure your place among
                    the leaders of tomorrow.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/919177890581?text=Hi!%20I%20want%20to%20apply%20for%20the%202026%20academic%20year.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center btn-gold whitespace-nowrap"
                  >
                    Apply Online
                  </a>
                  <a
                    href={`https://wa.me/919177890581?text=Hi!%20I'd%20like%20to%20schedule%20a%20visit%20to%20the%20SM%20Academy%20campus.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all border rounded-full border-white/20 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Book a Tour
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* ─── FLOATING WHATSAPP BUTTON ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 group"
      >
        {/* Tooltip */}
        <div className="transition-all duration-300 translate-x-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0">
          <div className="bg-white rounded-2xl shadow-xl px-4 py-2.5 whitespace-nowrap border border-outline/10">
            <p className="text-xs font-bold text-primary">Chat with Admissions</p>
            <p className="text-[10px] text-on-surface-variant">Usually replies instantly</p>
          </div>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-outline/10 rotate-45" />
        </div>

        {/* Button */}
        <a
          href="https://wa.me/919177890581?text=Hello%20SM%20Academy%2C%20I%20am%20interested%20in%20getting%20information%20about%20admissions%20for%202026."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with admissions on WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300 active:scale-95"
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <span className="absolute inset-[-6px] rounded-full border-2 border-[#25D366]/40 animate-pulse" />
          <FaWhatsapp className="relative z-10 text-3xl text-white" />
        </a>
      </motion.div>
    </main>
  );
}
