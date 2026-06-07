import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface ProcessProps {
  language: Language;
}

const Process = ({ language }: ProcessProps) => {
  const process = copy[language].process;

  return (
    <section id="Process" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={process.title} />
      <p className="text-slate-300 max-w-2xl mb-8">{process.description}</p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {process.steps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-warning text-slate-950 font-bold shadow-sm">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-warning mb-2">{step.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
