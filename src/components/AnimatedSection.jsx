// src/components/AnimatedSection.jsx
// Wrapper that fades/slides in on scroll
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up", // "fade-up" | "fade-left" | "fade-right" | "fade-in"
  delay = 0,
  threshold = 0.1,
}) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getTransform = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up": return "translateY(50px)";
        case "fade-left": return "translateX(-50px)";
        case "fade-right": return "translateX(50px)";
        default: return "none";
      }
    }
    return "none";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
