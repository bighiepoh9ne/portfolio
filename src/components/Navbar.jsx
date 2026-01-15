import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MonPortfolio</h2>

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/parcours">Parcours</Link></li>
        <li><Link to="/experience">Expérience</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
