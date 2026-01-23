import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import logoImage from "../data/Logo.png"

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            La passion au service
            <br />
            <span className="highlight">de la data</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Étudiant en licence Professionnelle de Datamining à l'université Gustave Eiffel.
            Organisé, méthodique et passionné par la transformation des données brutes en insights stratégiques.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link to="/parcours">
              <motion.button
                className="btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mon parcours →
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
        className="hero-blob-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="blob-wrapper">
          <svg
            className="blob-svg"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="50%" stopColor="#0e7490" />
                <stop offset="100%" stopColor="#164e63" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d="M 250 100 Q 350 150 400 250 Q 350 350 250 400 Q 150 350 100 250 Q 150 150 250 100 Z"
              fill="url(#blobGradient)"
              filter="url(#glow)"
              animate={{
                d: [
                  "M 250 100 Q 350 150 400 250 Q 350 350 250 400 Q 150 350 100 250 Q 150 150 250 100 Z",
                  "M 250 120 Q 330 140 380 250 Q 340 360 250 380 Q 160 360 120 250 Q 170 140 250 120 Z",
                  "M 250 110 Q 360 160 390 250 Q 360 340 250 390 Q 140 340 110 250 Q 140 160 250 110 Z",
                  "M 250 100 Q 350 150 400 250 Q 350 350 250 400 Q 150 350 100 250 Q 150 150 250 100 Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          <div className="blob-content">
            <motion.div
              className="blob-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <img 
                src={logoImage} 
                alt="AAC Logo" 
                style={{ 
                  width: '200px', 
                  height: 'auto',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
