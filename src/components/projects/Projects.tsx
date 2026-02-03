import { useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { PROJECTS } from "../../utils/Project"
import "../../styles/Projects.css"

export const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const inView = useInView(ref, { once: true, amount: 0.25 })

  const container = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    }),
    [],
  )

  const title = useMemo(
    () => ({
      hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
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
    <section className="projects" id="projects">
      <motion.div
        className="projectsWrapper"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.h3 className="title" variants={title}>
          Algunos proyectos en los que estuve trabajando
        </motion.h3>

        <div className="projectsGrid">
          {PROJECTS.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
