import profilePhoto from "../assets/images/profile.png";

export default function About({ t }) {
    return (
        
        <section className="pf-section" id="about">
            <p className="pf-section-label">
                {t.about.label}
            </p>

            <div className="pf-about">
                <div>
                    <h2>{t.about.title}</h2>

                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>

                    <div className="pf-skills">
                        {[
                            "PHP",
                            "Python",
                            "JavaScript",
                            "MySQL",
                            "React",
                            "Next.js",
                            "Figma",
                            "Socket.IO",
                        ].map((skill) => (
                            <span key={skill} className="pf-skill">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="pf-cv-button">
                        <a href={t.about.cvLink} target="_blank" rel="noreferrer" className="pf-btn pf-btn-fill"> {t.about.cvButton} </a>
                    </div>
                </div>

                <div className="pf-portrait">
                    <img src={profilePhoto} alt="Julia Brouwer" />
                </div>
            </div>
        </section>
    );
}