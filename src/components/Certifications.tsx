import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface CertificationsProps {
  language: Language;
}

const Certifications = ({ language }: CertificationsProps) => {
  const certs = copy[language].certifications;

  return (
    <section id="certifications" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={certs.title} />
      <p className="text-slate-300 max-w-2xl mb-12">{certs.description}</p>
      <div className="space-y-4">
        {certs.items.map((cert) => (
          <div
            key={cert.title}
            className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-warning hover:bg-slate-900/95 transition duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-warning group-hover:text-orange-400 transition mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
              <span className="px-3 py-1 bg-warning/20 text-warning rounded-full text-xs font-semibold">
                {cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
