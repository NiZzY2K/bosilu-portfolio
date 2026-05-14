import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_55px_rgba(0,229,255,0.12)]"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

      <div className="relative z-10">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(0,229,255,0.12)] transition group-hover:-translate-y-1 group-hover:bg-cyan-300 group-hover:text-[#030507]">
          <Icon size={25} />
        </div>

        <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">
          {service.title}
        </h3>

        <p className="mt-4 min-h-[112px] leading-7 text-white/60">
          {service.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
        >
          Start a Project
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

export default ServiceCard;