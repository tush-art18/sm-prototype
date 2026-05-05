// src/pages/Faculty.jsx
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { faculty, principal } from "../data/data";
import { HiAcademicCap, HiArrowRight } from "react-icons/hi";

function FacultyCard({ member, index }) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 80}>
      <div className="overflow-hidden transition-all duration-500 bg-white border cursor-pointer border-outline-variant rounded-2xl hover:shadow-2xl hover:-translate-y-3 group">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-end p-5 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-white/80">{member.bio}</p>
          </div>
        </div>
        <div className="p-5">
          <h4 className="mb-1 text-base font-bold transition-colors font-heading text-primary group-hover:text-primary/80">
            {member.name}
          </h4>
          <p className="text-xs font-bold tracking-wider uppercase text-secondary">
            {member.role}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Faculty() {
  return (
    <main className="pt-20">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <header className="relative py-24 overflow-hidden text-white bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute right-0 rounded-full pointer-events-none -top-20 w-96 h-96 bg-gold/10 blur-3xl" />

        <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest"
          >
            Academic Leadership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 font-heading font-black text-4xl md:text-6xl leading-[1.1]"
          >
            Our Academic Team
          </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl text-lg leading-relaxed text-white/70"
            >
              Dedicated to nurturing excellence, our faculty provides result-oriented teaching 
              and personal attention to help students achieve their goals.
            </motion.p>
        </div>
      </header>

      {/* ─── PRINCIPAL FEATURE ────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl md:px-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant group">
                <img
                  src={principal.image}
                  alt="Principal Portrait"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-primary/60 to-transparent group-hover:opacity-100" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 md:col-span-7">
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest uppercase text-secondary">
                  Principal & Academic Director
                </p>
                <h2 className="text-4xl font-bold font-heading text-primary">
                  {principal.name}
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-gold rounded-full" />
              <p className="text-lg leading-relaxed text-on-surface-variant">
                {principal.bio}
              </p>
              
              {principal.qualification && (
                <div className="flex items-center gap-3 font-bold text-primary">
                  <HiAcademicCap className="text-2xl" />
                  <span>{principal.qualification}</span>
                </div>
              )}

              {/* Quote bubble */}
              <div className="p-6 mt-4 italic leading-relaxed border-l-4 rounded-2xl bg-surface-container-low border-gold text-on-surface-variant">
                "{principal.quote.substring(0, 120)}..."
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── FACULTY GRID ─────────────────────────────────── */}
        <div>
          <AnimatedSection className="mb-10">
            <h3 className="pl-5 text-2xl font-bold border-l-4 font-heading text-primary border-gold">
              Department Heads & Faculty
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member, i) => (
              <FacultyCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN US CTA ──────────────────────────────────── */}
      <section className="px-6 py-20 bg-surface-container">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold font-heading text-primary">
              Join Our Excellence
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-on-surface-variant">
              Are you a passionate educator looking to make a difference? We are always looking
              for exceptional talent to join our academic family.
            </p>
            <a
              href={`https://wa.me/919177890581?text=Hi!%20I'm%20a%20passionate%20educator%20and%20I'd%20like%20to%20inquire%20about%20career%20opportunities%20at%20SM%20Academy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold"
            >
              Join Our Team <HiArrowRight />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
