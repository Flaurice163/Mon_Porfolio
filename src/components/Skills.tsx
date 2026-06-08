import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface SkillsProps {
  language: Language;
}

const Skills = ({ language }: SkillsProps) => {
  const skills = copy[language].skills;

  return (
    <section id="skills" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={skills.title} />
      <p className="text-slate-300 max-w-2xl mb-12">{skills.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.items.map((skill) => (
          <div key={skill.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-warning">{skill.name}</h4>
              <span className="text-sm font-bold text-slate-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-warning to-orange-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
