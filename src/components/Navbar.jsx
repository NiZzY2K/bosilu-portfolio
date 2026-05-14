import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Credentials", href: "#credentials" },
  { name: "Experience", href: "#experience" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030507]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.18)]">
            BN
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-white">
              Bosilu Nisalitha
            </p>
            <p className="text-xs text-white/50">Creative Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-[#030507] lg:inline-flex"
        >
          Start a Project
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-300 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#030507]/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-cyan-300/35 hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-[#030507] transition hover:bg-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;