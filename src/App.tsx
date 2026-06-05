import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Carousel from './components/Carousel'

function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
    <div className="flex justify-center items-center h-full w-full m-10px mb-12 mt-5 bg-black-100">
      <Carousel autoplay loop round pauseOnHover={true} autoplayDelay={5000}/>
    </div>
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
