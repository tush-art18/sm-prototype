// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { navLinks } from "../data/data";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="px-6 pt-20 pb-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold group-hover:scale-110 transition-transform">
                <span className="text-lg font-black text-primary leading-none">SM</span>
              </div>
              <span className="text-2xl font-black font-heading">Academy</span>
            </Link>
            <p className="leading-relaxed text-white/60 text-sm">
              Pioneering excellence in education through innovative learning models and global standard infrastructure.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaYoutube, label: "YouTube" },
                { icon: FaWhatsapp, label: "WhatsApp" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300"
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
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-6 text-xs font-bold tracking-widest uppercase text-gold">Quick Links</h5>
            <ul className="space-y-3">
              {["Fee Structure", "Scholarships", "Apply Portal", "FAQ", "Campus Tour", "Results"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
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
                <span>Light House, Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiPhone className="text-gold text-lg flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9177890581" className="text-white/60 hover:text-white transition-colors">91778 90581</a>
                  <a href="tel:7093830167" className="text-white/60 hover:text-white transition-colors">70938 30167</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiMail className="text-gold text-lg flex-shrink-0" />
                <a
                  href="mailto:admissions@smacademy.edu.in"
                  className="text-white/60 hover:text-white transition-colors break-all"
                >
                  admissions@smacademy.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2024 SM Junior College & Academy. Built for Excellence.
          </p>
          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-white transition-colors"
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
