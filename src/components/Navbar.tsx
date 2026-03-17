import { Cuboid } from "lucide-react"
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-2xl md:text-xl">
        <Cuboid className="mr-2"/> FF<span className="text-warning">LAUR</span>
      </a>

<ul className="hidden md:flex space-x-4">
    <li>
        <a href="#Home" className="btn btn-sm btn-ghost">Accueil</a>
    </li>
    <li>
        <a href="#About" className="btn btn-sm btn-ghost">A propos</a>
    </li>
    <li>
        <a href="#Experiences" className="btn btn-sm btn-ghost">Mes Experiences</a>
    </li>
    <li>
        <a href="#Projects" className="btn btn-sm btn-ghost">Mes Projet</a>
    </li>
</ul>

<ul className="hidden md:flex space-x-4">
    <li>
        <a href="#">
            <img src={logo} alt="" className="w-20 h-20 p-0.5 rounded-full border-2 border-success" />
        </a>
    </li>
</ul>

    </div>
  )
}

export default Navbar
