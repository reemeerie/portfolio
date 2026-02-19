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
          text="¡Hola! Soy Thomas, un Desarrollador Full Stack motivado por el aprendizaje constante
          y la creación de soluciones digitales eficientes, funcionales, escalables y estéticas.
          Me apasiona desarrollar aplicaciones centradas en el usuario, aplicar buenas prácticas
          y seguir creciendo en entornos tanto colaborativos como competitivos, donde cada desafío es una oportunidad para mejorar."
          step={1}
          range={0.75}
        />
      </motion.div>
    </section>
  )
}
