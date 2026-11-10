import Tittle from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

import img1 from '../assets/projects/img1.jpg';
import img3 from '../assets/projects/img3.jpeg';
import img4 from '../assets/projects/img4.png';
import img5 from '../assets/projects/img5.jpg';
import promoVideo from '../assets/projects/FFLAURITZ-promo-v2.mp4';
import { Github, Video } from "lucide-react";

interface ProjectsProps {
  language: Language;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  image?: string;
  video?: string;
}

const projectData: Record<Language, Project[]> = {
  fr: [
    {
      id: 1,
      title: "Agent Marketing IA",
      description: "Générateur de stratégies marketing avec analyse de marché, laboratoire de contenu et planificateur de campagnes.",
      technologies: ['IA', 'Marketing digital', 'Stratégie', 'Génération de contenu'],
      demoLink: 'https://ia-agent-marketing.vercel.app/',
      repoLink: '#',
      image: img1,
    },
    {
      id: 3,
      title: "TanaStock",
      description: "Application de gestion de boutique pour suivre les stocks, les ventes et les dépenses, avec un tableau de bord et des rapports détaillés.",
      technologies: ['Gestion de stock', 'Gestion des ventes', 'Suivi financier', 'Rapports'],
      demoLink: 'http://tanastock-fflauritz.expo.app/',
      repoLink: '#',
      image: img3,
    },
    {
      id: 4,
      title: "BeyrouthResto de Paris",
      description: "Un siteweb elegant et moderne de RestoBeyrouth de Paris.",
      technologies: ['React', 'Django', 'Tailwind CSS'],
      demoLink: 'http://restobeyrouth.vercel.app/',
      repoLink: '#',
      image: img4,
    },
    {
      id: 5,
      title: "BALISHOP Analakely",
      description: "Création de visuels publicitaires et supports marketing réalisés avec Canva et Photoshop.",
      technologies: ['Canva', 'Photoshop'],
      demoLink: 'https://www.facebook.com/profile.php?id=100087767242042',
      repoLink: '#',
      image: img5,
    },
    {
      id: 6,
      title: "Présentation de services — Motion design",
      description: "Vidéo de présentation de mes services en développement web et mobile, création de flyers et motion design, déclinée dans des formats adaptés aux réseaux sociaux.",
      technologies: ['Motion design', 'Développement web et mobile', 'Flyer', 'Réseaux sociaux'],
      demoLink: '#',
      repoLink: '#',
      video: promoVideo,
    },
  ],
  en: [
    {
      id: 1,
      title: "AI Marketing Agent",
      description: "A marketing strategy generator featuring market analysis, a content lab, and a campaign planner.",
      technologies: ['AI', 'Digital marketing', 'Strategy', 'Content generation'],
      demoLink: 'https://ia-agent-marketing.vercel.app/',
      repoLink: '#',
      image: img1,
    },
    {
      id: 3,
      title: "TanaStock",
      description: "A shop management application for tracking inventory, sales, and expenses, with a dashboard and detailed reports.",
      technologies: ['Inventory management', 'Sales management', 'Financial tracking', 'Reports'],
      demoLink: 'http://tanastock-fflauritz.expo.app/',
      repoLink: '#',
      image: img3,
    },
    {
      id: 4,
      title: "BeyrouthResto de Paris",
      description: "A modern, elegant website showcasing the Beyrouth restaurant in Paris.",
      technologies: ['React', 'Django', 'Tailwind CSS'],
      demoLink: 'http://restobeyrouth.vercel.app/',
      repoLink: '#',
      image: img4,
    },
    {
      id: 5,
      title: "BALISHOP Analakely",
      description: "Advertising visuals and marketing materials created with Canva and Photoshop.",
      technologies: ['Canva', 'Photoshop'],
      demoLink: 'https://www.facebook.com/profile.php?id=100087767242042',
      repoLink: '#',
      image: img5,
    },
    {
      id: 6,
      title: "Service Presentation — Motion Design",
      description: "A promotional video presenting my web and mobile development, flyer design, and motion design services, adapted to social media formats.",
      technologies: ['Motion design', 'Web and mobile development', 'Flyer design', 'Social media'],
      demoLink: '#',
      repoLink: '#',
      video: promoVideo,
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
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                controls
                muted
                preload="metadata"
                playsInline
                aria-label={project.title}
                className="w-full rounded-xl aspect-[9/16] bg-black object-contain"
              />
            ) : (
              <img src={project.image} alt={project.title} className="w-full rounded-xl h-84 object-cover" />
            )}
            <div>
              <h1 className="my-2 font-bold text-xl text-white">{project.title}</h1>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1.5 bg-slate-800/60 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-warning hover:text-warning transition">{tech}</span>
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
