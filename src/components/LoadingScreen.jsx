// src/components/LoadingScreen.jsx
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish, externalProgress = 0, readyToExit = false }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Trigger entrance
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Mirror real load progress
  useEffect(() => {
    setProgress((prev) => Math.max(prev, externalProgress));
  }, [externalProgress]);

  // Trigger exit when page is ready AND minimum display time has passed
  useEffect(() => {
    if (!readyToExit || exiting) return;
    const t = setTimeout(() => setExiting(true), 100);
    return () => clearTimeout(t);
  }, [readyToExit, exiting]);

  // Notify parent after exit animation completes
  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onFinish, 900);
    return () => clearTimeout(t);
  }, [exiting, onFinish]);

  return (
    <>
      <style>{`
        @keyframes ls-logo-in {
          0%   { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ls-text-in {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-bar-in {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes ls-pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes ls-exit {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "#00113a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          animation: exiting
            ? "ls-exit 0.8s ease forwards"
            : "none",
          pointerEvents: exiting ? "none" : "all",
        }}
      >
        {/* ── Logo with pulse ring ── */}
        <div
          style={{
            position: "relative",
            opacity: 0,
            animation: mounted
              ? "ls-logo-in 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards"
              : "none",
          }}
        >
          {/* Pulse ring behind logo */}
          <div
            style={{
              position: "absolute",
              inset: -16,
              borderRadius: "50%",
              border: "2px solid rgba(252,212,0,0.4)",
              animation: "ls-pulse-ring 2s ease-out infinite",
            }}
          />
          <img
            src="/sm-logo.png"
            alt="SM Academy"
            style={{
              width: 130,
              height: 130,
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 0 24px rgba(252,212,0,0.35))",
            }}
          />
        </div>

        {/* ── College name ── */}
        <div
          style={{
            textAlign: "center",
            opacity: 0,
            animation: mounted
              ? "ls-text-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards"
              : "none",
          }}
        >
          <h1
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 4.5vw, 2.4rem)",
              color: "#ffffff",
              letterSpacing: "0.04em",
              lineHeight: 1.15,
              margin: "0 0 0.35rem 0",
            }}
          >
            SM Junior College
          </h1>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.8rem, 2vw, 1rem)",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            &amp;Coaching and Academy
          </p>
        </div>

        {/* ── Progress bar ── */}
        <div
          style={{
            width: "min(280px, 70vw)",
            opacity: 0,
            animation: mounted
              ? "ls-bar-in 0.8s ease 0.9s forwards"
              : "none",
          }}
        >
          {/* Track */}
          <div
            style={{
              height: 3,
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Fill */}
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: 999,
                background: "linear-gradient(90deg, #fcd400, #ffe566)",
                transition: "width 0.7s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 0 10px rgba(252,212,0,0.5)",
              }}
            />
          </div>
          {/* Label */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.6rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {progress < 100 ? "Loading…" : "Welcome"}
            </span>
            <span
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                color: "#fcd400",
              }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
