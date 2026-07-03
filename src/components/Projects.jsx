// Projects section — renders all project cards and manages the image lightbox
import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }) {
    //tracks which project image is open
    const [lightbox, setLightbox] = useState({
        open: false,
        src: "",
        alt: "",
    });

    const openLightbox = (src, alt) => {
        setLightbox({
            open: true,
            src,
            alt: alt || "",
        });
    };

    const closeLightbox = () => {
        setLightbox({
            open: false,
            src: "",
            alt: "",
        });
    };

    //this is so the cursor is still visible when image is open
    useEffect(() => {
        document.body.classList.toggle("lightbox-open", lightbox.open);
        return () => document.body.classList.remove("lightbox-open");
    }, [lightbox.open]);

    useEffect(() => {
        if (!lightbox.open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [lightbox.open]);

    return (
        <section className="pf-section" id="projects">
            <p className="pf-section-label">{t.projects.label}</p>

            <div className="pf-projects">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.key}
                        project={project}
                        t={t}
                        reverse={index % 2 === 1}
                        onImageClick={openLightbox}
                    />
                ))}
            </div>

            {lightbox.open && (
                <div
                    id="lightbox-overlay"
                    className="lightbox-overlay is-visible"
                    onClick={closeLightbox}
                >
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                    >
                        ×
                    </button>

                    <img
                        className="lightbox-image"
                        src={lightbox.src}
                        alt={lightbox.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}