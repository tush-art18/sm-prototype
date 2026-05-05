// src/pages/Courses.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { courses } from "../data/data";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

function CourseCard({ course, index }) {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={index * 120}
      className="h-full"
    >
      <div
        className="group relative flex flex-col md:flex-row p-6 md:p-8 h-full bg-white border border-outline-variant rounded-[2rem] md:rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden"
      >
        {/* Decorative background shape */}
        <div className="absolute w-40 h-40 transition-transform duration-700 rounded-full pointer-events-none -top-8 -left-8 bg-surface-container-low group-hover:scale-150" />

        <div className="relative z-10 flex-1 flex flex-col pr-0 md:pr-6 mb-6 md:mb-0">
          {/* Badge & Icon */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{course.icon}</span>
            {course.badge && (
              <span className="px-3 py-1 text-xs font-bold tracking-wider rounded-full bg-gold text-primary">
                {course.badge}
              </span>
            )}
          </div>

          <p className="mb-1 text-xs font-bold tracking-widest uppercase text-on-surface-variant">
            {course.subtitle}
          </p>
          <h2 className="mb-4 text-2xl font-bold font-heading md:text-3xl text-primary">
            {course.title}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
            {course.description}
          </p>

          <ul className="mb-8 space-y-2 flex-1">
            {course.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <HiCheckCircle className="flex-shrink-0 text-primary" />
                <span className="text-xs font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/919177890581?text=Hi!%20I'd%20like%20to%20see%20the%20curriculum%20for%20the%20${course.title}%20program.`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center gap-2 pb-1 text-xs font-bold tracking-widest uppercase transition-all duration-300 border-b-2 text-primary group/btn hover:gap-4 border-primary w-fit mt-auto"
          >
            Explore Curriculum{" "}
            <HiArrowRight className="transition-transform group-hover/btn:translate-x-2" />
          </a>
        </div>

        {/* Image side */}
        <div className="w-full md:w-2/5 shrink-0 relative flex flex-col justify-center">
          <div className="w-full h-48 md:h-full md:min-h-[300px] rounded-2xl md:rounded-3xl overflow-hidden shadow-inner">
            <img src={course.image} alt={course.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Courses() {
  return (
    <main className="pt-20">
      {/* ─── HERO HEADER ──────────────────────────────────── */}
      <section className="relative px-6 py-24 overflow-hidden bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute rounded-full pointer-events-none -bottom-32 -left-32 w-96 h-96 bg-gold/10 blur-3xl" />

        <div className="relative z-10 px-0 mx-auto max-w-7xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest"
          >
            Academic Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-heading font-black text-3xl sm:text-4xl md:text-6xl text-white leading-tight md:leading-[1.1]"
          >
            Academic Excellence
            <br />
            <span className="text-gold">&amp; Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Empowering students through specialized coaching and a rigorous academic curriculum
            designed for competitive success.
          </motion.p>
        </div>
      </section>

      {/* ─── COURSE CARDS ─────────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Top Left: BIPC */}
          <CourseCard course={courses[0]} index={0} />

          {/* Top Right: MPC */}
          <CourseCard course={courses[1]} index={1} />

          {/* Bottom Left: Side info cards stacked */}
          <div className="flex flex-col gap-8 h-full">
            <AnimatedSection animation="fade-right" delay={200} className="flex-1">
              <div className="flex flex-col justify-center h-full p-8 text-white transition-all duration-300 shadow-lg rounded-[2rem] md:rounded-3xl bg-primary-container hover:-translate-y-1">
                <span className="mb-4 text-4xl">🎓</span>
                <h3 className="mb-2 text-xl font-bold font-heading">Highly Efficient Faculty</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  Learn from highly qualified educators with extensive competitive teaching experience and a passion for student success.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={300} className="flex-1">
              <div className="h-full p-8 transition-all duration-300 shadow-lg flex flex-col justify-center rounded-[2rem] md:rounded-3xl bg-gold hover:-translate-y-1">
                <span className="block mb-4 text-4xl">💰</span>
                <h3 className="mb-2 text-xl font-bold font-heading text-primary">Affordable Fee</h3>
                <p className="text-sm leading-relaxed text-primary/70">
                  Premium education accessible to all. We offer flexible payment plans and merit scholarships.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Right: CEC */}
          <CourseCard course={courses[2]} index={2} />
        </div>
      </section>

      {/* ─── LONG-TERM COACHING ───────────────────────────── */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black font-heading md:text-5xl text-primary">
              Long-term Coaching
            </h2>
            <p className="text-lg text-on-surface-variant">
              Our signature 2-year program ensures students are not just
              exam-ready, but future-ready.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 md:p-16 bg-white border border-outline-variant rounded-[2rem] md:rounded-[3rem] shadow-xl text-center relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-lg md:text-2xl leading-relaxed text-on-surface-variant font-medium">
                  Exclusive coaching for <span className="text-primary font-bold">NEET students</span>. 
                  Our signature 2-year program ensures students are not just exam-ready, but future-ready. 
                  It definitely helps them to <span className="text-gold font-bold">improve scores</span> and achieve their medical aspirations.
                </p>
                <div className="mt-10 w-24 h-1.5 bg-gold mx-auto rounded-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA CARD ─────────────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-primary rounded-[2rem] md:rounded-3xl">
            <div className="absolute inset-0 z-0">
              <img
                className="object-cover w-full h-full opacity-10"
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
                alt="University"
              />
            </div>
            <div className="relative z-10 max-w-3xl px-8 py-16 mx-auto text-center md:p-20">
              <h2 className="mb-6 text-3xl sm:text-4xl font-black text-white font-heading md:text-5xl">
                Ready to start your journey?
              </h2>
              <p className="mb-10 text-lg text-white/70">
                Admissions are now open for the upcoming academic session. Secure your seat at
                SM Junior College & Academy today.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <a
                  href={`https://wa.me/919177890581?text=Hi!%20I%20have%20some%20questions%20about%20the%20admissions%20process%20at%20SM%20Academy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center btn-outline"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
