import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface ServicesProps {
  language: Language;
}

const Services = ({ language }: ServicesProps) => {
  const contactCopy = copy[language].contact;

  return (
    <section id="Services" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl text-white">
      <Title title={contactCopy.servicesTitle} />
      <p className="text-slate-300 max-w-2xl mb-8">{contactCopy.description}</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contactCopy.services.map((service) => (
          <div
            key={service}
            className="rounded-3xl border border-warning/50 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-3 text-warning">{service}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Je transforme ce service en un projet clair, professionnel et orienté résultat.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
