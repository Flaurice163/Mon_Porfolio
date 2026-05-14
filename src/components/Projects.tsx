import Tittle from "./Title"

import img1 from '../assets/projects/img1.jpg'
import img2 from '../assets/projects/img2.jpeg'
import img3 from '../assets/projects/img3.jpeg'
import img4 from '../assets/projects/img4.png'
import img5 from '../assets/projects/img5.jpg'
import { Github, Video } from "lucide-react"


const projects=[
    {
        id:1,
        title:"Projet de Gestion Financiere",
        description:"Ce projet est une application web de gestion financiere. Dans cette application, on peut faire de CRUD des ratios, et on peut visaliser les resultats avec les donnes des derniers annees saisi.",
        technologies:['Php', 'Html','Css'],
        demoLink:'#',
        repoLink:'#',
        image:img1,
    },

     {
        id:2,
        title:"Gestionnaires des employes",
        description:"Ce projet est un gestion des employes developpe pour faire des CRUD des employes dans un entreprise, developpe en python avec de framework 'Django'",
        technologies:['HTML', 'Django','TailwindCss', 'Daisyui'],
        demoLink:'#',
        repoLink:'#',
        image:img2,
    },

     {
        id:3,
        title:"Gestionnaires de suivi des depences",
        description:"C'est projet est concue pour le suivi de depense mensuel ou annuel dans lequel on peut ajouter, modifier et supprimer des transaction",
        technologies:['React', 'JavaScript','TailwindCss'],
        demoLink:'#',
        repoLink:'#',
        image:img3,
    },

    {
        id:4,
        title:"Gestion des rendez-vous",
        description:"Ce projet est un app web de Gestion de projet.",
        technologies:['Reactjs', 'Django','Tailwindcss'],
        demoLink:'#',
        repoLink:'#',
        image:img4,
    },
{
        id:5,
        title:"BALISHOP Analakely",
        description:"Contenu visuel publicitaire creee via Canva et Photshop.",
        technologies:['Canva', 'Photoshop'],
        demoLink:'#',
        repoLink:'#',
        image:img5,
    },
    
]


const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
      <Tittle title="Mes Projets"/>
      <div className="grid md:grid-col-3 gap-4">
        { projects.map((project)=>(
            <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl
            shadow-lg">
                <img src={project.image} alt={project.title} 
                className="w-full rounded-xl h-84 object-cover"/>
                <div>
                    <h1 className="my-2 fond-bold">
                        {project.title}
                    </h1>
                    <p className="text-sm">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 my-3">
                    {project.technologies.map((tech)=>(
                        <span className="badge badge-warning badge-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex">
                    <a className="btn btn-warning w-2/3" href={project.demoLink}> 
                        Demo
                        <Video className="w-4"/>

                    </a>

                    <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}> 
                       Github
                        <Github className="w-4"/>

                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
