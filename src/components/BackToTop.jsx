import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      setShowButton(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          type="button"
          onClick={goToTop}
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-[9996] flex h-13 w-13 items-center justify-center rounded-full border border-cyan-300/50 bg-[#030507]/80 text-cyan-200 shadow-[0_0_35px_rgba(0,229,255,0.35)] backdrop-blur-xl transition hover:bg-cyan-300 hover:text-[#030507] sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;