import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden opacity-35 mix-blend-screen">
      <motion.div
        animate={{
          x: [0, 90, -40, 0],
          y: [0, 70, 120, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -110, 40, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 70, -80, 0],
          y: [0, -90, 60, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-cyan-200/10 blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}

export default AnimatedBackground;