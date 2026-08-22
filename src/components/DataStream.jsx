import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const CHARS = "01"

function randomChar() {
  return Math.random() > 0.4 ? Math.floor(Math.random() * 10) : CHARS[Math.floor(Math.random() * CHARS.length)]
}

function randomColumn(length) {
  return Array.from({ length }, randomChar)
}

function DataStream() {
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const count = 22
    const cols = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: (i / count) * 100 + (Math.random() * 3 - 1.5),
      duration: Math.random() * 12 + 14,
      delay: Math.random() * 10,
      chars: randomColumn(16),
      opacity: Math.random() * 0.12 + 0.05
    }))
    setColumns(cols)
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
      {columns.map((col) => (
        <motion.div
          key={col.id}
          style={{
            position: "absolute",
            left: `${col.left}%`,
            top: "-40%",
            fontFamily: "var(--mono-font)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#60A5FA",
            opacity: col.opacity,
            whiteSpace: "pre",
            textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
          }}
          animate={{ y: ["0%", "180%"] }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            ease: "linear",
            delay: col.delay
          }}
        >
          {col.chars.map((c, idx) => (
            <div key={idx}>{c}</div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default DataStream
