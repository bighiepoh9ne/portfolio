import { motion } from "framer-motion"
import { projects } from "../data/project"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <motion.div
      className="page projects-page"
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
          Mes Projets
        </motion.h1>
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
