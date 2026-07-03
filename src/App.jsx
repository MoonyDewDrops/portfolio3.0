import { useState } from "react";
import { useEffect } from "react";
import { translations } from "./data/translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  const [language, setLanguage] = useState("nl");

  // How i do the translations
  const t = translations[language];

  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <Hero t={t} />

      <hr className="pf-section-divider" />

      <Projects t={t} />

      <hr className="pf-section-divider" />

      <About t={t} />

      <hr className="pf-section-divider" />

      <Contact t={t} />

      <Footer t={t} />
    </>
  );
}

export default App;