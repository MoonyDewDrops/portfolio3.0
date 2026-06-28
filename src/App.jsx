export default function About({ t }) {
  return (
    <section className="pf-section" id="about">
      {/* LABEL */}
      <p className="pf-section-label">
        console.log(data);
        {t.about.label}
      </p>

      <div className="pf-about">
        {/* LEFT SIDE */}
        <div>
          <h2>{t.about.title}</h2>

          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          {/* SKILLS */}
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
        </div>

        {/* RIGHT SIDE (portrait placeholder) */}
        <div className="pf-portrait">
          <span>jb.</span>
        </div>
      </div>
    </section>
  );
}