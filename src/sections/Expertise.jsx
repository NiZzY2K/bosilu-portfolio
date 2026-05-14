import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import {
  certificationIcon,
  certifications,
  skillGroups,
} from "../data/credentials";

function Expertise() {
  const CertificationIcon = certificationIcon;

  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-[#050A12] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.1),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(0,102,255,0.13),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          label="Capabilities"
          title="Expertise & Credentials"
          description="A focused overview of the creative tools, technical skills, professional abilities, and certifications that support my work across design, digital media, branding, and web experiences."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.055] hover:shadow-[0_0_55px_rgba(0,229,255,0.1)]"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#030507]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold tracking-[-0.03em] text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/60 transition hover:border-cyan-300/30 hover:text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <Award size={26} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Certifications
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
              Certifications & Learning
            </h3>

            <p className="mt-5 leading-8 text-white/60">
              This section will highlight completed certifications and learning
              achievements related to design, digital marketing, web
              development, data science, AI, and professional growth.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {certifications.length > 0 ? (
              certifications.map((certificate, index) => (
                <motion.article
                  key={certificate.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-cyan-300/35"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <CertificationIcon size={20} />
                      </div>

                      <h4 className="text-xl font-bold text-white">
                        {certificate.title}
                      </h4>

                      <p className="mt-2 text-sm text-white/55">
                        Issued by: {certificate.issuer}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          {certificate.year}
                        </span>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                          {certificate.category}
                        </span>
                      </div>
                    </div>

                    {certificate.link && (
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/65 transition hover:border-cyan-300/35 hover:text-cyan-200"
                      >
                        View
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-dashed border-cyan-300/25 bg-cyan-300/[0.035] p-8 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <CertificationIcon size={24} />
                </div>

                <h4 className="text-2xl font-bold tracking-[-0.03em] text-white">
                  Certifications Coming Soon
                </h4>

                <p className="mx-auto mt-4 max-w-xl leading-8 text-white/58">
                  Real certificates can be added here with the certificate
                  title, issuing organization, completion year, category, and
                  credential link.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;