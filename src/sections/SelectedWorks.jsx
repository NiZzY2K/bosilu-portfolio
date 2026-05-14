import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";
import { workCategories, works } from "../data/works";

function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#050A12] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,229,255,0.1),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(0,102,255,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          label="Portfolio"
          title="Selected Works"
          description="A visual collection of design, branding, social media, event publicity, UI/web, and creative media projects developed for brands, organizations, university communities, and technology-focused initiatives."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {workCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-cyan-300 bg-cyan-300 text-[#030507]"
                    : "border-white/10 bg-white/[0.035] text-white/58 hover:border-cyan-300/35 hover:text-cyan-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <WorkCard key={work.id} work={work} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default SelectedWorks;