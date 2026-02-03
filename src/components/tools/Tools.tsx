import TechBadges from "./TechBadges"
import { useRef, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import "../../styles/Tools.css"

export const Tools = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  const container = useMemo(
    () => ({
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.06, // 👈 entra uno a uno
          delayChildren: 0.1,
        },
      },
    }),
    [],
  )

  const title = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          stiffness: 90,
          damping: 18,
          mass: 0.8,
        },
      },
    }),
    [],
  )

  return (
    <section className="toolsContainer">
      <motion.div
        ref={ref}
        className="toolsWrapper"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.h3 className="title" variants={title}>
          Las herramientas que utilizo
        </motion.h3>
        <TechBadges />
      </motion.div>
    </section>
  )
}
