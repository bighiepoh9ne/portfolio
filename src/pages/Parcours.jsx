import { motion } from "framer-motion"

function Parcours() {
  const parcours = [
    {
      year: "2024 - Présent",
      title: "Licence Professionnelle Datamining",
      institution: "Université Gustave Eiffel",
      description: "Formation spécialisée en analyse de données, machine learning et visualisation de données.",
      highlights: [
        "Analyse statistique avancée",
        "Machine Learning et IA",
        "Big Data et bases de données",
        "Visualisation avec Power BI"
      ]
    },
    {
      year: "2022 - 2024",
      title: "DUT/BUT Informatique",
      institution: "IUT",
      description: "Formation en développement informatique et gestion de données.",
      highlights: [
        "Programmation Python et SQL",
        "Bases de données relationnelles",
        "Développement web",
        "Gestion de projet"
      ]
    },
    {
      year: "2022",
      title: "Baccalauréat",
      institution: "Lycée",
      description: "Obtention du baccalauréat avec mention.",
      highlights: [
        "Spécialité Mathématiques",
        "Spécialité NSI (Numérique et Sciences Informatiques)"
      ]
    }
  ]

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
          Mon Parcours
        </motion.h1>
        
        <motion.div
          className="experience-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {parcours.map((item, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p className="company">{item.institution}</p>
              <p className="period">{item.year}</p>
              <p style={{ marginBottom: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>
                {item.description}
              </p>
              <ul>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Parcours
