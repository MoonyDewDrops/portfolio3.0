export default function Footer({ t }) {
    return (
        <footer className="pf-footer">
            <p>{t.footer.copyright}</p>

            <div className="pf-footer-links">
                <span>{t.footer.github}</span>
                <span>{t.footer.linkedin}</span>
                <span>{t.footer.email}</span>
            </div>
        </footer>
    );
}
