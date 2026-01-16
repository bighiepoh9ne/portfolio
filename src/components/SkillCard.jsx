import { motion } from "framer-motion"

function SkillCard({ skill, icon, level }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-name">{skill}</h3>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
        {level}%
      </p>
    </motion.div>
  )
}

export default SkillCard
