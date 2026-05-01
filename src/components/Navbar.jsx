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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
              <span className="text-lg font-black text-gold leading-none">SM</span>
            </div>
            <span
              className={`text-2xl font-black font-heading tracking-tight transition-colors duration-300 ${
                solidBg ? "text-primary" : "text-white"
              }`}
            >
              Academy
            </span>
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

            <Link
              to="/admissions"
              className="px-6 py-2.5 text-sm font-bold tracking-wide text-primary transition-all duration-300 rounded-full bg-gold hover:scale-105 hover:shadow-xl hover:shadow-gold/30 active:scale-95"
            >
              Apply Now
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
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
                    <div className="h-full bg-gold transition-all duration-500" />
                  ) : (
                    <div className="h-full" />
                  )
                }
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`fixed inset-0 z-[99] lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-10">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                  <span className="text-sm font-black text-gold">SM</span>
                </div>
                <span className="text-xl font-black text-primary font-heading">Academy</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} className="p-2 text-primary hover:bg-surface rounded-lg transition-colors">
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Drawer footer CTA */}
            <div className="mt-auto space-y-3">
              <p className="text-xs text-on-surface-variant text-center">
                Admissions open for 2026
              </p>
              <Link
                to="/admissions"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-4 text-sm font-black text-center text-primary rounded-2xl bg-gold hover:brightness-105 transition-all shadow-lg shadow-gold/20"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
