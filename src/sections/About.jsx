import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, CalendarDays, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const stats = [
  {
    id: 1,
    value: "5+",
    label: "Years Design Experience",
    icon: Award,
  },
  {
    id: 2,
    value: "50+",
    label: "Creative Projects",
    icon: Briefcase,
  },
  {
    id: 3,
    value: "10+",
    label: "Events Supported",
    icon: CalendarDays,
  },
  {
    id: 4,
    value: "Multiple",
    label: "Organizations Worked With",
    icon: Users,
  },
];

function About() {
    const heroImg = "/images/hero.png";
    
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#030507] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="mx-auto max-w-[460px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_80px_rgba(0,229,255,0.12)] backdrop-blur-xl">
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#030507] sm:h-[560px] lg:h-[600px]">
              <img
                src={heroImg}
                alt="Bosilu Nisalitha"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/95 via-[#030507]/20 to-transparent" />

              <div className="absolute bottom-8 left-6 right-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                  About
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                  Creative + Tech
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-white/60">
                  Blending design, branding, digital media, and web experiences
                  to create meaningful visual communication.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#07111F]/90 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-cyan-200">
                Based in Sri Lanka
              </p>
              <p className="mt-1 text-sm text-white/55">
                Data Science Undergraduate at Sri Lanka Technology Campus
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <SectionTitle
            align="left"
            label="About Me"
            title="I create visuals that communicate, connect, and create impact."
            description="I’m Bosilu Nisalitha, a Data Science undergraduate at Sri Lanka Technology Campus with a strong background in graphic design, digital media, branding, event publicity, and web-based creative solutions."
          />

          <div className="mt-7 space-y-5 leading-8 text-white/62">
            <p>
              My work brings together creativity and strategy to help
              organizations, student bodies, brands, and technology communities
              present their ideas with clarity and impact.
            </p>

            <p>
              From social media campaigns and event identities to web
              experiences and digital content, I focus on creating work that is
              visually strong, purposeful, and memorable.
            </p>

            <p>
              Over the years, I have contributed to university-level and
              national-level projects through design, public visibility, event
              moderation, campaign planning, and creative direction.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon size={20} />
                  </div>

                  <p className="text-3xl font-black tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <a
            href="#credentials"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-[#030507]"
          >
            View My Credentials
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;