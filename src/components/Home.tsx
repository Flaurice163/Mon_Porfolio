import { Mail } from "lucide-react";
import monimg from '../assets/monimg.jpeg'

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col">
        <h1
          className="text-5xl md:text-6xl font-bold text-center md:text-left 
mt-4 md:mt-0"
        >
          Bonjour, <br /> je suis
          <span className="text-warning"> FFlaur</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis un developpeur fullstack <br />
          avec 1 ans d'experience, utilisant Reactjs <br /> et Django.
          Contactez-moi si vous avez besoins de mes services.
        </p>
        <a href="https://wa.me/261343461787?text=Bonjour%2C%20je%20veux%20une%20site%20vitrine%20pour%20representer%20mon%20activite%20en%20ligne"  target="_blank" rel="noopener noreferrer" className="btn btn-warning md:w-fit">
            <Mail className="w-5 h-5" />
            Contact-moi
        </a>
      </div>

      <div className="md:ml-60">
        <img src={monimg} alt="" className="w-96 h-96 object-cover border-8 border-success shadow-xl"
        style={
            {
                borderRadius : "53% 47% 47% 53% / 42% 40% 60% 58%  "
            }
        }/>
      </div>
    </div>
  );
};

export default Home;
