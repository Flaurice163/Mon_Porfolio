import { motion } from "framer-motion";
import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

import htmlcss from '../assets/techno/htmlcss.jpeg';
import js from '../assets/techno/js.png';
import react from '../assets/techno/react.png';
import phts from '../assets/techno/phts.png';
import nodejs from '../assets/techno/nodejs.png';
import java from '../assets/techno/java.png';
import canva from '../assets/techno/canva.jpg';
import django from '../assets/techno/django.png';

import comp1 from '../assets/company/comp1.jpg';
import comp2 from '../assets/company/comp2.jpg';
import comp3 from '../assets/company/comp3.jpg';

const skills = [
  { id: 1, name: "htmlcss", image: htmlcss },
  { id: 2, name: "js", image: js },
  { id: 3, name: "react", image: react },
  { id: 4, name: "photoshop", image: phts },
  { id: 6, name: "nodejs", image: nodejs },
  { id: 7, name: "java", image: java },
  { id: 8, name: "Canva", image: canva },
  { id: 9, name: "django", image: django },
];

const experiences = [
  {
    id: 1,
    role: "Développeur web",
    company: "Archystore",
    periode: "Septembre 2025 - Décembre 2025",
    description: [
      "Développement de nouvelles fonctionnalités pour le site web.",
      "Optimisation des performances et de l'expérience utilisateur.",
    ],
    image: comp3,
  },
  {
    id: 2,
    role: "Créateur de contenu & graphiste",
    company: "BALISHOP Analakely",
    periode: "Janvier 2026 - maintenant",
    description: [
      "Conception de visuels publicitaires professionnels.",
      "Création de contenus visuels adaptés aux réseaux sociaux.",
    ],
    image: comp1,
  },
  {
    id: 3,
    role: "Développeur application web",
    company: "Bookin'Pro",
    periode: "Mars 2025 - Septembre 2025",
    description: [
      "Développement d'une application de services web.",
      "Intégration de notifications WhatsApp et d'automatisations métier.",
    ],
    image: comp2,
  },
];

interface ExperiencesProps {
  language: Language;
}

const Experiences = ({ language }: ExperiencesProps) => {
  const labels = copy[language].experiences;

  return (
    <div id="Experiences" className="text-white">
      <Title title={labels.title} />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
              <motion.div
                className="w-24 h-24 p-2 rounded-full border-2 border-warning"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              >
                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
              </motion.div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="flex flex-col bg-slate-950/95 p-5 rounded-xl shadow-lg border border-slate-800 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center">
                <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10 rounded-full" />
                <div className="ml-4">
                  <h1 className="text-xl text-warning font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sm text-slate-300">{experience.periode}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2 space-y-1 text-sm text-slate-300">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
