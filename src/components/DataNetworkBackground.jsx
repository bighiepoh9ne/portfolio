import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function generateNodes(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 4
  }))
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

function buildLinks(nodes, maxDistance) {
  const links = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (distance(nodes[i], nodes[j]) < maxDistance) {
        links.push({ id: `${i}-${j}`, a: nodes[i], b: nodes[j], duration: Math.random() * 4 + 6 })
      }
    }
  }
  return links
}

function DataNetworkBackground() {
  const [nodes, setNodes] = useState([])
  const [links, setLinks] = useState([])

  useEffect(() => {
    const generated = generateNodes(40)
    setNodes(generated)
    setLinks(buildLinks(generated, 15))
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        {links.map((link) => (
          <motion.line
            key={link.id}
            x1={`${link.a.x}%`}
            y1={`${link.a.y}%`}
            x2={`${link.b.x}%`}
            y2={`${link.b.y}%`}
            stroke="#3B82F6"
            strokeWidth="1"
            initial={{ opacity: 0.04 }}
            animate={{ opacity: [0.04, 0.16, 0.04] }}
            transition={{ duration: link.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          style={{
            position: "absolute",
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            borderRadius: "50%",
            backgroundColor: "#60A5FA",
            boxShadow: "0 0 6px rgba(59, 130, 246, 0.9)"
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default DataNetworkBackground
