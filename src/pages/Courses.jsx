// src/pages/Courses.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { courses, coachingFeatures } from "../data/data";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

function CourseCard({ course, index }) {
  const isFeatured = course.featured;

  return (
    <AnimatedSection
      animation="fade-up"
      delay={index * 120}
      className={isFeatured ? "md:col-span-2" : ""}
    >
      <div
        className={`group relative flex flex-col justify-between p-8 md:p-10 h-full border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden ${
          isFeatured
            ? "bg-white border-outline-variant rounded-3xl shadow-md"
            : "bg-white border-outline-variant rounded-3xl"
        }`}
      >
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{course.icon}</span>
          {course.badge && (
            <span className="px-3 py-1 text-xs font-bold tracking-wider rounded-full bg-gold text-primary">
              {course.badge}
            </span>
          )}
        </div>

        {/* Decorative background shape */}
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-surface-container-low group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2">
            {course.subtitle}
          </p>
          <h2 className="mb-4 font-heading font-bold text-2xl md:text-3xl text-primary">
            {course.title}
          </h2>
          <p className="mb-6 text-base text-on-surface-variant leading-relaxed">
            {course.description}
          </p>

          <ul className={`mb-8 space-y-3 ${isFeatured ? "grid grid-cols-1 md:grid-cols-2 gap-3 space-y-0" : ""}`}>
            {course.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <HiCheckCircle className="text-primary text-lg flex-shrink-0" />
                <span className="text-sm font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/admissions"
          className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary group/btn hover:gap-4 transition-all duration-300 border-b-2 border-primary pb-1 w-fit"
        >
          Explore Curriculum{" "}
          <HiArrowRight className="transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function Courses() {
  return (
    <main className="pt-20">
      {/* ─── HERO HEADER ──────────────────────────────────── */}
      <section className="relative px-6 py-24 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

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
            className="mb-4 font-heading font-black text-4xl md:text-6xl text-white leading-[1.1]"
          >
            Academic Excellence
            <br />
            <span className="text-gold">&amp; Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-lg text-white/70 leading-relaxed"
          >
            Empowering students through specialized coaching and a rigorous academic curriculum
            designed for competitive success.
          </motion.p>
        </div>
      </section>

      {/* ─── COURSE CARDS ─────────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        {/* Side cards: Highly efficient faculty + Affordable fee */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Featured BIPC NEET card */}
          <div className="md:col-span-8">
            <CourseCard course={courses[0]} index={0} />
          </div>

          {/* Side info cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="flex flex-col justify-center h-full p-8 text-white rounded-3xl bg-primary-container shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="mb-4 text-4xl">🎓</span>
                <h3 className="mb-2 font-heading font-bold text-xl">Highly Efficient Faculty</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Learn from highly qualified educators with extensive competitive teaching experience and a passion for student success.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={300}>
              <div className="h-full p-8 rounded-3xl bg-gold shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="mb-4 text-4xl block">💰</span>
                <h3 className="mb-2 font-heading font-bold text-xl text-primary">Affordable Fee</h3>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Premium education accessible to all. We offer flexible payment plans and merit scholarships.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Other Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.slice(1).map((course, i) => (
            <CourseCard key={course.id} course={course} index={i + 1} />
          ))}
        </div>
      </section>

      {/* ─── LONG-TERM COACHING ───────────────────────────── */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 font-heading font-black text-4xl md:text-5xl text-primary">
              Long-term Coaching
            </h2>
            <p className="text-lg text-on-surface-variant">
              Our signature 2-year integrated program ensures students are not just
              exam-ready, but future-ready.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {coachingFeatures.map((f, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="fade-up">
                <div className="p-8 bg-white border border-outline-variant rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h4 className="mb-3 font-heading font-bold text-xl text-primary">{f.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA CARD ─────────────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="relative overflow-hidden bg-primary rounded-3xl">
            <div className="absolute inset-0 z-0">
              <img
                className="object-cover w-full h-full opacity-10"
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
                alt="University"
              />
            </div>
            <div className="relative z-10 max-w-3xl px-8 py-16 mx-auto text-center md:p-20">
              <h2 className="mb-6 text-white font-heading font-black text-4xl md:text-5xl">
                Ready to start your journey?
              </h2>
              <p className="mb-10 text-white/70 text-lg">
                Admissions are now open for the upcoming academic session. Secure your seat at
                SM Junior College & Academy today.
              </p>
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <button className="btn-gold">Download Prospectus</button>
                <Link to="/admissions" className="btn-outline text-center">
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
