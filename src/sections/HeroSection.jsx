import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const heroImg = "/images/hero.png";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030507] px-6 pt-28 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(0,102,255,0.18),transparent_30%),linear-gradient(135deg,#030507_0%,#07111F_55%,#030507_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
            <Sparkles size={16} />
            Design • Branding • Digital Media • Web
          </div>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            Bosilu
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Nisalitha
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-cyan-200 sm:text-2xl">
            Creative Designer & Digital Media Specialist
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            I create visual identities, social media campaigns, event branding,
            and web-based creative solutions for organizations, brands, and
            technology communities.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3 text-sm font-bold text-[#030507] transition hover:bg-white"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              Contact Me
            </a>

            <a
              href="/Bosilu-Nisalitha-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/75 transition hover:text-white"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/bosilu-pupulewela-5a58a032b"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-300/50 hover:text-cyan-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.behance.net/bosilunisalitha"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-300/50 hover:text-cyan-300"
            >
              <FaBehance />
            </a>
            <a
              href="https://github.com/NiZzY2K"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-300/50 hover:text-cyan-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-300/50 hover:text-cyan-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex h-[430px] w-full max-w-[430px] items-center justify-center lg:h-[560px] lg:max-w-[560px]"
        >
          <div className="absolute h-full w-full rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex h-[310px] w-[310px] items-center justify-center rounded-[42px] border border-cyan-300/20 bg-white/[0.04] shadow-[0_0_80px_rgba(0,229,255,0.18)] backdrop-blur-xl sm:h-[380px] sm:w-[380px]">
            <div className="absolute inset-6 rounded-[34px] border border-white/10" />
            <div className="absolute -right-5 top-12 h-24 w-24 rounded-full bg-blue-500/25 blur-2xl" />
            <div className="absolute -bottom-5 left-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

            <div className="relative h-[260px] w-[260px] overflow-hidden rounded-[36px] border border-cyan-300/20 bg-[#030507] sm:h-[320px] sm:w-[320px]">
            <img
                src={heroImg}
                alt="Bosilu Nisalitha"
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030507]/85 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                Portfolio
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                Bosilu Nisalitha
                </p>
            </div>
            </div>
          </div>

          <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl">
            <p className="text-2xl font-bold text-white">5+</p>
            <p className="text-xs text-white/50">Years Experience</p>
          </div>

          <div className="absolute bottom-16 right-0 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-white/50">Creative Projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;