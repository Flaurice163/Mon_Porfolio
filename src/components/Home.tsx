import { Mail, Code, LayoutGrid, Server } from "lucide-react";
import { motion } from "framer-motion";
import monimg from '../assets/monimg.jpeg';
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface HomeProps {
  language: Language;
}

const Home = ({ language }: HomeProps) => {
  const hero = copy[language].hero;
  const serviceCards = copy[language].services;

  return (
    <section id="Home" className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 md:p-10 shadow-2xl mb-10 text-white">
      <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-warning/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-4 py-2 text-sm text-warning">
            <span className="font-semibold">{hero.tag}</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight text-center lg:text-left text-white">
            {hero.title.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className={index === hero.title.length - 1 ? "text-warning inline-block" : "inline-block text-white"}
                animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                {word} 
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-200 leading-relaxed text-center lg:text-left">
            {hero.description}
          </p>

          <ul className="mt-6 space-y-3 text-base text-slate-200 max-w-2xl text-center lg:text-left">
            {hero.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="https://wa.me/261343461787?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20web" target="_blank" rel="noopener noreferrer" className="btn btn-warning gap-2 text-white">
              <Mail className="w-5 h-5" />
              {hero.contact}
            </a>
            <a href="#Services" className="btn btn-outline btn-warning text-white">
              {hero.services}
            </a>
            <a href="#" className="btn btn-neutral btn-outline text-white">
              {hero.cv}
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {serviceCards.map((card, index) => (
              <div key={index} className="group rounded-[2rem] border border-slate-700 bg-slate-950/85 p-7 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-warning hover:bg-slate-900/95 hover:shadow-xl">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-warning/15 text-warning transition duration-300 group-hover:bg-warning/25">
                  {index === 0 && <Code className="w-6 h-6" />}
                  {index === 1 && <Server className="w-6 h-6" />}
                  {index === 2 && <LayoutGrid className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold text-xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.img
            src={monimg}
            alt="Portrait"
            className="w-80 h-80 rounded-full border-8 border-success object-cover shadow-2xl"
            animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.03, 1] }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
