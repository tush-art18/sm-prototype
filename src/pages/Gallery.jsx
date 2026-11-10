// src/pages/Gallery.jsx
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import { useScrollAnimation, useCountUp } from "../hooks/useScrollAnimation";
import { galleryCategories, galleryStats, galleryItems } from "../data/data";
import {
  HiSearch,
  HiX,
  HiChevronLeft,
  HiChevronRight,
  HiArrowsExpand,
  HiCalendar,
  HiTag,
  HiPhotograph,
  HiPlay,
  HiArrowRight,
} from "react-icons/hi";

function GalleryStat({ value, label, index }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const isNumeric = !isNaN(parseFloat(value));
  const displayed = useCountUp(isNumeric ? value : "0", 1800, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-2 text-3xl font-black text-gold font-heading sm:text-4xl md:text-5xl">
        {isNumeric ? (isVisible ? displayed : "0") : value}
      </div>
      <p className="text-xs font-bold sm:text-sm text-white/70">{label}</p>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filtered gallery items based on category & search query
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      let matchesCategory = true;
      if (selectedCategory === "Videos") {
        matchesCategory = item.type === "video";
      } else if (selectedCategory !== "All") {
        matchesCategory = item.category === selectedCategory;
      }

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.tag && item.tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Open lightbox at specific item index
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNextPhoto = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrevPhoto = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextPhoto();
      if (e.key === "ArrowLeft") showPrevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showNextPhoto, showPrevPhoto]);

  const activePhoto =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <main className="pt-20">
      <SEO
        title="Campus Gallery & Life"
        description="Explore real photos and videos of campus facilities, classrooms, labs, celebrations, and annual fests at SM Junior College and Academy, Hyderabad."
        keywords="SM Academy gallery, SM Junior College photos, campus events, NEET coaching Hyderabad activities, college fests, science lab photos Hyderabad"
        canonical="/gallery"
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <header className="relative py-24 overflow-hidden text-white bg-primary">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Ambient golden orb */}
        <div className="absolute right-0 rounded-full pointer-events-none -top-20 w-96 h-96 bg-gold/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 rounded-full pointer-events-none w-80 h-80 bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-12 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold/20 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest"
          >
            Campus Life & Memories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 font-heading font-black text-3xl sm:text-5xl md:text-6xl max-w-4xl leading-tight"
          >
            Real Moments, Excellence & Campus Vibrancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-white/70"
          >
            A first-hand look at SM Junior College & Academy — featuring our modern classrooms,
            high-tech science laboratories, campus celebrations, lively cultural fests, and dedicated
            academic sessions.
          </motion.p>
        </div>
      </header>

      {/* ─── STATS HIGHLIGHT BAR ──────────────────────────── */}
      <section className="py-12 bg-primary-container border-y border-white/10">
        <div className="grid grid-cols-2 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-4">
          {galleryStats.map((stat, i) => (
            <GalleryStat key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </section>

      {/* ─── CONTROLS: CATEGORIES & SEARCH ───────────────── */}
      <section className="px-6 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-8 border-b border-outline-variant/30">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              let count = 0;
              if (cat === "All") {
                count = galleryItems.length;
              } else if (cat === "Videos") {
                count = galleryItems.filter((item) => item.type === "video").length;
              } else {
                count = galleryItems.filter((item) => item.category === cat).length;
              }

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                      : "bg-surface-container text-on-surface-variant hover:bg-gold hover:text-primary"
                  }`}
                >
                  {cat === "Videos" && <HiPlay className="text-sm" />}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-gold text-primary"
                        : "bg-white/80 text-on-surface-variant"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <HiSearch className="absolute text-lg -translate-y-1/2 left-4 top-1/2 text-on-surface-variant/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search classrooms, labs, fest..."
              className="w-full py-2.5 pl-11 pr-10 text-sm bg-white border rounded-full border-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-on-surface shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute p-1 -translate-y-1/2 rounded-full right-3 top-1/2 text-on-surface-variant hover:text-primary hover:bg-surface-container"
                aria-label="Clear search"
              >
                <HiX className="text-base" />
              </button>
            )}
          </div>
        </div>

        {/* Counter & Active filter feedback */}
        <div className="flex items-center justify-between mt-6 mb-8 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
          <span>
            Showing <strong className="text-primary">{filteredItems.length}</strong> item
            {filteredItems.length === 1 ? "" : "s"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-primary hover:underline font-bold normal-case text-xs"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* ─── GALLERY GRID ─────────────────────────────────── */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fade-up"
                delay={index * 40}
                className="h-full"
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative flex flex-col h-full bg-white border border-outline-variant/60 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                  {/* Media Container: Video vs Image */}
                  {item.type === "video" ? (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                      <video
                        src={item.image}
                        preload="metadata"
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-black/30 opacity-70 group-hover:opacity-85 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-white/95 text-primary shadow-sm backdrop-blur-md">
                          {item.category}
                        </span>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-red-600 text-white shadow-md flex items-center gap-1">
                          <HiPlay className="text-xs" />
                          VIDEO
                        </span>
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-gold text-primary flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-300">
                          <HiPlay className="text-2xl ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-black/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-white/95 text-primary shadow-sm backdrop-blur-md">
                          {item.category}
                        </span>
                        {item.tag && (
                          <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-gold/95 text-primary shadow-sm flex items-center gap-1 backdrop-blur-md">
                            <HiTag className="text-xs" />
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Hover Expand Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="p-3.5 rounded-full bg-gold text-primary shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                          <HiArrowsExpand className="text-base" />
                          <span>View Photo</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold tracking-wider text-secondary">
                      <HiCalendar className="text-gold" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold font-heading text-primary group-hover:text-primary/80 transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-on-surface-variant line-clamp-2 mt-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-outline-variant">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 text-primary">
              <HiPhotograph className="text-3xl text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold font-heading text-primary">
              No Items Found
            </h3>
            <p className="max-w-md mx-auto mb-6 text-sm text-on-surface-variant">
              We couldn&apos;t find any photos or videos matching your current search or category
              filter. Try adjusting your keywords or reset all filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 text-sm font-bold rounded-full bg-primary text-white hover:bg-gold hover:text-primary transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ─── INTERACTIVE LIGHTBOX MODAL ────────────────────── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between w-full max-w-6xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-bold tracking-wider rounded-full bg-gold text-primary">
                  {activePhoto.category}
                </span>
                {activePhoto.type === "video" && (
                  <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-red-600 text-white flex items-center gap-1">
                    <HiPlay className="text-xs" />
                    Video Clip
                  </span>
                )}
                <span className="text-xs font-semibold text-white/60">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close photo view"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Center: Image / Video & Navigation */}
            <div
              className="relative flex items-center justify-center flex-1 my-2 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={showPrevPhoto}
                  className="absolute left-2 sm:-left-4 z-20 p-3 text-white transition-all rounded-full bg-white/10 hover:bg-gold hover:text-primary backdrop-blur-md hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="Previous photo"
                >
                  <HiChevronLeft className="text-2xl" />
                </button>
              )}

              {/* Main Media: Video or Image */}
              {activePhoto.type === "video" ? (
                <motion.div
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[65vh] sm:max-h-[70vh] w-full max-w-4xl flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black"
                >
                  <video
                    src={activePhoto.image}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full rounded-2xl"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[65vh] sm:max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
                  />
                </motion.div>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={showNextPhoto}
                  className="absolute right-2 sm:-right-4 z-20 p-3 text-white transition-all rounded-full bg-white/10 hover:bg-gold hover:text-primary backdrop-blur-md hover:scale-110 shadow-lg cursor-pointer"
                  aria-label="Next photo"
                >
                  <HiChevronRight className="text-2xl" />
                </button>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="w-full max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-base sm:text-lg font-bold font-heading text-gold">
                  {activePhoto.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <HiCalendar className="text-gold" />
                  <span>{activePhoto.date}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CALL TO ACTION SECTION ───────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="px-6 mx-auto max-w-5xl">
          <div className="relative p-8 md:p-14 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container text-white shadow-2xl">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest rounded-full bg-gold/20 text-gold border border-gold/30">
                Join SM Academy
              </span>
              <h2 className="mb-4 text-2xl font-black font-heading sm:text-3xl md:text-4xl">
                Experience Our Campus Life Firsthand
              </h2>
              <p className="mb-8 text-sm sm:text-base leading-relaxed text-white/70">
                Admissions are now open for Intermediate 2026 batches in BiPC (Medical), MPC
                (Engineering), and CEC. Visit our Light House campus in Hyderabad or connect with
                our academic counselors.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/917093830167?text=Hi!%20I'd%20like%20to%20schedule%20a%20campus%20visit%20at%20SM%20Academy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wide rounded-full bg-gold text-primary hover:scale-105 transition-all shadow-xl shadow-gold/20 text-center"
                >
                  Schedule Campus Visit
                </a>
                <Link
                  to="/admissions"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wide rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <span>Admission Details</span>
                  <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
