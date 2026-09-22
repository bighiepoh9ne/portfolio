import { motion } from "framer-motion"
import { useState } from "react"
import idImage from "../data/ID.png"
import { projects } from "../data/project"

function About() {
  const [showMore, setShowMore] = useState(false)
  const projectCount = projects.length

  const stats = [
    { number: "3+", label: "Années d'expérience" },
    { number: `${projectCount}+`, label: "Projets réalisés" }
  ]

  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.section
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-photo-container">
            <div className="photo-wrapper">
              <img src={idImage} alt="Profile" className="about-photo" />
            </div>
          </div>

          <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="terminal-prompt" style={{ textAlign: "left", marginBottom: "16px" }}>
              <span className="prompt-user">data@akik</span>
              <span className="prompt-symbol">~$</span>
              SELECT * FROM profil WHERE nom = 'Cephas';
            </p>
            <h1 className="about-title">
              À propos de <span className="highlight">moi</span>
            </h1>
            <p className="about-description">
              Je m'appelle AKIKMANE ALLOGO Cephas, étudiant en Licence Professionnelle Datamining et prochainement en Master Finance d'Entreprise et Ingénierie Financière. 
              Je me spécialise dans l'analyse et la transformation des données en insights stratégiques, 
              avec une orientation forte vers la finance, les risques et l'aide à la décision.
            </p>
            <p className="about-description">
              Organisé et méthodique, j'aborde chaque projet avec rigueur et créativité. 
              Ma double culture, data science et finance d'entreprise, me pousse à explorer constamment de nouvelles techniques pour extraire le maximum de valeur des données au service de la décision financière.
            </p>
            
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="about-description">
                  Mon approche combine analyse technique rigoureuse et compréhension business pour proposer des solutions data-driven pertinentes. 
                  J'ai développé une expertise en Python, SQL, Power BI, R, Excel avancé et Machine Learning, me permettant de couvrir l'ensemble du cycle de vie de la donnée :
                  de la collecte et du nettoyage jusqu'à la modélisation, la visualisation et la restitution aux équipes métiers.
                </p>
                <p className="about-description">
                  Au-delà des compétences techniques, je valorise le travail d'équipe et la communication. 
                  Je crois fermement que les meilleures solutions émergent de la collaboration et de l'échange d'idées. 
                  Mon objectif est de devenir un professionnel reconnu à l'interface de la finance et de la donnée, capable de transformer des problématiques complexes en opportunités stratégiques.
                </p>
              </motion.div>
            )}

            <motion.button
              className="show-more-btn"
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMore ? "Afficher moins ↑" : "Afficher plus ↓"}
            </motion.button>

            <motion.div
              className="about-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a
                href="https://github.com/bighiepoh9ne"
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                <span className="btn-icon"></span>
                Mon GitHub
              </a>
              <a
                href="CV_Cephas_Akikmane_Allogo.pdf"
                download="CV_Cephas_Akikmane_Allogo.pdf"
                className="btn cv-btn"
              >
                <span className="btn-icon"></span>
                Mon CV
              </a>

            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-subtitle">Chiffres clés</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.35)"
                }}
              >
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 0.8 + index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default About
