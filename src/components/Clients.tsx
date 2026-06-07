import Title from "./Title";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface ClientsProps {
  language: Language;
}

const Clients = ({ language }: ClientsProps) => {
  const clients = copy[language].clients;

  return (
    <section id="Clients" className="bg-slate-950/95 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
      <Title title={clients.title} />
      <p className="text-slate-300 max-w-2xl mb-8">{clients.description}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.items.map((client) => (
          <div key={client.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-warning hover:bg-slate-900/95">
            <p className="text-lg font-semibold text-warning mb-2">{client.name}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
