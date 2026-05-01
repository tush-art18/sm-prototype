// src/pages/Admissions.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { contactInfo, admissionFastTrack } from "../data/data";
import {
  HiLocationMarker, HiPhone, HiMail, HiCheckCircle,
} from "react-icons/hi";

const streamOptions = [
  "BIPC – NEET (Medical Stream)",
  "MPC – EAPCET (Engineering Stream)",
  "CEC (Commerce Stream)",
];

export default function Admissions() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", course: streamOptions[0], message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        <div className="relative z-10 mx-auto max-w-7xl">
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
            className="mb-4 font-heading font-black text-4xl md:text-6xl text-white leading-[1.1]"
          >
            Admissions &amp; Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-lg text-white/70"
          >
            Begin your journey towards academic excellence. Our admissions team is here to guide
            you through the enrollment process and answer all your queries.
          </motion.p>
        </div>
      </section>

      {/* ─── FORM + CONTACT ───────────────────────────────── */}
      <section className="px-6 py-24 mx-auto max-w-7xl md:px-12">
        <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ── FORM ── */}
          <AnimatedSection animation="fade-left" className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-white border rounded-3xl shadow-sm border-outline-variant">
              <h2 className="font-heading font-bold text-3xl text-primary mb-8">
                Admission Inquiry
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <HiCheckCircle className="text-4xl text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-on-surface-variant">
                    Thank you, {form.name}! Our admissions team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-primary"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block tracking-wider uppercase font-bold text-xs text-primary">
                        Student Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full legal name"
                        className="w-full px-4 py-3.5 border rounded-xl outline-none border-outline-variant text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block tracking-wider uppercase font-bold text-xs text-primary">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 border rounded-xl outline-none border-outline-variant text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block tracking-wider uppercase font-bold text-xs text-primary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXX XXXXXX"
                        className="w-full px-4 py-3.5 border rounded-xl outline-none border-outline-variant text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block tracking-wider uppercase font-bold text-xs text-primary">
                        Course of Interest
                      </label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border rounded-xl outline-none border-outline-variant text-sm bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        {streamOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block tracking-wider uppercase font-bold text-xs text-primary">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your academic goals..."
                      className="w-full px-4 py-3.5 border rounded-xl outline-none border-outline-variant text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full md:w-auto">
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* ── RIGHT COLUMN ── */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Contact card */}
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="p-8 rounded-3xl bg-primary text-white">
                <h3 className="mb-6 font-heading font-bold text-2xl">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gold text-sm uppercase tracking-wide mb-1">Campus Address</p>
                      <p className="text-white/75">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <HiPhone className="text-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gold text-sm uppercase tracking-wide mb-1">Phone Numbers</p>
                      {contactInfo.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block text-white/75 hover:text-white transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <HiMail className="text-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gold text-sm uppercase tracking-wide mb-1">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-white/75 hover:text-white transition-colors break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map placeholder */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative h-52 overflow-hidden rounded-3xl border border-outline-variant group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Hyderabad Map"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/30 group-hover:bg-primary/50 transition-colors duration-300">
                  <div className="p-4 text-center rounded-2xl shadow-xl bg-white/95 backdrop-blur-sm text-primary">
                    <span className="block mb-1 text-3xl">🗺️</span>
                    <span className="font-bold text-sm">View Interactive Map</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Accreditation badge */}
            <AnimatedSection animation="fade-right" delay={300}>
              <div className="flex items-center gap-4 p-5 border rounded-2xl bg-surface-container-low border-outline-variant hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold flex-shrink-0">
                  <HiCheckCircle className="text-primary text-2xl" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg text-primary">Accredited Institution</p>
                  <p className="text-sm text-on-surface-variant">{contactInfo.accreditation}</p>
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </section>

      {/* ─── FAST-TRACK BENTO ─────────────────────────────── */}
      <section className="px-6 py-20 bg-surface-container-low mx-auto">
        <div className="max-w-7xl mx-auto md:px-12">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading font-bold text-3xl text-primary">
              Admissions Fast-Track
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionFastTrack.map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="p-7 bg-white border border-outline-variant rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="mb-2 font-heading font-bold text-xl text-primary">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
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
