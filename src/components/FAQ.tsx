import { useState } from "react";
import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface FAQProps {
  language: Language;
}

const FAQ = ({ language }: FAQProps) => {
  const faq = copy[language].faq;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={faq.title} />
      <p className="text-slate-300 max-w-2xl mb-8">{faq.description}</p>
      <div className="space-y-4">
        {faq.items.map((item, index) => (
          <div
            key={item.question}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-warning">{item.question}</h3>
              <span
                className={`text-warning transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {expandedIndex === index && (
              <p className="text-slate-300 leading-relaxed mt-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
