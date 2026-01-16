import { motion } from "framer-motion"
import { useState } from "react"

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null)

  const experiences = [
    {
      id: 1,
      period: "Mai 2025 - Août 2025",
      title: "Chargé des Données Statistiques Macroéconomiques",
      company: "Ministère des Finances, Libreville, Gabon",
      summary: "Élaboration et valorisation des comptes économiques du Gabon.",
      details: {
        description: "Traitement, analyse et mise en cohérence des données d'origines diverses afin de restituer les grands agrégats de l'économie gabonaise (PIB, consommation, investissement...) conformément au cadre de la comptabilité nationale.",
        responsibilities: [
          "Construction des outils de prévision adaptés aux exigences internationales actuelles",
          "Conception des outils d'analyse des comportements économiques",
          "Élaboration et valorisation des comptes économiques du Gabon",
          "Mise en cohérence des données d'origines diverses"
        ],
        skills: [
          "Analyse économique et statistique",
          "Comptabilité nationale",
          "Prévision économique",
          "Traitement de données macroéconomiques"
        ]
      }
    },
    {
      id: 2,
      period: "Juillet 2024 - Août 2024",
      title: "Stagiaire Data Scientist",
      company: "RHOPEN (Entreprise de services du numérique), Paris, France",
      summary: "Contribution à des projets de data science en équipe.",
      details: {
        description: "Stage pratique en data science au sein d'une entreprise spécialisée dans les services numériques, avec participation active aux projets en cours.",
        responsibilities: [
          "Travail en équipe avec les autres Data Scientists",
          "Identification de nouvelles sources de données pertinentes",
          "Contribution à la documentation technique",
          "Initiation à l'usage de Dataiku"
        ],
        skills: [
          "Data Science appliquée",
          "Travail en équipe technique",
          "Documentation technique",
          "Outils de data science (Dataiku)"
        ]
      }
    },
    {
      id: 3,
      period: "Janvier 2022 - Mai 2022",
      title: "Stagiaire de Mathématiques",
      company: "Collège les Gratte-Ciel Morice Leroux, Villeurbanne, France",
      summary: "Stage d'observation et de conduite d'une classe de mathématiques.",
      details: {
        description: "Stage d'immersion dans l'enseignement secondaire avec observation des méthodes pédagogiques et participation aux activités éducatives.",
        responsibilities: [
          "Observation et conduite d'une classe de mathématiques",
          "Participation aux activités d'un conseiller principal d'éducation",
          "Collaboration avec l'équipe enseignante et éducative",
          "Découverte des méthodes pédagogiques modernes"
        ],
        skills: [
          "Pédagogie et transmission du savoir",
          "Gestion de classe",
          "Travail avec les adolescents",
          "Méthodes d'enseignement des mathématiques"
        ]
      }
    }
  ]

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

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
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-card ${expandedCard === exp.id ? 'expanded' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleCard(exp.id)}
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer' }}
            >
              <div className="experience-header">
                <div className="experience-period">{exp.period}</div>
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="expand-icon">
                  {expandedCard === exp.id ? '−' : '+'}
                </div>
              </div>

              <p className="experience-summary">{exp.summary}</p>

              {expandedCard === exp.id && (
                <motion.div
                  className="experience-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{exp.details.description}</p>
                  </div>

                  <div className="detail-section">
                    <h4>Responsabilités</h4>
                    <ul>
                      {exp.details.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Compétences Développées</h4>
                    <ul>
                      {exp.details.skills.map((skill, idx) => (
                        <li key={skill}>{skill}</li>
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

export default Experience
