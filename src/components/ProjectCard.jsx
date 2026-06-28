export default function ProjectCard({ project, t, reverse }) {
    return (
        <div
            className={`pf-card pf-project-card ${project.featured ? "pf-featured" : ""
                } ${reverse ? "reverse" : ""}`}
        >
            {/* TEXT */}
            <div className="pf-project-text">
                <p className="pf-card-tag">
                    {project.tech.join(" · ")}
                </p>

                <h3>{project.title}</h3>

                <p>{t.projectsData?.[project.key] || project.description}</p>

                <div className="pf-tech-pills">
                    {project.tech.map((tech) => (
                        <span key={tech} className="pf-pill">
                            {tech}
                        </span>
                    ))}
                </div>

                <a href={project.demo} target="_blank" rel="noreferrer">
                    {t.projects.view}
                </a>
            </div>

            {/* IMAGE */}
            <div className="pf-featured-img">
                <img src={project.image} alt={project.title} />
            </div>
        </div>
    );
}