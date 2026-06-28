import LanguageToggle from "./LanguageToggle";

export default function Navbar({ language, setLanguage, t }) {
  return (
    <nav className="pf-nav">
      {/* Logo */}
      <span className="pf-logo">Julia Brouwer.</span>

      <div className="pf-nav-right">
        {/* Nav links */}
        <div className="pf-nav-links">
          <span>{t.nav.work}</span>
          <span>{t.nav.about}</span>
          <span>{t.nav.contact}</span>
        </div>

        {/* Language toggle */}
        <LanguageToggle
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </nav>
  );
}