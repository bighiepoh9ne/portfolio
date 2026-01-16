import { motion } from "framer-motion"
import { useState } from "react"

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const skills = [
    {
      id: 1,
      name: "Python",
      category: "Programmation",
      level: 90,
      icon: "PY",
      description: "Maîtrise avancée de Python pour l'analyse de données, le machine learning et l'automatisation.",
      tools: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
    },
    {
      id: 2,
      name: "SQL",
      category: "Base de données",
      level: 85,
      icon: "DB",
      description: "Expertise en requêtes SQL complexes, optimisation et gestion de bases de données relationnelles.",
      tools: ["MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      id: 3,
      name: "Power BI",
      category: "Visualisation",
      level: 88,
      icon: "BI",
      description: "Création de tableaux de bord interactifs et rapports analytiques pour la prise de décision.",
      tools: ["DAX", "Power Query", "Dashboards"]
    },
    {
      id: 4,
      name: "Excel",
      category: "Analyse",
      level: 92,
      icon: "XL",
      description: "Utilisation avancée d'Excel pour l'analyse de données, les tableaux croisés dynamiques et VBA.",
      tools: ["Formules avancées", "VBA", "Tableaux croisés"]
    },
    {
      id: 5,
      name: "Machine Learning",
      category: "IA",
      level: 80,
      icon: "ML",
      description: "Développement de modèles prédictifs et algorithmes d'apprentissage automatique.",
      tools: ["Regression", "Classification", "Clustering"]
    },
    {
      id: 6,
      name: "Data Viz",
      category: "Visualisation",
      level: 87,
      icon: "DV",
      description: "Création de visualisations impactantes pour communiquer des insights complexes.",
      tools: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
      id: 7,
      name: "Git",
      category: "Outils",
      level: 75,
      icon: "GIT",
      description: "Gestion de versions et collaboration sur des projets de développement.",
      tools: ["GitHub", "GitLab", "Version Control"]
    },
    {
      id: 8,
      name: "Statistics",
      category: "Analyse",
      level: 83,
      icon: "ST",
      description: "Application de méthodes statistiques pour l'analyse et l'interprétation des données.",
      tools: ["Tests statistiques", "Probabilités", "Inférence"]
    }
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <motion.div
      className="page skills-page"
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
          Mes Compétences
        </motion.h1>

        <motion.p
          className="skills-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez mes compétences techniques en data science et analyse de données. 
          Cliquez sur une compétence pour en savoir plus.
        </motion.p>

        <div className="skills-interactive-container">
          <motion.div
            className="skills-network"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI
              const radius = 250
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={skill.id}
                  className={`skill-node ${selectedSkill?.id === skill.id ? 'active' : ''}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    zIndex: 10
                  }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="skill-node-inner">
                    <span className="skill-node-icon">{skill.icon}</span>
                    <span className="skill-node-name">{skill.name}</span>
                    <div className="skill-node-level">
                      <div 
                        className="skill-node-level-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  
                  {selectedSkill?.id === skill.id && (
                    <>
                      {skills.map((otherSkill) => {
                        if (otherSkill.id !== skill.id && otherSkill.category === skill.category) {
                          const otherIndex = skills.findIndex(s => s.id === otherSkill.id)
                          const otherAngle = (otherIndex / skills.length) * 2 * Math.PI
                          const otherX = Math.cos(otherAngle) * radius
                          const otherY = Math.sin(otherAngle) * radius
                          
                          return (
                            <svg
                              key={`line-${skill.id}-${otherSkill.id}`}
                              className="skill-connection-line"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none',
                                zIndex: 0
                              }}
                            >
                              <motion.line
                                x1={`calc(50% + ${x}px)`}
                                y1={`calc(50% + ${y}px)`}
                                x2={`calc(50% + ${otherX}px)`}
                                y2={`calc(50% + ${otherY}px)`}
                                stroke="rgba(0, 212, 255, 0.3)"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              />
                            </svg>
                          )
                        }
                        return null
                      })}
                    </>
                  )}
                </motion.div>
              )
            })}

            <div className="skills-center-node">
              <span className="center-icon">DS</span>
              <span className="center-text">Data Science</span>
            </div>
          </motion.div>

          {selectedSkill && (
            <motion.div
              className="skill-detail-panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className="close-detail-btn"
                onClick={() => setSelectedSkill(null)}
              >
                ✕
              </button>
              
              <div className="skill-detail-header">
                <span className="skill-detail-icon">{selectedSkill.icon}</span>
                <h2>{selectedSkill.name}</h2>
                <span className="skill-detail-category">{selectedSkill.category}</span>
              </div>

              <div className="skill-detail-level">
                <span className="level-label">Niveau de maîtrise</span>
                <div className="level-bar">
                  <motion.div
                    className="level-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="level-percentage">{selectedSkill.level}%</span>
              </div>

              <div className="skill-detail-description">
                <h3>Description</h3>
                <p>{selectedSkill.description}</p>
              </div>

              <div className="skill-detail-tools">
                <h3>Outils & Technologies</h3>
                <div className="tools-list">
                  {selectedSkill.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      className="tool-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="skills-legend"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Catégories</h3>
          <div className="legend-items">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="legend-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="legend-color" style={{ 
                  background: `hsl(${index * (360 / categories.length)}, 70%, 60%)` 
                }} />
                <span>{category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills
