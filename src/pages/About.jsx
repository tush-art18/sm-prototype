// src/pages/About.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";
import { aboutStats, timeline, principal } from "../data/data";

function AboutStat({ value, label, index }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isNumeric = !isNaN(parseFloat(value));
  const displayed = useCountUp(isNumeric ? value : "0", 1800, isVisible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-40 text-center"
    >
      <div className="mb-3 text-4xl font-black text-gold font-heading md:text-5xl">
        {isNumeric ? (isVisible ? displayed : "0") : value}
      </div>
      <p className="text-sm font-bold text-white/70">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="pt-20">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative px-6 overflow-hidden py-28 bg-primary">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glowing orb */}
        <div className="absolute rounded-full pointer-events-none -top-20 -right-20 w-96 h-96 bg-gold/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2">
          <div className="text-white">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 font-heading font-black text-4xl md:text-6xl leading-[1.1]"
            >
              A Legacy of 42 Years in Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg leading-relaxed text-white/70"
            >
              Saint Mesum Education Society was established in the year 1984 and has been
              dedicatedly serving the cause of education for 42 years. We are successfully
              continuing our journey of shaping young minds.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="items-center justify-center hidden md:flex lg:justify-end"
          >
            <div className="w-full max-w-[360px] lg:max-w-[400px] overflow-hidden border-4 shadow-2xl border-white/20 aspect-[3/4] rounded-3xl">
              <img
                className="object-cover w-full h-full"
                src="/infrastructure-02.jpeg"
                alt="SM Academy Campus"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & PHILOSOPHY ─────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <AnimatedSection animation="fade-left" className="md:col-span-2">
            <div className="flex flex-col justify-between h-full p-10 transition-shadow bg-white border shadow-sm border-outline-variant rounded-3xl hover:shadow-lg">
              <div>
                <span className="block mb-4 text-xs font-bold tracking-widest uppercase text-primary">
                  Our Foundation
                </span>
                <h2 className="mb-6 text-3xl font-bold font-heading text-primary">
                  The SM Academy Mission
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
                  To mentor the students and train them effectively to secure merit seats in
                  Medical, Engineering and prestigious professional colleges and excel in their
                  board exams as well. We aim to help students in their careers with a vision
                  to make them confident, independent individuals.
                </p>
              </div>
              <div className="flex gap-3 mt-6">
                <div className="w-24 h-1.5 bg-gold rounded-full" />
                <div className="w-12 h-1.5 bg-primary rounded-full" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right">
            <div className="h-full p-10 text-white transition-shadow duration-300 border shadow-lg bg-primary-container rounded-3xl hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6">
                <span className="text-5xl">🎓</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white font-heading">
                Educational Philosophy
              </h3>
              <p className="leading-relaxed text-white/75">
                We believe learning should be a pleasure and teaching a passion.
                Education brings grace to a personality. To achieve the goals in life,
                we encourage, motivate and mentor our students.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DIRECTOR'S MESSAGE ───────────────────────────── */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-5">
          <AnimatedSection animation="fade-left" className="md:col-span-2">
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                className="object-cover w-full h-full"
                src={principal.image}
                alt="Principal Mrs. Sakina Marium"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" className="md:col-span-3">
            <div className="space-y-6">
              <div className="font-serif leading-none text-8xl text-primary/10">"</div>
              <h2 className="text-3xl font-bold font-heading text-primary">
                A Message from our Director
              </h2>
              <blockquote className="text-xl italic leading-relaxed text-on-surface">
                "{principal.quote}"
              </blockquote>
              <div className="pt-6 border-t border-outline-variant">
                <p className="text-2xl font-bold font-heading text-primary">{principal.name}</p>
                <p className="font-medium text-on-surface-variant">
                  Principal & Director, SM Junior College & Academy
                </p>
                <p className="mt-1 text-sm text-on-surface-variant">{principal.qualification}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INSIGHT INTO WORKING OF COLLEGE ──────────────── */}
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-16 text-center">
            <span className="section-label">Our Approach</span>
            <h2 className="text-4xl font-bold font-heading text-primary">
              Inside SM Junior College
            </h2>
            <div className="w-16 h-1.5 mx-auto mt-6 bg-gold rounded-full" />
          </AnimatedSection>
          
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <AnimatedSection animation="fade-left">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/image-05.jpeg"
                  alt="Classroom insight"
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <h3 className="mb-4 text-3xl font-bold font-heading text-primary">
                  Result-Oriented Teaching
                </h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  We strive to be the BEST LEARNING HUB in the twin cities. Our working model is designed entirely around student success, focusing on limited seats to ensure absolute personal attention. 
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 font-bold rounded-full bg-gold/20 text-gold">✓</span>
                    <span className="font-medium text-primary">Highly efficient, dedicated faculty</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 font-bold rounded-full bg-gold/20 text-gold">✓</span>
                    <span className="font-medium text-primary">Safe and disciplined campus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 font-bold rounded-full bg-gold/20 text-gold">✓</span>
                    <span className="font-medium text-primary">Weekly exams, DPP & Mock Tests</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 font-bold rounded-full bg-gold/20 text-gold">✓</span>
                    <span className="font-medium text-primary">Overall personality development and motivation</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── HISTORY TIMELINE ─────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <span className="section-label">Chronicles</span>
            <h2 className="text-4xl font-bold font-heading text-primary">
              The Saint Mesum Education Society
            </h2>
            <div className="w-16 h-1.5 mx-auto mt-6 bg-gold rounded-full" />
          </AnimatedSection>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary hidden md:block transform -translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((event, i) => (
                <AnimatedSection
                  key={i}
                  animation={i % 2 === 0 ? "fade-left" : "fade-right"}
                  delay={i * 150}
                >
                  <div
                    className={`relative flex flex-col items-center gap-8 md:flex-row ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="p-6 transition-shadow duration-300 bg-white border shadow-md rounded-2xl hover:shadow-xl border-outline-variant/50 hover:-translate-y-1">
                        <h4 className="mb-2 text-xl font-bold font-heading text-primary">
                          {event.title}
                        </h4>
                        <p className="leading-relaxed text-on-surface-variant">{event.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="z-10 items-center justify-center hidden w-12 h-12 md:flex">
                      <div className="w-4 h-4 border-4 border-white rounded-full shadow-sm bg-primary" />
                    </div>

                    <div className="flex items-center flex-1 md:block">
                      <span className="text-6xl font-black leading-none font-heading md:text-7xl text-surface-container-high">
                        {event.year}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─────────────────────────────────── */}
      <section className="px-6 py-20 bg-primary">
        <div className="flex flex-wrap justify-center gap-8 mx-auto text-center md:gap-16 max-w-7xl">
          {aboutStats.map((s, i) => (
            <AboutStat key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
