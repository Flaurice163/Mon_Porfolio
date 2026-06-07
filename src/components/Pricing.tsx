import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface PricingProps {
  language: Language;
}

const Pricing = ({ language }: PricingProps) => {
  const pricing = copy[language].pricing;

  return (
    <section id="Pricing" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={pricing.title} />
      <p className="text-slate-300 max-w-2xl mb-8">{pricing.description}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-warning">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.subtitle}</p>
              </div>
              <span className="rounded-full bg-warning/20 px-3 py-1 text-sm text-warning">{plan.badge}</span>
            </div>
            <p className="text-4xl font-bold text-white mb-6">{plan.price}</p>
            <ul className="space-y-3 text-slate-300 text-sm mb-6">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <a href="#Contact" className="btn btn-warning btn-sm w-full text-white">{pricing.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
