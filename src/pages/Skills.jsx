import { motion } from "framer-motion"
import { useState } from "react"
import { FaPython, FaReact, FaGitAlt, FaCode, FaCalculator, FaDatabase, FaChartBar, FaFileExcel, FaFilePowerpoint, FaFileWord } from 'react-icons/fa'
import { SiR, SiMongodb, SiC, SiCplusplus, SiJavascript, SiPhp, SiCss3, SiPostgresql } from 'react-icons/si'

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [expandedCategories, setExpandedCategories] = useState(new Set())

  const skills = [
    {
      id: 1,
      name: "Python",
      category: "Programmation",
      level: 90,
      icon: <FaPython />,
      description: "Maîtrise avancée de Python pour l'analyse de données et l'automatisation.",
      tools: ["Streamlit", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      id: 2,
      name: "SAS",
      category: "Analyse",
      level: 85,
      icon: <FaCode />,
      description: "Expertise en SAS pour l'analyse statistique et le traitement de données.",
      tools: ["SAS/STAT", "SAS/ETS", "Macros SAS"]
    },
    {
      id: 3,
      name: "R",
      category: "Analyse",
      level: 88,
      icon: <SiR />,
      description: "Utilisation de R pour l'analyse statistique et la visualisation de données.",
      tools: ["ggplot2", "dplyr", "tidyr", "RStudio"]
    },
    {
      id: 4,
      name: "SQL",
      category: "Base de données",
      level: 87,
      icon: <SiPostgresql />,
      description: "Expertise en requêtes SQL complexes et gestion de bases de données.",
      tools: ["Oracle", "MySQL", "PostgreSQL"]
    },
    {
      id: 5,
      name: "Power BI",
      category: "Visualisation",
      level: 90,
      icon: <FaChartBar />,
      description: "Création de tableaux de bord interactifs et rapports analytiques.",
      tools: ["DAX", "Power Query", "Dashboards"]
    },
    {
      id: 6,
      name: "Excel",
      category: "Analyse",
      level: 92,
      icon: <FaFileExcel />,
      description: "Utilisation avancée d'Excel pour l'analyse de données, couplée à R et VBA pour l'automatisation et le traitement statistique.",
      tools: ["VBA", "Formules avancées", "Tableaux croisés", "R"]
    },
    {
      id: 7,
      name: "MongoDB",
      category: "Base de données",
      level: 80,
      icon: <SiMongodb />,
      description: "Gestion de bases de données NoSQL avec MongoDB.",
      tools: ["Aggregation", "Indexing", "MongoDB Atlas"]
    },
    {
      id: 8,
      name: "C",
      category: "Programmation",
      level: 75,
      icon: <SiC />,
      description: "Programmation en langage C pour applications système.",
      tools: ["GCC", "Makefiles", "Debugging"]
    },
    {
      id: 9,
      name: "C++",
      category: "Programmation",
      level: 78,
      icon: <SiCplusplus />,
      description: "Développement en C++ pour applications performantes.",
      tools: ["STL", "OOP", "Templates"]
    },
    {
      id: 10,
      name: "JavaScript",
      category: "Web",
      level: 85,
      icon: <SiJavascript />,
      description: "Développement web interactif avec JavaScript.",
      tools: ["React", "Vite", "ES6+"]
    },
    {
      id: 11,
      name: "React",
      category: "Web",
      level: 82,
      icon: <FaReact />,
      description: "Création d'interfaces utilisateur modernes avec React.",
      tools: ["Hooks", "Context", "Framer Motion"]
    },
    {
      id: 12,
      name: "PHP",
      category: "Web",
      level: 70,
      icon: <SiPhp />,
      description: "Développement backend avec PHP.",
      tools: ["Laravel", "MySQL", "APIs"]
    },
    {
      id: 13,
      name: "CSS",
      category: "Web",
      level: 88,
      icon: <SiCss3 />,
      description: "Stylisation avancée et responsive design.",
      tools: ["Flexbox", "Grid", "Animations"]
    },
    {
      id: 14,
      name: "Git",
      category: "Outils",
      level: 85,
      icon: <FaGitAlt />,
      description: "Gestion de versions et collaboration sur GitHub.",
      tools: ["GitHub", "GitLab", "Version Control"]
    },
    {
      id: 15,
      name: "Dataiku",
      category: "Outils",
      level: 75,
      icon: <FaCode />,
      description: "Plateforme de data science collaborative.",
      tools: ["Data Prep", "ML", "Visualization"]
    },
    {
      id: 16,
      name: "PyCharm",
      category: "Outils",
      level: 88,
      icon: <FaCode />,
      description: "IDE Python utilisé au quotidien pour le développement, le débogage et la structuration de projets data science.",
      tools: ["Débogueur", "Environnements virtuels", "Refactoring"]
    },
    {
      id: 17,
      name: "Shiny",
      category: "Outils",
      level: 78,
      icon: <SiR />,
      description: "Framework R pour créer des applications web interactives dédiées à la visualisation et l'exploration de données.",
      tools: ["Dashboards interactifs", "R", "Reactive programming"]
    },
    {
      id: 18,
      name: "Probabilités",
      category: "Mathématiques",
      level: 85,
      icon: <FaCalculator />,
      description: "Maîtrise des concepts probabilistes pour l'analyse de données.",
      tools: ["Lois de probabilité", "Théorème central limite", "Simulation"]
    },
    {
      id: 19,
      name: "Statistiques",
      category: "Mathématiques",
      level: 88,
      icon: <FaCalculator />,
      description: "Méthodes statistiques pour l'inférence et l'analyse.",
      tools: ["Tests statistiques", "Régression", "ANOVA"]
    },
    {
      id: 20,
      name: "PowerPoint",
      category: "Outils",
      level: 80,
      icon: <FaFilePowerpoint />,
      description: "Création de présentations professionnelles.",
      tools: ["Diagrammes", "Animations", "Templates"]
    },
    {
      id: 21,
      name: "Word",
      category: "Outils",
      level: 75,
      icon: <FaFileWord />,
      description: "Rédaction et mise en forme de documents.",
      tools: ["Mise en page", "Styles", "Références"]
    }
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  const skillsByCategory = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter(s => s.category === cat)
    return acc
  }, {})

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
          Cliquez sur une catégorie pour explorer les compétences, puis sur une compétence pour en savoir plus.
        </motion.p>

        <div className="skills-sections">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              className="skill-category-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="category-header"
                onClick={() => {
                  setExpandedCategories(prev => {
                    const newSet = new Set(prev)
                    if (newSet.has(cat)) newSet.delete(cat)
                    else newSet.add(cat)
                    return newSet
                  })
                }}
                whileHover={{ scale: 1.02 }}
                style={{ cursor: 'pointer' }}
              >
                <h2>{cat}</h2>
                <span className="expand-icon">
                  {expandedCategories.has(cat) ? '−' : '+'}
                </span>
              </motion.div>

              <motion.div
                className="category-content"
                initial={false}
                animate={{
                  height: expandedCategories.has(cat) ? 'auto' : 0,
                  opacity: expandedCategories.has(cat) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="skills-grid">
                  {skillsByCategory[cat].map(skill => (
                    <motion.div
                      key={skill.id}
                      className="skill-item"
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <h3>{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {selectedSkill && (
          <motion.div
            className="skill-detail-panel"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
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
    </motion.div>
  )
}

export default Skills