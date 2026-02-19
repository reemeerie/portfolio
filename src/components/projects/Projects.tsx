import { useMemo, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { PROJECTS } from "../../utils/Project"
import "../../styles/Projects.css"

export const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const inView = useInView(ref, { once: true, amount: 0.1 })

  const container = useMemo(
    () => ({
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.06,
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
    <section className="projects" id="projects">
      <motion.div
        className="projectsWrapper"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        id="projects"
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
