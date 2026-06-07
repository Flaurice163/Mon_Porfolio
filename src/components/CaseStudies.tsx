import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface CaseStudiesProps {
  language: Language;
}

const CaseStudies = ({ language }: CaseStudiesProps) => {
  const caseStudies = copy[language].caseStudies;

  return (
    <section id="CaseStudies" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={caseStudies.title} />
      <p className="text-slate-300 max-w-2xl mb-8">{caseStudies.description}</p>
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.items.map((caseItem) => (
          <div key={caseItem.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95">
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-warning">{caseItem.theme}</div>
            <h3 className="text-2xl font-semibold text-white mb-3">{caseItem.title}</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">{caseItem.description}</p>
            <p className="text-slate-400 text-sm"><span className="font-semibold text-white">Résultat :</span> {caseItem.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
