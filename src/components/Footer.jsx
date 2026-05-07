// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { navLinks, contactInfo } from "../data/data";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white bg-primary">
      {/* Main Footer */}
      <div className="px-6 pt-20 pb-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/favicon.png" alt="SM Academy Logo" className="object-cover w-12 h-12 rounded-full transition-transform duration-300 md:w-14 md:h-14 group-hover:scale-105 bg-white p-1.5 shadow-lg border border-white/10" />
              <span className="text-2xl font-black font-heading">SM Academy</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Pioneering excellence in education through innovative learning models and global standard infrastructure.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/smjrcollege?utm_source=qr&igsh=YTRyMGQ5Nm96bGx3" },
                { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/91${contactInfo.phones[0].replace(/\s/g, "")}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={label === "WhatsApp" ? `${href}?text=Hi!%20I'm%20visiting%20the%20SM%20Academy%20website%20and%20have%20a%20few%20questions.` : href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center transition-all duration-300 border rounded-full w-9 h-9 border-white/20 text-white/60 hover:bg-gold hover:text-primary hover:border-gold"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="mb-6 text-xs font-bold tracking-widest uppercase text-gold">Navigation</h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 text-white/60 hover:text-white group"
                  >
                    <span className="w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-6 text-xs font-bold tracking-widest uppercase text-gold">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <HiLocationMarker className="text-gold text-lg mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiPhone className="flex-shrink-0 text-lg text-gold" />
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="transition-colors text-white/60 hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiMail className="flex-shrink-0 text-lg text-gold" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors text-white/60 hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-white/10 md:flex-row">
          <p className="text-sm text-white/40">
            © 2026 SM Jr College, Coaching & Academy. <a
              href="https://rocketize.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
               Built by{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text">
                rocketize.
              </span>
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors text-white/40 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
