export default function ProjectCard({ project, t }) {
  return (
    <div className={`pf-card ${project.featured ? "pf-featured" : ""}`}>
      {/* LEFT CONTENT */}
      <div>
        <p className="pf-card-tag">
          {project.tech.join(" · ")}
        </p>

        <h3>{project.title}</h3>

        <p>
          {t.projectsData?.[project.key] || project.description}
        </p>

        {/* tech pills */}
        <div className="pf-tech-pills">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`pf-pill ${project.featured ? "pf-pill-dark" : ""}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          className="pf-card-link"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          {t.projects.view}
        </a>
      </div>

      {/* IMAGE */}
      <div className="pf-featured-img">
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}