import Tittle from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

import img1 from '../assets/projects/img1.jpg';
import img2 from '../assets/projects/img2.jpeg';
import img3 from '../assets/projects/img3.jpeg';
import img4 from '../assets/projects/img4.png';
import img5 from '../assets/projects/img5.jpg';
import { Github, Video } from "lucide-react";

interface ProjectsProps {
  language: Language;
}

const projectData = {
  fr: [
    {
      id: 1,
      title: "Projet de Gestion Financière",
      description: "Application de gestion financière permettant de créer, modifier et visualiser des ratios financiers avec des données des dernières années.",
      technologies: ['PHP', 'HTML', 'CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img1,
    },
    {
      id: 2,
      title: "Gestionnaires des employés",
      description: "Système de gestion des employés avec interface d'administration, développé en Django et stylisé avec Tailwind CSS.",
      technologies: ['HTML', 'Django', 'Tailwind CSS', 'DaisyUI'],
      demoLink: '#',
      repoLink: '#',
      image: img2,
    },
    {
      id: 3,
      title: "Gestionnaire de dépenses",
      description: "Application de suivi des dépenses mensuelles et annuelles avec gestion des transactions et récapitulatif visuel.",
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img3,
    },
    {
      id: 4,
      title: "Gestion des rendez-vous",
      description: "Application web de gestion de projets avec calendrier, tâches et suivi des rendez-vous.",
      technologies: ['React', 'Django', 'Tailwind CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img4,
    },
    {
      id: 5,
      title: "BALISHOP Analakely",
      description: "Création de visuels publicitaires et supports marketing réalisés avec Canva et Photoshop.",
      technologies: ['Canva', 'Photoshop'],
      demoLink: '#',
      repoLink: '#',
      image: img5,
    },
  ],
  en: [
    {
      id: 1,
      title: "Financial Management Project",
      description: "A financial management web app for creating, editing and visualizing financial ratios with historical data.",
      technologies: ['PHP', 'HTML', 'CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img1,
    },
    {
      id: 2,
      title: "Employee Management",
      description: "Employee management system with admin interface, built in Django and styled with Tailwind CSS.",
      technologies: ['HTML', 'Django', 'Tailwind CSS', 'DaisyUI'],
      demoLink: '#',
      repoLink: '#',
      image: img2,
    },
    {
      id: 3,
      title: "Expense Tracking",
      description: "Monthly and yearly expense tracking app with transaction management and visual summaries.",
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img3,
    },
    {
      id: 4,
      title: "Appointment Scheduler",
      description: "Web app for project and appointment management with calendar and task tracking.",
      technologies: ['React', 'Django', 'Tailwind CSS'],
      demoLink: '#',
      repoLink: '#',
      image: img4,
    },
    {
      id: 5,
      title: "BALISHOP Analakely",
      description: "Advertising visuals and marketing materials created with Canva and Photoshop.",
      technologies: ['Canva', 'Photoshop'],
      demoLink: '#',
      repoLink: '#',
      image: img5,
    },
  ],
};

const Projects = ({ language }: ProjectsProps) => {
  const labels = copy[language].projects;
  const projects = projectData[language];

  return (
    <div className="mt-10 text-white" id="Projects">
      <Tittle title={labels.title} />
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-950/95 p-5 h-fit rounded-xl shadow-lg border border-slate-800 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full rounded-xl h-84 object-cover" />
            <div>
              <h1 className="my-2 font-bold text-xl text-white">{project.title}</h1>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-warning badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.demoLink !== '#' && (
                <a className="btn btn-warning flex-1 min-w-[120px] justify-center" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  {labels.demo}
                  <Video className="w-4 ml-2" />
                </a>
              )}
              {project.repoLink !== '#' && (
                <a className="btn btn-neutral flex-1 min-w-[120px] justify-center" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  {labels.github}
                  <Github className="w-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

