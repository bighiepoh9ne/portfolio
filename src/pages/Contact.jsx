import { motion } from "framer-motion"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Message envoyé ! Je vous répondrai bientôt.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Me Contacter
        </motion.h1>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Email</h3>
              <p>cephasallogo@gmail.com</p>
            </motion.div>

            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Téléphone</h3>
              <p>+33 7 46 51 08 28</p>
            </motion.div>

            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>Localisation</h3>
              <p>Île-de-France, France</p>
            </motion.div>

            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3>Réseaux</h3>
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <a
                  href="https://linkedin.com/in/akikmane"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00d4ff', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bighiepoh9ne"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00d4ff', textDecoration: 'none' }}
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ width: '100%' }}
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
