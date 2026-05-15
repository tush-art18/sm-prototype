// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  // On non-home pages, treat as always "scrolled" (solid white) unless at very top of home
  const solidBg = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    // Initialize on mount (handles page refresh mid-scroll)
    setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          solidBg
            ? "bg-white shadow-md shadow-primary/5 border-b border-outline/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative">
              <img src="/sm-logo.png" alt="SM Academy Logo" className="object-cover w-10 h-10 p-1 transition-transform duration-300 bg-white border rounded-full shadow-md sm:h-12 sm:w-12 md:h-14 md:w-14 group-hover:scale-105 border-primary/5" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base sm:text-xl md:text-2xl font-black font-heading tracking-tight leading-none transition-colors duration-300 ${
                  solidBg ? "text-primary" : "text-white"
                }`}
              >
                SM Junior College <br />
                <span className="text-[10px] sm:text-sm md:text-base font-bold tracking-widest opacity-80 uppercase">Coaching and Academy</span>
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="items-center hidden gap-10 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 relative group ${
                    solidBg
                      ? isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant hover:text-primary"
                      : isActive
                        ? "text-gold font-bold"
                        : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-4">

            <a
              href={`https://wa.me/919177890581?text=Hi!%20I'm%20interested%20in%20applying%20for%20the%202026%20academic%20year%20at%20SM%20Academy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-6 py-2.5 text-sm font-bold tracking-wide text-primary transition-all duration-300 rounded-full bg-gold hover:scale-105 hover:shadow-xl hover:shadow-gold/30 active:scale-95"
            >
              Apply Now
            </a>

            {/* Mobile hamburger */}
            <button
              className="p-2 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiX className={`text-2xl ${solidBg ? "text-primary" : "text-white"}`} />
              ) : (
                <HiMenuAlt3 className={`text-2xl ${solidBg ? "text-primary" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* ── Active page indicator bar (non-home only) ── */}
        {solidBg && (
          <div className="hidden lg:flex h-[3px] w-full">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className="flex-1">
                {({ isActive }) =>
                  isActive ? (
                    <div className="h-full transition-all duration-500 bg-gold" />
                  ) : (
                    <div className="h-full" />
                  )
                }
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* ── Mobile Full-Screen Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/30 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Full Screen Menu Container */}
        <div
          className={`absolute inset-0 w-full h-full bg-white transition-transform duration-700 ease-[0.22,1,0.36,1] flex flex-col ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full p-6 sm:p-8">
            {/* Header */}
            <div className="relative flex items-center justify-between mb-12">
              <Link
                to="/"
                className="flex flex-col items-center gap-2 mx-auto"
                onClick={() => setMenuOpen(false)}
              >
                <img src="/sm-logo.png" alt="SM Academy Logo" className="h-16 w-16 object-cover rounded-full bg-primary p-1.5 shadow-xl border-2 border-gold" />
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black tracking-tight text-primary font-heading">SM Junior College</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">and Academy</span>
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 p-3 transition-colors rounded-full text-primary bg-surface-container-low hover:bg-surface-container"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Links with staggered animation */}
            <nav className="flex flex-col gap-4 pb-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    transitionDelay: menuOpen ? `${100 + i * 100}ms` : "0ms",
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-6 py-5 rounded-2xl font-heading text-xl md:text-2xl transition-all duration-500 transform ${
                      menuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
                    } ${
                      isActive
                        ? "bg-primary text-white font-bold shadow-xl shadow-primary/20"
                        : "bg-surface-container-low text-primary hover:bg-gold hover:shadow-lg font-medium"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="pt-6 mt-auto border-t border-outline/10">
              <p className="mb-4 text-sm font-medium text-center text-on-surface-variant">
                Admissions open for 2026 Academic Year
              </p>
              <a
                href={`https://wa.me/919177890581?text=Hi!%20I'm%20interested%20in%20applying%20for%20the%202026%20academic%20year%20at%20SM%20Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? "600ms" : "0ms" }}
                className={`block w-full py-5 text-lg font-black text-center text-primary rounded-2xl bg-gold hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-gold/30 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
