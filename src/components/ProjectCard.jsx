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

const TECH_COLORS = {
  Python: { bg: "#3776AB", color: "#FFD43B" },
  R: { bg: "#276DC3", color: "#ffffff" },
  SQL: { bg: "#00758F", color: "#ffffff" },
  Excel: { bg: "#217346", color: "#ffffff" },
  VBA: { bg: "#8B008B", color: "#ffffff" },
  "Power BI": { bg: "#F2C811", color: "#1a1a1a" },
  DAX: { bg: "#F2C811", color: "#1a1a1a" },
  Word: { bg: "#2B579A", color: "#ffffff" },
  Powerpoint: { bg: "#B7472A", color: "#ffffff" }
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
          {project.tech.map((tech, index) => {
            const colors = TECH_COLORS[tech]
            return (
              <span
                key={index}
                className="tech-tag"
                style={colors ? { background: colors.bg, color: colors.color } : undefined}
              >
                {tech}
              </span>
            )
          })}
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
