import { Cuboid, Menu, MoreHorizontal } from "lucide-react";
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
          <Cuboid className="mr-2" /> FF<span className="text-warning">LAUR</span>
        </a>
      </div>

      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <Menu className="w-6 h-6 text-white" />
        </label>
        <ul tabIndex={0} className="dropdown-content menu rounded-box w-72 bg-slate-950 p-2 shadow-xl text-white">
          <li><a href="#Home">{labels.home}</a></li>
          <li><a href="#Services">{labels.services}</a></li>
          <li><a href="#Process">{labels.process}</a></li>
          <li><a href="#CaseStudies">{labels.caseStudies}</a></li>
          <li><a href="#Pricing">{labels.pricing}</a></li>
          <li><a href="#Testimonials">{labels.testimonials}</a></li>
          <li><a href="#FAQ">{labels.faq}</a></li>
          <li><a href="#Clients">{labels.clients}</a></li>
          <li><a href="#About">{labels.about}</a></li>
          <li><a href="#Experiences">{labels.experiences}</a></li>
          <li><a href="#Projects">{labels.projects}</a></li>
          <li><a href="#Contact">{labels.contact}</a></li>
          <li>
            <button
              className="btn btn-xs btn-outline w-full text-white"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
            >
              {labels.language}
            </button>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4 mx-auto justify-center max-w-[65%]">
        <a href="#Home" className="btn btn-sm btn-ghost text-white">{labels.home}</a>
        <a href="#Services" className="btn btn-sm btn-ghost text-white">{labels.services}</a>
        <a href="#About" className="btn btn-sm btn-ghost text-white">{labels.about}</a>
        <a href="#Clients" className="btn btn-sm btn-ghost text-white">{labels.clients}</a>
        <a href="#Contact" className="btn btn-sm btn-ghost text-white">{labels.contact}</a>

        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-sm btn-ghost text-white gap-2">
            {language === 'fr' ? 'Plus' : 'More'} <MoreHorizontal />
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box w-56 bg-slate-950 p-2 shadow-xl text-white">
            <li><a href="#Process">{labels.process}</a></li>
            <li><a href="#CaseStudies">{labels.caseStudies}</a></li>
            <li><a href="#Pricing">{labels.pricing}</a></li>
            <li><a href="#Testimonials">{labels.testimonials}</a></li>
            <li><a href="#FAQ">{labels.faq}</a></li>
            <li><a href="#Experiences">{labels.experiences}</a></li>
            <li><a href="#Projects">{labels.projects}</a></li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 ml-10 shrink-0">
        <button
          className="btn btn-xs btn-outline text-white"
          onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
        >
          {labels.language}
        </button>
        <img src={logo} alt="Logo FFLAUR" className="w-14 h-14 rounded-full border-2 border-success" />
      </div>
    </div>
  );
};

export default Navbar;

