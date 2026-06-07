import { Cuboid, Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950/95 border-t border-slate-800 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr] items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Cuboid className="w-10 h-10 text-warning" />
              <div>
                <p className="text-xl font-semibold text-white">FF<span className="text-warning">LAUR</span></p>
                <p className="text-sm text-slate-500">Fullstack & Design</p>
              </div>
            </div>
            <p className="max-w-md leading-relaxed text-slate-400">
              Je conçois des sites et applications web modernes, performants et premium, avec un design réfléchi pour renforcer votre identité.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://x.com/home?lang=fr" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-warning hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://web.facebook.com/Jibril320?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-warning hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://github.com/Flaurice163" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-warning hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-warning mb-5">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#Home" className="transition hover:text-white">Accueil</a>
              </li>
              <li>
                <a href="#Services" className="transition hover:text-white">Services</a>
              </li>
              <li>
                <a href="#About" className="transition hover:text-white">À propos</a>
              </li>
              <li>
                <a href="#Projects" className="transition hover:text-white">Projets</a>
              </li>
              <li>
                <a href="#Contact" className="transition hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-warning mb-5">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>contact@fflaur.dev</p>
              <a href="https://wa.me/261343461787?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20web" target="_blank" rel="noopener noreferrer" className="block text-warning transition hover:text-white">
                WhatsApp +261 34 346 1787
              </a>
              <p>Antananarivo, Madagascar</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FF<span className="text-warning">LAUR</span>. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
