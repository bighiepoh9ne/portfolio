import { motion } from "framer-motion"
import { useState } from "react"

function getGithubPreviewImage(url) {
  try {
    const { pathname } = new URL(url)
    const [, owner, repo] = pathname.split("/")
    if (!owner || !repo) return null
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`
  } catch {
    return null
  }
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)
  const previewImage = project.github ? getGithubPreviewImage(project.github) : null

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.06, zIndex: 5 }}
    >
      {project.github && (
        <div className="project-preview">
          {previewImage && !imgError ? (
            <img
              src={previewImage}
              alt={`Aperçu GitHub — ${project.title}`}
              className="project-preview-img"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-preview-fallback">GitHub</div>
          )}
          <div className="project-preview-overlay" />
          <span className="project-preview-badge">GitHub</span>
        </div>
      )}

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
            >
              Voir sur GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
