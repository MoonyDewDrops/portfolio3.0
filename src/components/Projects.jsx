import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }) {
  return (
    <section className="pf-section" id="projects">
      <p className="pf-section-label">
        {t.projects.label}
      </p>

      <div className="pf-projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.key}
            project={project}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}