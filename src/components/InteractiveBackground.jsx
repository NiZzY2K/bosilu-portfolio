import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function InteractiveBackground() {
  const [position, setPosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const target = event.target;
      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${
            isHovering
              ? "rgba(0, 229, 255, 0.22)"
              : "rgba(0, 229, 255, 0.13)"
          }, transparent 45%)`,
        }}
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
      />

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, 60, 110, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-400/12 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 90, -50, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-[440px] w-[440px] rounded-full bg-blue-500/12 blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.028)_1px,transparent_1px)] bg-[size:90px_90px] opacity-60" />
    </div>
  );
}

export default InteractiveBackground;