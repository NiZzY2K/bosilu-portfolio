import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030507] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          label="Selected Work"
          title="Featured Projects"
          description="A curated collection of campaign identities, event branding, social media visuals, and web-based creative projects created for brands, organizations, and technology communities."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;