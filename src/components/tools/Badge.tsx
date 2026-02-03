import { useMemo } from "react"
import { motion } from "framer-motion"
import type { Skill } from "../../utils/Skill"
import "../../styles/Badge.css"

export const Badge = ({ skill }: { skill: Skill }) => {
  const item = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        scale: 0.92,
        filter: "blur(8px)",
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          stiffness: 160,
          damping: 18,
          mass: 0.6,
        },
      },
    }),
    [],
  )

  return (
    <motion.span
      className="techBadge"
      variants={item}
      whileHover={{
        y: -2,
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.12), 0 18px 50px rgba(0,0,0,0.45)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="techBadgeIcon" aria-hidden="true">
        <img src={skill.iconSrc} alt="" draggable={false} />
      </span>
      <span className="techBadgeLabel">{skill.label}</span>
    </motion.span>
  )
}
