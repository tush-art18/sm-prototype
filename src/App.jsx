// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Admissions from "./pages/Admissions";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}


// Page transition wrapper
function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    setTransitionStage("fadeOut");
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      style={{
        opacity: transitionStage === "fadeIn" ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {displayChildren}
    </div>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}

const MIN_DISPLAY_MS = 1500; // always show at least this long

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [readyToExit, setReadyToExit] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();

    // Milestone helper — only moves forward
    let current = 0;
    const advance = (to) => {
      if (to > current) {
        current = to;
        setLoadProgress(to);
      }
    };

    // ── Milestone 1: React has mounted (JS parsed & first render done)
    advance(30);

    // ── Milestone 2: fonts + stylesheets ready (document.fonts)
    document.fonts.ready.then(() => advance(60));

    // ── Milestone 3: all resources loaded (images, scripts, iframes)
    const onLoad = () => {
      advance(100);
      // Wait for remainder of minimum display time before hiding
      const elapsed = Date.now() - startedAt;
      const wait    = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => setReadyToExit(true), wait); 
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen
          externalProgress={loadProgress}
          readyToExit={readyToExit}
          onFinish={() => setLoading(false)}
        />
      )}
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}
