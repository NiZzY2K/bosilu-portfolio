import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target;
      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed z-[9999] hidden rounded-full bg-cyan-300"
        style={{
          left: smoothX,
          top: smoothY,
          width: isHovering ? 16 : 10,
          height: isHovering ? 16 : 10,
          opacity: isVisible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          boxShadow: isHovering
            ? "0 0 12px rgba(0,229,255,1), 0 0 35px rgba(0,229,255,0.85), 0 0 70px rgba(0,229,255,0.45)"
            : "0 0 10px rgba(0,229,255,1), 0 0 25px rgba(0,229,255,0.75), 0 0 55px rgba(0,229,255,0.35)",
        }}
        transition={{
          width: { duration: 0.16 },
          height: { duration: 0.16 },
          opacity: { duration: 0.12 },
        }}
      />

      <motion.div
        className="custom-cursor pointer-events-none fixed z-[9998] hidden rounded-full border border-cyan-300/40"
        style={{
          left: smoothX,
          top: smoothY,
          width: isHovering ? 54 : 34,
          height: isHovering ? 54 : 34,
          opacity: isVisible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          backgroundColor: isHovering
            ? "rgba(0,229,255,0.08)"
            : "rgba(0,229,255,0.025)",
          boxShadow: isHovering
            ? "0 0 45px rgba(0,229,255,0.35)"
            : "0 0 25px rgba(0,229,255,0.18)",
        }}
        transition={{
          width: { duration: 0.18 },
          height: { duration: 0.18 },
          opacity: { duration: 0.12 },
        }}
      />
    </>
  );
}

export default CustomCursor;