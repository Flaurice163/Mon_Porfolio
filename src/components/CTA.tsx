import { copy } from "../i18n";
import type { Language } from "../i18n";

interface CTAProps {
  language: Language;
  onContactClick: () => void;
}

const CTA = ({ language, onContactClick }: CTAProps) => {
  const cta = copy[language].cta;

  return (
    <section id="cta" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        {cta.title}
      </h2>
      <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6">
        {cta.description}
      </p>
      <button
        onClick={onContactClick}
        className="px-6 py-3 bg-warning text-slate-950 font-semibold text-base rounded-full hover:bg-warning/90 transition duration-300"
      >
        {cta.button}
      </button>
    </section>
  );
};

export default CTA;
