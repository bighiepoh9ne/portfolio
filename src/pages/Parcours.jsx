import { motion } from "framer-motion"
import { useState } from "react"

function Parcours() {
  const [expandedCard, setExpandedCard] = useState(null)

  const parcours = [
    {
      id: 1,
      year: "2025 - Présent",
      title: "Licence Professionnelle Datamining",
      institution: "Université Gustave Eiffel, Champs-sur-Marne",
      summary: "Formation spécialisée en analyse de données, machine learning et visualisation.",
      details: {
        description: "Programme intensif de 1 an en alternance axé sur les techniques avancées de data mining et d'analyse prédictive.",
        skills: [
          "Analyse statistique avancée",
          "Machine Learning et Intelligence Artificielle",
          "Big Data et bases de données NoSQL",
          "Visualisation de données avec Power BI",
          "Data : R (Rstudio), SQL (Oracle), SAS"
        ],
        projects: [
          "Projets de machine learning appliqués",
          "Analyses de datasets complexes",
          "Création de tableaux de bord interactifs"
        ]
      }
    },
    {
      id: 2,
      year: "2022 - 2025",
      title: "Ingénieur Génie Mathématiques et Informatique",
      institution: "CY Tech Cergy",
      summary: "Formation d'ingénieur généraliste avec spécialisation en mathématiques appliquées.",
      details: {
        description: "Cursus complet d'ingénieur avec focus sur les mathématiques, l'informatique et leurs applications industrielles.",
        skills: [
          "Bases de données : R (R Studio), SQL",
          "Statistiques inférentielles, Probabilités, Simulation",
          "Équation différentielle",
          "Langages de programmation : C, Python"
        ],
        projects: [
          "Modélisation mathématique",
          "Développement d'algorithmes",
          "Projets de simulation numérique"
        ]
      }
    },
    {
      id: 3,
      year: "2018 - 2022",
      title: "DEUG Mathématiques et Économie",
      institution: "Université Claude Bernard Lyon 1",
      summary: "Double cursus en mathématiques et sciences économiques.",
      details: {
        description: "Formation fondamentale en mathématiques pures et appliquées, complétée par une initiation aux sciences économiques.",
        skills: [
          "Informatique : C++",
          "Économie : Microéconomie, Macroéconomie, Finance",
          "Probabilités et statistiques",
          "Mathématiques : Analyse, Algèbre"
        ],
        projects: [
          "Études de cas économiques",
          "Modélisation mathématique de phénomènes économiques",
          "Projets informatiques en C++"
        ]
      }
    }
  ]

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <motion.div
      className="page parcours-page"
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
          Mon Parcours Académique
        </motion.h1>

        <motion.div
          className="parcours-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {parcours.map((item, index) => (
            <motion.div
              key={item.id}
              className={`parcours-card ${expandedCard === item.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleCard(item.id)}
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer' }}
            >
              <div className="parcours-header">
                <div className="parcours-year">{item.year}</div>
                <div className="parcours-title-section">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                </div>
                <div className="expand-icon">
                  {expandedCard === item.id ? '−' : '+'}
                </div>
              </div>

              <p className="parcours-summary">{item.summary}</p>

              {expandedCard === item.id && (
                <motion.div
                  className="parcours-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{item.details.description}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Compétences Acquises</h4>
                    <ul>
                      {item.details.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Projets Réalisés</h4>
                    <ul>
                      {item.details.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Parcours
