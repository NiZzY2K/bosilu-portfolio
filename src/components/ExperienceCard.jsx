import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function ExperienceCard({ experience, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`relative grid gap-6 lg:grid-cols-[1fr_auto_1fr] ${
        isEven ? "" : "lg:[&>*:first-child]:col-start-3"
      }`}
    >
      <div
        className={`rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.055] hover:shadow-[0_0_55px_rgba(0,229,255,0.1)] ${
          isEven ? "lg:col-start-1" : "lg:col-start-3"
        }`}
      >
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            {experience.period}
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
            {experience.category}
          </span>
        </div>

        <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
          {experience.role}
        </h3>

        <p className="mt-2 text-sm font-semibold text-cyan-300">
          {experience.organization}
        </p>

        <p className="mt-5 leading-7 text-white/60">
          {experience.description}
        </p>

        <div className="mt-6 space-y-3">
          {experience.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-cyan-300"
              />
              <p className="text-sm leading-6 text-white/58">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:col-start-2 lg:flex lg:justify-center">
        <div className="relative flex w-10 justify-center">
          <div className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent" />
          <div className="relative mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-[#030507] shadow-[0_0_35px_rgba(0,229,255,0.25)]">
            <div className="h-3 w-3 rounded-full bg-cyan-300" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;