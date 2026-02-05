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
          avec 2 ans d'experience, utilisant React <br /> et Node.js.
          Contactez-moi si vous avez besoins de mes services.
        </p>
        <a href="#" className="btn btn-warning md:w-fit">
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
