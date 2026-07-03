export default function Contact({ t }) {
    return (
        <section className="pf-section pf-contact" id="contact">
            <p className="pf-section-label">{t.contact.label}</p>
            <p className="pf-contact-intro">{t.contact.intro}</p>

            <div className="pf-contact-links">
                <a
                    href="https://github.com/MoonyDewDrops"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.footer.github}
                </a>
                <a
                    href="https://www.linkedin.com/in/julia-brouwer-2b787a319/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.footer.linkedin}
                </a>
                <a href="mailto:230062@student.glu.nl">{t.footer.email}</a>
            </div>
        </section>
    );
}