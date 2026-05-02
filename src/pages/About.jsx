// src/pages/About.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";
import { aboutStats, timeline, principal } from "../data/data";

function AboutStat({ value, label, index }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const displayed = useCountUp(value, 1800, isVisible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center w-40"
    >
      <div className="mb-3 text-gold font-heading font-black text-4xl md:text-5xl">
        {isVisible ? displayed : "0"}
      </div>
      <p className="text-white/70 font-bold text-sm">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="pt-20">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative px-6 py-28 overflow-hidden bg-primary">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glowing orb */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid items-center mx-auto max-w-7xl md:grid-cols-2 gap-16">
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
              Our Legacy of Intellectual Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg leading-relaxed text-white/70"
            >
              A tradition of academic rigor and character building that prepares the leaders of
              tomorrow through holistic development and a global perspective.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="overflow-hidden border-4 border-white/20 shadow-2xl aspect-video rounded-3xl">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                alt="SM Academy Campus"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & PHILOSOPHY ─────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-left" className="md:col-span-2">
            <div className="flex flex-col justify-between bg-white border border-outline-variant p-10 rounded-3xl h-full shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <span className="block mb-4 tracking-widest uppercase text-primary font-bold text-xs">
                  Our Foundation
                </span>
                <h2 className="mb-6 font-heading font-bold text-3xl text-primary">
                  The SM Academy Mission
                </h2>
                <p className="mb-6 leading-relaxed text-lg text-on-surface-variant">
                  To empower every student with the intellectual tools, moral character, and
                  critical thinking skills required to excel in a rapidly evolving global landscape.
                  We are committed to fostering an environment where curiosity is nurtured, and
                  discipline is celebrated.
                </p>
              </div>
              <div className="flex gap-3 mt-6">
                <div className="w-24 h-1.5 bg-gold rounded-full" />
                <div className="w-12 h-1.5 bg-primary rounded-full" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right">
            <div className="border bg-primary-container p-10 rounded-3xl text-white h-full shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-1 duration-300">
              <div className="mb-6">
                <span className="text-5xl">🎓</span>
              </div>
              <h3 className="mb-4 font-heading font-bold text-2xl text-white">
                Educational Philosophy
              </h3>
              <p className="leading-relaxed text-white/75">
                We believe education is not the filling of a bucket, but the lighting of a fire.
                Our curriculum balances scientific inquiry with classical humanities to develop
                well-rounded individuals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DIRECTOR'S MESSAGE ───────────────────────────── */}
      <section className="px-6 bg-surface-container-low py-24">
        <div className="grid items-center mx-auto max-w-7xl md:grid-cols-5 gap-12">
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
              <div className="text-8xl text-primary/10 leading-none font-serif">"</div>
              <h2 className="font-heading font-bold text-3xl text-primary">
                A Message from our Director
              </h2>
              <blockquote className="italic leading-relaxed text-xl text-on-surface">
                "{principal.quote}"
              </blockquote>
              <div className="pt-6 border-t border-outline-variant">
                <p className="font-heading font-bold text-2xl text-primary">{principal.name}</p>
                <p className="text-on-surface-variant font-medium">
                  Principal & Director, SM Junior College & Academy
                </p>
                <p className="text-sm text-on-surface-variant mt-1">{principal.qualification}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── HISTORY TIMELINE ─────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="mb-16 text-center">
            <span className="section-label">Chronicles</span>
            <h2 className="font-heading font-bold text-4xl text-primary">
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
                      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-outline-variant/50 hover:-translate-y-1 duration-300">
                        <h4 className="mb-2 font-heading font-bold text-xl text-primary">
                          {event.title}
                        </h4>
                        <p className="text-on-surface-variant leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="z-10 hidden md:flex w-12 h-12 items-center justify-center">
                      <div className="w-4 h-4 border-4 border-white rounded-full shadow-sm bg-primary" />
                    </div>

                    <div className="flex-1 flex items-center md:block">
                      <span className="font-heading font-black text-6xl md:text-7xl text-surface-container-high leading-none">
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mx-auto text-center max-w-7xl">
          {aboutStats.map((s, i) => (
            <AboutStat key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
