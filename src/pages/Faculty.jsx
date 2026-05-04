// src/pages/Faculty.jsx
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { faculty, principal } from "../data/data";
import { HiAcademicCap } from "react-icons/hi";

function FacultyCard({ member, index }) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 80}>
      <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group cursor-pointer">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
          </div>
        </div>
        <div className="p-5">
          <h4 className="mb-1 font-heading font-bold text-base text-primary group-hover:text-primary/80 transition-colors">
            {member.name}
          </h4>
          <p className="text-xs tracking-wider uppercase font-bold text-secondary">
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
      <header className="relative overflow-hidden bg-primary text-white py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

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
              className="max-w-2xl text-lg text-white/70 leading-relaxed"
            >
              Dedicated to nurturing excellence, our faculty provides result-oriented teaching 
              and personal attention to help students achieve their goals.
            </motion.p>
        </div>
      </header>

      {/* ─── PRINCIPAL FEATURE ────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl md:px-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-20">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-outline-variant group">
                <img
                  src={principal.image}
                  alt="Principal Portrait"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-7 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">
                  Principal & Academic Director
                </p>
                <h2 className="font-heading font-bold text-4xl text-primary">
                  {principal.name}
                </h2>
              </div>
              <div className="w-20 h-1.5 bg-gold rounded-full" />
              <p className="leading-relaxed text-on-surface-variant text-lg">
                {principal.bio}
              </p>
              
              {principal.qualification && (
                <div className="flex items-center gap-3 text-primary font-bold">
                  <HiAcademicCap className="text-2xl" />
                  <span>{principal.qualification}</span>
                </div>
              )}

              {/* Quote bubble */}
              <div className="mt-4 p-6 rounded-2xl bg-surface-container-low border-l-4 border-gold italic text-on-surface-variant leading-relaxed">
                "{principal.quote.substring(0, 120)}..."
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ─── FACULTY GRID ─────────────────────────────────── */}
        <div>
          <AnimatedSection className="mb-10">
            <h3 className="pl-5 font-heading font-bold text-2xl text-primary border-l-4 border-gold">
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
      <section className="bg-surface-container py-20 px-6">
        <AnimatedSection>
          <div className="mx-auto text-center max-w-3xl">
            <h2 className="mb-6 font-heading font-bold text-4xl text-primary">
              Join Our Excellence
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-on-surface-variant">
              Are you a passionate educator looking to make a difference? We are always looking
              for exceptional talent to join our academic family.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="btn-primary">View Vacancies</button>
              <button className="px-8 py-4 transition-all rounded-full border-2 border-primary text-primary font-bold font-heading hover:bg-primary hover:text-white">
                Contact Faculty Office
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
