import { useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { RevealText } from "./RevealText"
import "../../styles/About.css"

export const About = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true, amount: 0.45 })

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
    <section className="aboutContainer" id="about">
      <motion.div
        ref={ref}
        className="aboutWrapper"
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 18, filter: "blur(10px)" }
        }
        transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.8 }}
      >
        <motion.h3 className="title" variants={title}>
          Un poco sobre mí
        </motion.h3>
        <RevealText
          text="Hello! I'm Thomas, a driven Full Stack Developer with a strong foundation in
          computer science and a knack for crafting efficient, user-centric applications.
          My journey into tech is fueled by a desire to learn, innovate, and
          contribute to projects that make a difference.
          I thrive in collaborative environments and am always excited to tackle new challenges."
          step={1}
          range={0.75}
        />
      </motion.div>
    </section>
  )
}
