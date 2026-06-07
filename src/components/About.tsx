import { motion } from "framer-motion";
import Title from "./Title";
import monimg from '../assets/monimg.jpeg'
import { CalendarSync, LetterText, Paintbrush, } from "lucide-react";

const aboutSections = [
    {
        id:1,
        title: "Développeur Frontend",
        description:"Je suis un développeur Frontend avec un bonne expérience.",
        icon:<LetterText className="text-warning scale-150"/>,

    },
    {
        id:2,
        title: "Développeur Backend",
        description:"J'ai maitrise les bases du développemnets backend pour creer des APIs Robustes.",
        icon:<CalendarSync className="text-warning scale-150"/>,

    },
    {
        id:3,
        title: "Passionée par l'UI/UX, Design & Social Media",
        description:"Créer des interfaces utilisateurs attrayantes et fonctionnelles est ma priorite, Création de Contenu/Visuel & Graphisme",
        icon:<Paintbrush className="text-warning scale-150"/>,

    },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const,
      repeatDelay: 2.75,
      delay: custom * 1.4,
    },
  }),
};

const imageVariants = {
  visible: {
    rotateY: [0, 180, 360],
    opacity: 1,
    transition: {
      duration: 8,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};

const about = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos" />
      <motion.div
        className="md:h-screen flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="hidden md:block"
          variants={imageVariants}
          animate="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ perspective: 1000 }}
        >
          <motion.img src={monimg} alt="Portrait" className="w-96 object-cover rounded-xl" />
        </motion.div>

        <motion.div className="md:ml-4 space-y-4">
          {aboutSections.map((Section, index) => (
            <motion.div
              key={Section.id}
              variants={cardVariants}
              custom={index + 1}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{Section.icon}</div>

              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{Section.title}</h2>
                <p className="text-sm">{Section.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default about;
