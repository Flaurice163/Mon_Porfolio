import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface AchievementsProps {
  language: Language;
}

const Achievements = ({ language }: AchievementsProps) => {
  const achievements = copy[language].achievements;

  return (
    <section id="achievements" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={achievements.title} />
      <p className="text-slate-300 max-w-2xl mb-12">{achievements.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900/80 p-6 rounded-2xl text-center border border-slate-800 hover:border-warning hover:bg-slate-900/95 transition duration-300 group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition transform">{stat.icon}</div>
            <div className="text-3xl font-bold text-warning mb-2">{stat.number}</div>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
