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
      <section className="relative min-h-[70vh] flex items-center px-6 py-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1740&auto=format&fit=crop"
            alt="Students on campus"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-surface" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 mx-auto text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            2026 Admissions Now Open
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-tight md:leading-[1] tracking-tight"
          >
            Shape Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Future Today.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12 text-lg font-light leading-relaxed md:text-xl text-white/70"
          >
            Experience a world-class education designed to empower ambition. 
            Our streamlined admissions process is built to help you transition 
            seamlessly into your next academic chapter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={`https://wa.me/919177890581?text=Hi!%20I%20want%20to%20start%20my%20application%20for%20the%202026%20batch%20at%20SM%20Academy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold"
            >
              Start Application <HiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SCHOLARSHIP BANNER ───────────────────────────── */}
      <section className="relative z-20 px-6 py-12 -mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="group relative overflow-hidden bg-primary rounded-[2rem] md:rounded-[3rem] p-1 md:p-1.5 shadow-2xl transition-all duration-500 hover:shadow-gold/10 hover:shadow-[0_0_50px_rgba(252,212,0,0.15)]">
              {/* Inner Gradient Border Effect */}
              <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-gold/40 via-yellow-200/20 to-gold/40" />
              
              <div className="relative z-10 bg-primary/90 backdrop-blur-xl rounded-[1.8rem] md:rounded-[2.8rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="max-w-2xl text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-gold text-primary rounded-full"
                  >
                    Exclusive Opportunity
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-heading text-white mb-6 leading-tight md:leading-[1.1]">
                    Merit-Based <span className="text-gold">Free Admission</span>
                  </h2>
                  <p className="text-lg font-light leading-relaxed text-white/60 md:text-xl">
                    We believe in students hard work and potential. SM Academy offers 
                    <span className="font-medium text-white"> scholarship </span> 
                    for high-performing intermediate students.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6 shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 transition-opacity bg-gold blur-2xl opacity-20 group-hover:opacity-40" />
                    <a
                      href={`https://wa.me/919177890581?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20Merit%20Scholarship%20opportunities%20at%20SM%20Academy.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-3 px-10 py-5 text-sm font-black tracking-wider uppercase transition-all rounded-full shadow-2xl bg-gold text-primary hover:bg-white hover:scale-105"
                    >
                      Claim Scholarship <HiArrowRight className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ENROLLMENT PROCESS ───────────────────────────── */}
      <section id="process" className="px-6 py-20 mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black md:text-5xl font-heading text-primary">
            3 Steps to Enrollment
          </h2>
          <div className="w-20 h-1.5 bg-gold mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div className="h-full p-6 sm:p-8 transition-all duration-300 bg-white border border-outline-variant rounded-[2rem] md:rounded-3xl hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 mb-6 text-3xl rounded-2xl bg-primary-container text-primary">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading text-primary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-10">
              <AnimatedSection>
                <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-gold">
                  Get in Touch
                </span>
                <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl font-heading text-primary">
                  We're Here to Help You Succeed.
                </h2>
                <p className="mb-10 text-lg text-on-surface-variant">
                  Our admissions counselors are available Monday through Saturday, 9:00 AM to 6:00 PM to assist you.
                </p>
              </AnimatedSection>

              <div className="grid gap-6 sm:grid-cols-2">
                <AnimatedSection delay={100} animation="fade-right">
                  <div className="h-full p-6 bg-white border shadow-sm rounded-[1.5rem] md:rounded-3xl border-outline-variant">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-primary/5 rounded-xl text-primary">
                      <HiPhone />
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-primary">Call Us</h4>
                    <div className="space-y-1">
                      {contactInfo.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block text-lg transition-colors text-on-surface-variant hover:text-primary"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200} animation="fade-right">
                  <div className="h-full p-6 bg-white border shadow-sm rounded-[1.5rem] md:rounded-3xl border-outline-variant">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-green-600 bg-green-500/10 rounded-xl">
                      <FaWhatsapp />
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-primary">WhatsApp</h4>
                    <a
                      href={`https://wa.me/91${contactInfo.phones[0].replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg transition-colors text-on-surface-variant hover:text-green-600"
                    >
                      Chat with Admissions
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={300} animation="fade-up">
                <div className="flex items-center gap-6 p-6 bg-white border shadow-sm rounded-[1.5rem] md:rounded-3xl border-outline-variant">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-gold/20 rounded-xl text-gold shrink-0">
                    <HiMail />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-primary">Email Address</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg break-all transition-colors text-on-surface-variant hover:text-primary"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Map & Location */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-primary p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative">
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
                  <div className="absolute p-6 text-white border shadow-xl bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-md border-white/20 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <HiLocationMarker className="mt-1 text-3xl text-gold shrink-0" />
                      <div>
                        <h4 className="mb-2 text-xl font-bold font-heading">Campus Location</h4>
                        <p className="text-sm leading-relaxed text-white/80">
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
      <section className="px-6 py-24 mx-auto bg-white">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl text-primary">
              Admissions Fast-Track
            </h2>
            <p className="text-on-surface-variant">Everything you need to know at a glance.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {admissionFastTrack.map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center transition-all duration-300 border cursor-pointer bg-surface-container-lowest border-outline-variant rounded-[2rem] md:rounded-3xl hover:shadow-xl hover:-translate-y-2 group">
                  <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="mb-3 text-2xl font-bold font-heading text-primary">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-on-surface-variant">
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
