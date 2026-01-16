import { motion } from "framer-motion"
import SkillCard from "../components/SkillCard"

function About() {
  const skills = [
    { skill: "Python", icon: "🐍", level: 90 },
    { skill: "SQL", icon: "🗄️", level: 85 },
    { skill: "Power BI", icon: "📊", level: 80 },
    { skill: "Excel", icon: "📈", level: 85 },
    { skill: "Machine Learning", icon: "🤖", level: 75 },
    { skill: "Data Visualization", icon: "📉", level: 80 },
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
          className="bio-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">À propos de moi</h1>
          <div className="bio-content">
            <div className="bio-text">
              <p>
                Étudiant en licence Professionnelle de Datamining à l'université Gustave Eiffel,
                je suis passionné par la transformation des données brutes en insights stratégiques.
                Mon approche méthodique et organisée me permet d'extraire de la valeur des données
                pour aider à la prise de décision.
              </p>
              <p>
                Avec une solide formation en analyse de données et en visualisation,
                je maîtrise les outils et techniques modernes pour créer des solutions
                data-driven qui répondent aux besoins métiers.
              </p>
            </div>
            <div className="bio-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projets Data</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Années d'études</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Compétences</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.skill}
                skill={skill.skill}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default About
