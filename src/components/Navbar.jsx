import LanguageToggle from "./LanguageToggle";

export default function Navbar({ language, setLanguage, t }) {
    return (
        <nav className="pf-nav">
            <span className="pf-logo">Julia Brouwer.</span>

            <div className="pf-nav-right">
                <div className="pf-nav-links">
                    <a href="#projects">{t.nav.work}</a>
                    <a href="#about">{t.nav.about}</a>
                    <a href="#contact">{t.nav.contact}</a>
                </div>

                <LanguageToggle
                    language={language}
                    setLanguage={setLanguage}
                />
            </div>
        </nav>
    );
}