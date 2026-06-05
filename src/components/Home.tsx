import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import monimg from '../assets/monimg.jpeg'

const headlineWords = [
  { text: "Bonjour,", delay: 0 },
  { text: "je", delay: 0.4 },
  { text: "suis", delay: 0.8 },
  { text: "FFlaur", delay: 1.2, isName: true },
];

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          {headlineWords.map((word) => (
            <motion.span
              key={word.text}
              className={word.isName ? "text-warning inline-block" : "inline-block"}
              animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: word.delay,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              {word.text} 
            </motion.span>
          ))}
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis un développeur fullstack et Créateur visuels/Graphiste <br />
          avec +2 ans d'expérience, utilisant Reactjs <br /> et Django. <br />
          Passionnée par UI/UX et la créativité visuel. <br />
          J'ai maitrise l'Outil de design comme Photoshop ou Canva.
          Contactez-moi si vous avez besoins de mes services.
        </p>
        <a href="https://wa.me/261343461787?text=Bonjour%2C%20je%20veux%20une%20site%20vitrine%20pour%20representer%20mon%20activite%20en%20ligne" target="_blank" rel="noopener noreferrer" className="btn btn-warning md:w-fit">
          <Mail className="w-5 h-5" />
          Contact-moi
        </a>
      </div>

      <div className="md:ml-60">
        <motion.img
          src={monimg}
          alt="Portrait"
          className="w-96 h-96 object-cover border-8 border-success shadow-xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
          style={{
            borderRadius: "53% 47% 47% 53% / 42% 40% 60% 58%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
