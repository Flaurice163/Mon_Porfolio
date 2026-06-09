import { Mail, MapPin, Phone } from "lucide-react";
import { copy } from "../i18n";
import type { Language } from "../i18n";

interface ContactProps {
  language: Language;
}

const contactMethods = [
  {
    id: 1,
    key: 'Email',
    detail: "contact@fflaur.dev",
    href: "mailto:contact@fflaur.dev",
    icon: <Mail className="w-8 h-8 text-warning" />,
  },
  {
    id: 2,
    key: 'WhatsApp',
    detail: "+261 34 34 617 87",
    href: "https://wa.me/261343461787?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20web",
    icon: <Phone className="w-8 h-8 text-warning" />,
  },
  {
    id: 3,
    key: 'Localisation',
    detail: "Antananarivo, Madagascar",
    href: "#Contact",
    icon: <MapPin className="w-8 h-8 text-warning" />,
  },
];

const Contact = ({ language }: ContactProps) => {
  const contactCopy = copy[language].contact;

  return (
    <section className="mt-16 p-6 bg-slate-950/95 rounded-3xl shadow-2xl text-white" id="Contact">
      <div className="md:flex md:items-center md:justify-between gap-6">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{contactCopy.title}</h2>
          <p className="text-base text-slate-300 mb-6">{contactCopy.description}</p>
          <ul className="grid gap-4">
            {contactMethods.map((method, index) => (
              <li key={method.id} className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="p-3 bg-warning/10 rounded-2xl bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-warning">{method.icon}</div>
                <div>
                  <p className="font-semibold text-white">{contactCopy.methods[index]}</p>
                  <a href={method.href} className="text-sm text-warning hover:underline">
                    {method.detail}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;
