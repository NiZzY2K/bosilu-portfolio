import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030507] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.18)]">
                BN
              </div>

              <div>
                <p className="text-lg font-bold tracking-[-0.03em] text-white">
                  Bosilu Nisalitha
                </p>
                <p className="text-sm text-white/45">
                  Creative Designer & Digital Media Specialist
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              Building visual identities, social media campaigns, event
              branding, and web-based creative experiences for brands,
              organizations, and technology communities.
            </p>
          </div>

          <div className="lg:text-right">
            <div className="flex flex-wrap gap-4 lg:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/50 transition hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://www.linkedin.com/in/bosilu-pupulewela-5a58a032b"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.behance.net/bosilunisalitha"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaBehance />
              </a>

              <a
                href="https://github.com/NiZzY2K"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/n1zzy.2k/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/n1zzy.2k/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/60 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bosilu Nisalitha. All rights reserved.</p>
          <p>Designed & developed with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;