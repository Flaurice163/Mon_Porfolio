import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface TechStackProps {
  language: Language;
}

const TechStack = ({ language }: TechStackProps) => {
  const techStack = copy[language].techStack;

  return (
    <section id="techStack" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={techStack.title} />
      <p className="text-slate-300 max-w-2xl mb-12">{techStack.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techStack.categories.map((category) => (
          <div
            key={category.name}
            className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-warning hover:bg-slate-900/95 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-warning mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-800/60 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-warning hover:text-warning transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
