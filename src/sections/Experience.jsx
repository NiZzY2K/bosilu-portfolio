import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#030507] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-24 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          label="Journey"
          title="Experience & Involvement"
          description="A timeline of creative, leadership, media, and technology-related roles that shaped my work across university communities, digital agencies, brands, and national-level projects."
        />

        <div className="mt-18 space-y-8 lg:mt-20 lg:space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;