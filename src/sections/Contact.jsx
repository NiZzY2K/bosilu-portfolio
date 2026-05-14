import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const WEB3FORMS_ACCESS_KEY = "ec041869-208c-4e9a-88bc-4745b6e9ea49";

const projectTypes = [
  "Brand Identity Design",
  "Social Media Design",
  "Event Publicity / Campaign Design",
  "UI/UX or Web Design",
  "Front-End Development",
  "Social Media Management",
  "Other",
];

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormMessage("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Message from Bosilu Portfolio Website");
    formData.append("from_name", "Bosilu Portfolio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormMessage("Message sent successfully. Thank you!");
        form.reset();
      } else {
        setFormMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#030507] px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl min-w-0 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <SectionTitle
            align="left"
            label="Contact"
            title="Let’s Build Something Impactful"
            description="Have a project, event, campaign, or brand that needs a strong digital presence? Let’s connect and create something meaningful together."
          />

          <div className="mt-10 space-y-5">
            <a
              href="mailto:contact.bosilupupulewela@gmail.com"
              className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-white/[0.055]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#030507]">
                <Mail size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-white/45">Email</p>
                <p className="break-all font-semibold text-white">
                  contact.bosilupupulewela@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <MapPin size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-white/45">Location</p>
                <p className="font-semibold text-white">Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <MessageCircle size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-white/45">Availability</p>
                <p className="font-semibold text-white">
                  Open for creative projects and collaborations
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Connect
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/bosilu-pupulewela-5a58a032b"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.behance.net/bosilunisalitha"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaBehance />
              </a>

              <a
                href="https://github.com/NiZzY2K"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative min-w-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_80px_rgba(0,229,255,0.12)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Start Here
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                  Send a Message
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:flex">
                <Send size={24} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/65">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#030507]/60 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/45"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/65">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#030507]/60 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/45"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white/65">
                  Project Type
                </label>
                <select
                  name="project_type"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-white/10 bg-[#030507]/60 px-5 py-4 text-white outline-none transition focus:border-cyan-300/45"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#030507]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white/65">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="7"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#030507]/60 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/45"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-bold text-[#030507] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            {formMessage && (
              <p className="mt-5 text-sm font-medium text-cyan-200">
                {formMessage}
              </p>
            )}

            {!formMessage && (
              <p className="mt-5 text-sm leading-6 text-white/45">
                I usually respond within 24–48 hours.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;