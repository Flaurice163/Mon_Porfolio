import { useState, useRef } from "react";
import About from "./components/About.tsx";
import Achievements from "./components/Achievements.tsx";
import CaseStudies from "./components/CaseStudies.tsx";
import Certifications from "./components/Certifications.tsx";
import Clients from "./components/Clients.tsx";
import Contact from "./components/Contact.tsx";
import CTA from "./components/CTA.tsx";
import Experiences from "./components/Experiences.tsx";
import FAQ from "./components/FAQ.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Pricing from "./components/Pricing.tsx";
import Process from "./components/Process.tsx";
import Projects from "./components/Projects.tsx";
import Services from "./components/Services.tsx";
import Skills from "./components/Skills.tsx";
import TechStack from "./components/TechStack.tsx";
import Testimonials from "./components/Testimonials.tsx";
import type { Language } from "./i18n";

function App() {
  const [language, setLanguage] = useState<Language>("fr");
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="p-5 md:px-[15%]">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <Home language={language} />
      </div>
      <div className="p-5 md:px-[15%] space-y-16">
        <About language={language} />
        <Services language={language} />
        <Skills language={language} />
        <Experiences language={language} />
        <Process language={language} />
        <CaseStudies language={language} />
        <Achievements language={language} />
        <Pricing language={language} />
        <Testimonials language={language} />
        <Certifications language={language} />
        <Clients language={language} />
        <TechStack language={language} />
        <Projects language={language} />
        <FAQ language={language} />
        <CTA language={language} onContactClick={scrollToContact} />
        <div ref={contactRef}>
          <Contact language={language} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
