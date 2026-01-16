import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import logoImage from "../data/Logo.png"

function Navbar() {
  const location = useLocation()
  const [hoveredLink, setHoveredLink] = useState(null)

  const navItems = [
    { path: "/about", label: "À propos" },
    { path: "/parcours", label: "Parcours" },
    { path: "/experience", label: "Compétence" },
    { path: "/experience", label: "Expérience" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" }
  ]

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link to="/">
        <motion.div
          className="logo"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img 
            src={logoImage} 
            alt="AAC Logo" 
            style={{ 
              width: '40px', 
              height: 'auto'
            }} 
          />
        </motion.div>
      </Link>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={`${item.path}-${index}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            onMouseEnter={() => setHoveredLink(`${item.path}-${index}`)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to={item.path}>
              <motion.span
                whileHover={{ 
                  scale: 1.1,
                  color: "#00d4ff"
                }}
                animate={{
                  y: hoveredLink === `${item.path}-${index}` ? -3 : 0,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, #00d4ff, #0891b2)',
                      borderRadius: 2
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
