import { useState } from "react";
import { translations } from "./data/translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("nl");

  const t = translations[language];

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <Hero t={t} />

      <Projects t={t} />

      <About t={t} />

      <Footer t={t} />
    </>
  );
}

export default App;