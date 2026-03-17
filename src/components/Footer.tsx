import { Cuboid, Facebook, Github, Twitter, } from "lucide-react"


const Footer = () => {
  return (
    
      <footer className="footer footer-horizontal footer-center  p-10">
  <aside>

        <Cuboid className="w-10 h-10"/> 
      

    <p className="font-bold">
     FF<span className="text-warning">LAUR</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - Tous les droits sont reservee</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <a href="https://x.com/home?lang=fr" target="_blank" rel="noopener noreferrer" className="hover:btn btn-sm btn-lg btn-lg">
     <Twitter className="w-6 h-6 text-current"/>
     </a>
      {/* <a href="https://www.youtube.com/@jibrilji9600" target="_blank" rel="noopener noreferrer" className="hover:btn btn-sm btn-lg btn-lg">
     <Youtube className="w-6 h-6 text-current"/>
     </a> */}
      <a href="https://web.facebook.com/Jibril320?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="hover:btn btn-sm btn-lg btn-lg">
     <Facebook className="w-6 h-6 text-current"/>
     </a>
     
      <a href="https://github.com/Flaurice163" target="_blank" rel="noopener noreferrer" className="hover:btn btn-sm btn-lg btn-lg">
     <Github className="w-6 h-6 text-current"/>
     </a>
    </div>
  </nav>
</footer>
    
  )
}

export default Footer
