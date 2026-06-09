import { CodeXmlIcon, Menu, MoreHorizontal } from "lucide-react";
import logo from '../assets/logo.png';
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const labels = copy[language].nav;

  return (
    <div className="navbar relative px-0 py-4">
      <div className="flex items-center shrink-0">
        <a href="#" className="flex items-center font-bold text-2xl md:text-xl text-slate-900 dark:text-white">
          <CodeXmlIcon className="mr-2" /> FF<span className="text-warning">LAUR</span>DEV
        </a>
      </div>

      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#FF6B35]">
          <Menu className="w-6 h-6 text-white" />
        </label>
        <ul tabIndex={0} className="dropdown-content menu rounded-box w-72 bg-slate-950 p-2 shadow-xl text-white">
          <li><a href="#Home" className="text-sm text-white hover:text-warning">{labels.home}</a></li>
          <li><a href="#Services" className="text-sm text-white hover:text-warning">{labels.services}</a></li>
          <li><a href="#About" className="text-sm text-white hover:text-warning">{labels.about}</a></li>
          <li><a href="#Clients" className="text-sm text-white hover:text-warning">{labels.clients}</a></li>
          <li><a href="#Contact" className="text-sm text-white hover:text-warning">{labels.contact}</a></li>
          <li><a href="#Process" className="text-sm text-white hover:text-warning">{labels.process}</a></li>
          <li><a href="#CaseStudies" className="text-sm text-white hover:text-warning">{labels.caseStudies}</a></li>
          <li><a href="#Pricing" className="text-sm text-white hover:text-warning">{labels.pricing}</a></li>
          <li><a href="#Testimonials" className="text-sm text-white hover:text-warning">{labels.testimonials}</a></li>
          <li><a href="#Experiences" className="text-sm text-white hover:text-warning">{labels.experiences}</a></li>
          <li><a href="#Projects" className="text-sm text-white hover:text-warning">{labels.projects}</a></li>
          <li><a href="#FAQ" className="text-sm text-white hover:text-warning">{labels.faq}</a></li>
          <li>
           
          </li>
        </ul>
      </div>

      <div className="ml-30 md:hidden">
         <button
              className="btn btn-xs btn-outline w-full text-warning"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
            >
              {labels.language}
            </button>
      </div>

      <div className="md:hidden">
         <img src={logo} alt="Logo FFLAUR" className="w-14 h-14 rounded-full border-1 border-warning ml-3 bg-gradient-to-br from-[#FF6B35] via-[#1A1A2E] to-[#FF6B35]" />
      </div>

      <div className="hidden md:flex items-center gap-4 mx-auto justify-center max-w-[65%]">
        <a href="#Home" className="text-sm text-white hover:text-warning">{labels.home}</a>
        <a href="#Services" className="text-sm text-white hover:text-warning">{labels.services}</a>
        <a href="#About" className="text-sm text-white hover:text-warning">{labels.about}</a>
        <a href="#Clients" className="text-sm text-white hover:text-warning">{labels.clients}</a>
        <a href="#Pricing" className="text-sm text-white hover:text-warning">{labels.pricing}</a>
        <a href="#Contact" className="text-sm text-white hover:text-warning">{labels.contact}</a>

        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn text-sm text-white hover:text-warning btn-ghost gap-2">
            {language === 'fr' ? 'Plus' : 'More'} <MoreHorizontal />
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box w-56 bg-slate-950 p-2 shadow-xl text-white">
            <li><a href="#Process" className="text-sm text-white hover:text-warning">{labels.process}</a></li>
            <li><a href="#CaseStudies" className="text-sm text-white hover:text-warning">{labels.caseStudies}</a></li>
            <li><a href="#Testimonials" className="text-sm text-white hover:text-warning">{labels.testimonials}</a></li>
            <li><a href="#Experiences" className="text-sm text-white hover:text-warning">{labels.experiences}</a></li>
            <li><a href="#Projects" className="text-sm text-white hover:text-warning">{labels.projects}</a></li>
            <li><a href="#FAQ" className="text-sm text-white hover:text-warning">{labels.faq}</a></li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 ml-10 shrink-0">
        <button
          className="btn btn-xs btn-outline text-warning"
          onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
        >
          {labels.language}
        </button>
        <img src={logo} alt="Logo FFLAUR" className="w-16 h-16 rounded-full border-1 border-warning mr-2 bg-gradient-to-br from-[#FF6B35] via-[#1A1A2E] to-[#FF6B35]" />
      </div>
    </div>
  );
};

export default Navbar;

