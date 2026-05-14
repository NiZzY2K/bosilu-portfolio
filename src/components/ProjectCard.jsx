import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(0,229,255,0.13)]"
    >
      <div className="relative mb-6 h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111F]">
    <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/85 via-[#030507]/20 to-transparent" />

    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-0 transition duration-700 group-hover:translate-x-full group-hover:opacity-100" />

    <div className="absolute left-5 top-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
        {project.year}
    </div>

    <div className="absolute bottom-5 left-5 right-5">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
        Featured Project
        </p>
    </div>
    </div>

      <div className="px-1 pb-2">
        <p className="mb-3 text-sm font-medium text-cyan-300">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-white/45">{project.role}</p>

        <p className="mt-4 leading-7 text-white/60">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
        >
          View Case Study
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;