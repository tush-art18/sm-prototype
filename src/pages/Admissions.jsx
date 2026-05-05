// src/pages/Admissions.jsx
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { contactInfo, admissionFastTrack } from "../data/data";
import {
  HiLocationMarker, HiPhone, HiMail,
  HiChatAlt2, HiMap, HiAcademicCap, HiArrowRight
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function Admissions() {
  const steps = [
    {
      icon: <HiChatAlt2 />,
      title: "1. Connect With Us",
      desc: "Reach out via Phone, WhatsApp, or Email to discuss your academic goals with our counselors.",
    },
    {
      icon: <HiMap />,
      title: "2. Visit the Campus",
      desc: "Schedule a campus tour to experience our facilities and meet our expert faculty in person.",
    },
    {
      icon: <HiAcademicCap />,
      title: "3. Secure Your Seat",
      desc: "Submit your SSC results and required documents to finalize your enrollment for the 2026 batch.",
    },
  ];

  return (
    <main className="pt-20">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-primary px-6 py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -right-20 top-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest"
          >
            2026 Admissions Open
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
          >
            Your Journey <span className="text-gold">Begins Here</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed"
          >
            We've simplified our admissions process to focus on what matters most: you.
            Reach out directly to our team to discover how SM Academy can shape your future.
          </motion.p>
        </div>
      </section>

      {/* ─── SCHOLARSHIP BANNER ───────────────────────────── */}
      <section className="px-6 py-12 -mt-12 relative z-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-gold to-yellow-500 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-primary overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10 max-w-xl">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-primary text-gold rounded-full">
                  Merit Scholarship
                </span>
                <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 leading-tight">
                  FREE ADMISSION IN INTERMEDIATE FOR MERIT STUDENTS.
                </h2>
                <p className="text-primary/80 font-medium text-lg">
                  A thoughtful initiative to support and nurture exceptional academic talent.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <a
                  href={`https://wa.me/91${contactInfo.phones[0].replace(/\s/g, "")}?text=Hi!%20I%20want%20to%20claim%20the%20Merit%20Scholarship.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-gold font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
                >
                  Claim Scholarship <HiArrowRight />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ENROLLMENT PROCESS ───────────────────────────── */}
      <section className="px-6 py-20 mx-auto max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary mb-4">
            3 Steps to Enrollment
          </h2>
          <div className="w-20 h-1.5 bg-gold mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div className="bg-white border border-outline-variant rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary-container text-primary flex items-center justify-center text-3xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── DIRECT CONTACT HUB ───────────────────────────── */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div className="space-y-10">
              <AnimatedSection>
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-6xl font-black font-heading text-primary mb-6 leading-tight">
                  We're Here to Help You Succeed.
                </h2>
                <p className="text-lg text-on-surface-variant mb-10">
                  Our admissions counselors are available Monday through Saturday, 9:00 AM to 6:00 PM to assist you.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-6">
                <AnimatedSection delay={100} animation="fade-right">
                  <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm h-full">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary text-2xl mb-4">
                      <HiPhone />
                    </div>
                    <h4 className="font-bold text-lg text-primary mb-2">Call Us</h4>
                    <div className="space-y-1">
                      {contactInfo.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block text-on-surface-variant hover:text-primary transition-colors text-lg"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200} animation="fade-right">
                  <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm h-full">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-2xl mb-4">
                      <FaWhatsapp />
                    </div>
                    <h4 className="font-bold text-lg text-primary mb-2">WhatsApp</h4>
                    <a
                      href={`https://wa.me/91${contactInfo.phones[0].replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-on-surface-variant hover:text-green-600 transition-colors text-lg"
                    >
                      Chat with Admissions
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={300} animation="fade-up">
                <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm flex items-center gap-6">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-gold text-2xl shrink-0">
                    <HiMail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-1">Email Address</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-on-surface-variant hover:text-primary transition-colors text-lg break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Map & Location */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-primary p-2 md:p-4 rounded-[2.5rem] shadow-2xl relative">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[2rem]">
                  <iframe
                    title="Campus Location"
                    className="w-full h-full border-0"
                    src="https://maps.google.com/maps?q=LIGHT+HOUSE,+Balshetty+Kheth,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Address overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white shadow-xl">
                    <div className="flex gap-4 items-start">
                      <HiLocationMarker className="text-3xl text-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xl mb-2 font-heading">Campus Location</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAST-TRACK BENTO ─────────────────────────────── */}
      <section className="px-6 py-24 bg-white mx-auto">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Admissions Fast-Track
            </h2>
            <p className="text-on-surface-variant">Everything you need to know at a glance.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {admissionFastTrack.map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-center items-center text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="mb-3 font-heading font-bold text-2xl text-primary">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
