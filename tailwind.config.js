/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00113a",
        "primary-container": "#002366",
        "secondary-container": "#fcd400",
        "on-secondary-container": "#6e5c00",
        "on-primary": "#ffffff",
        "on-primary-container": "#758dd5",
        surface: "#f8f9fa",
        "surface-container": "#edeeef",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "on-surface": "#191c1d",
        "on-surface-variant": "#444650",
        "outline": "#757682",
        "outline-variant": "#c5c6d2",
        secondary: "#705d00",
        gold: "#fcd400",
      },
      fontFamily: {
        heading: ["'Public Sans'", "sans-serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, #00113a 0%, #002366 50%, #001a50 100%)",
      },
    },
  },
  plugins: [],
}
