import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "../components/Hero"

function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="home-page">
      <Hero />
      <motion.div
        className="availability-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          className="availability-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
        >
          À la recherche d'un stage ou d'une alternance
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h2>Contactez-moi</h2>
              <p>Je suis actuellement à la recherche d'un stage ou d'une alternance dans la data.</p>
              <p>N'hésitez pas à me contacter pour discuter d'opportunités !</p>
              <Link to="/contact">
                <button className="btn primary">Aller à la page Contact</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
