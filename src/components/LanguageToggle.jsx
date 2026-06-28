export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="lang-toggle">
      <button
        className={`lang-btn ${language === "nl" ? "active" : ""}`}
        onClick={() => setLanguage("nl")}
      >
        NL
      </button>

      <button
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}