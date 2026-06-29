export default function Footer({ t }) {
    return (
        <footer className="pf-footer" id="contact">
            <p>{t.footer.copyright}</p>

            <div className="pf-footer-links">
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
        </footer>
    );
}
