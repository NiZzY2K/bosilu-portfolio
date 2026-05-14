import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050A12] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(0,229,255,0.12),transparent_30%),radial-gradient(circle_at_75%_85%,rgba(0,102,255,0.14),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionTitle
            align="left"
            label="Services"
            title="What I Do"
            description="I help brands, organizations, student communities, and events build a stronger digital presence through purposeful design, strategic content, and creative digital experiences."
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Creative Direction
            </p>
            <p className="mt-4 text-lg leading-8 text-white/65">
              My services combine design, branding, social media, event
              visibility, and web development to create complete digital
              experiences instead of isolated visuals.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;