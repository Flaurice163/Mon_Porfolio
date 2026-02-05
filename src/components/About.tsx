import Title from "./Title";
import monimg from '../assets/monimg.jpeg'
import { CalendarSync, LetterText, Paintbrush, } from "lucide-react";

const aboutSections = [
    {
        id:1,
        title: "Developpeur Frontend",
        description:"Je suis un developpeur Frontend avec un bonne experience.",
        icon:<LetterText className="text-warning scale-150"/>,

    },
    {
        id:2,
        title: "Developpeur Backend",
        description:"J'ai maitrise les bases du developpemnets backend pour creer des APIs Robustes.",
        icon:<CalendarSync className="text-warning scale-150"/>,

    },
    {
        id:3,
        title: "Passionne par l'UI/UX",
        description:"Creer des interfaces utilisateurs attrayantes et fonctionnelles est ma priorite",
        icon:<Paintbrush className="text-warning scale-150"/>,

    },
];

const about = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
             <img src={monimg} alt="" className="w-96 object-cover rounded-xl"/>
        </div>

        <div className="md:ml-4 space-y-4">
           {
            aboutSections.map((Section)=>(
                <div key={Section.id} className="flex flex-col md:flex-row items-center bg-base-100 
                p-5 rounded-xl md:w-96 shadow-xl">
                    <div className="mb-2 md:mb-0">
                        {Section.icon}

                    </div>

                    <div className="md:ml-4 text-center md:text-left">
                        <h2 className="text-xl font-bold mb-1">
                            {Section.title}

                        </h2>
                        <p className="text-sm">
                            {Section.description}
                        </p>

                    </div>
                   
                </div>
            ))
           } 

        </div>
      </div>
    </div>
  );
};

export default about;
