import { motion } from "framer-motion"

function Experience() {
  return (
    <motion.div
      className="page experience-page"
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
          Expérience Professionnelle
        </motion.h1>
        <motion.div
          className="experience-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="experience-card">
            <h3>Développeur Web</h3>
            <p className="company">Entreprise Tech</p>
            <p className="period">2022 - Présent</p>
            <ul>
              <li>Développement d'interfaces utilisateur réactives</li>
              <li>Optimisation des performances web</li>
              <li>Collaboration avec l'équipe design</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Stagiaire Développement</h3>
            <p className="company">Startup Innovante</p>
            <p className="period">2021 - 2022</p>
            <ul>
              <li>Apprentissage des technologies modernes</li>
              <li>Participation à des projets open-source</li>
              <li>Formation en méthodologies agiles</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Experience
