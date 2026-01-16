import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L5 15L20 25L35 15L20 5Z" fill="url(#gradient1)" />
          <path d="M20 25L5 35L20 45L35 35L20 25Z" fill="url(#gradient2)" opacity="0.7" />
          <defs>
            <linearGradient id="gradient1" x1="5" y1="5" x2="35" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d4ff" />
              <stop offset="1" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="5" y1="25" x2="35" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0891b2" />
              <stop offset="1" stopColor="#164e63" />
            </linearGradient>
          </defs>
        </svg>
        <span className="logo-text">AAC</span>
      </motion.div>

      <ul className="nav-links">
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/parcours">Parcours</Link></li>
        <li><Link to="/experience">Expérience</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
