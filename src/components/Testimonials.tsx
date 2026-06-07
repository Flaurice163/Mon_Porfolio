import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface TestimonialsProps {
  language: Language;
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const testimonials = copy[language].testimonials;

  return (
    <section id="Testimonials" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={testimonials.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95">
            <p className="mb-5 text-slate-200 leading-relaxed">“{item.quote}”</p>
            <div>
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
