import { motion } from "framer-motion";
import Title from "./Title";
import monimg from '../assets/monimg.jpeg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
  const section = copy[language].about;
  const icons = [
    <LetterText className="text-warning scale-150" />,
    <CalendarSync className="text-warning scale-150" />,
    <Paintbrush className="text-warning scale-150" />,
  ];

  return (
    <div className="bg-slate-950/95 p-10 mb-10 md:mb-32 text-white" id="About">
      <Title title={section.title} />
      <motion.div
        className="flex flex-col gap-10 md:flex-row md:items-stretch justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="hidden md:block h-full"
          variants={imageVariants}
          animate="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ perspective: 1000 }}
        >
          <motion.img src={monimg} alt="Portrait" className="w-96 h-full object-cover rounded-xl" />
        </motion.div>

        <div className="md:ml-4 space-y-6 flex-1 flex flex-col justify-between">
          {section.cards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-center bg-slate-900/90 p-7 rounded-[2rem] shadow-lg shadow-slate-950/30 border border-slate-800 transition duration-300 hover:-translate-y-2 hover:border-warning hover:bg-slate-900/95 hover:shadow-xl"
            >
              <div className="mb-4 md:mb-0 flex h-16 w-16 items-center justify-center rounded-3xl bg-warning/15 text-warning transition duration-300 group-hover:bg-warning/25">
                {icons[index]}
              </div>

              <div className="md:ml-5 text-center md:text-left">
                <h2 className="text-xl font-bold mb-2 text-white">{card.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

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

export default About;
