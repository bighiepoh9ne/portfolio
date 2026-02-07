import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © 2026 Akikmane Cephas
          </p>
          <div className="footer-links">
            <a href="https://github.com/bighiepoh9ne" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/cephas-akikmane-allogo/" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="mailto:cephasallogo@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
