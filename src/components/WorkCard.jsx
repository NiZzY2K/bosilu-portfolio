import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function WorkCard({ work, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_55px_rgba(0,229,255,0.12)]"
    >
      <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111F]">
        {work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.22),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(0,102,255,0.26),transparent_36%),linear-gradient(135deg,#07111F,#030507)]">
            <div className="text-center">
              <p className="text-7xl font-black tracking-[-0.08em] text-white/10">
                {String(work.id).padStart(2, "0")}
              </p>

              <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                Selected Work
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/85 via-[#030507]/15 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
          {work.category}
        </div>

        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-white/70 backdrop-blur">
          {work.year}
        </div>
      </div>

      <div className="px-1 py-5">
        <p className="text-sm font-semibold text-cyan-300">{work.type}</p>

        <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
          {work.title}
        </h3>

        <p className="mt-4 leading-7 text-white/58">{work.description}</p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
        >
          View Details
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

export default WorkCard;