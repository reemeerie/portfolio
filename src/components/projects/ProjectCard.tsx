import { motion } from "framer-motion"
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react"
import ReactIcon from "../../assets/icons/react.svg"
import { useMemo } from "react"
import type { Project } from "../../utils/Project"
import "../../styles/ProjectCard.css"

export const ProjectCard = ({ project }: { project: Project }) => {
  const card = useMemo(
    () => ({
      hidden: { opacity: 0, y: 22, scale: 0.98, filter: "blur(10px)" },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          stiffness: 140,
          damping: 18,
          mass: 0.7,
        },
      },
    }),
    [],
  )

  return (
    <motion.article key={project.title} className="projectCard" variants={card}>
      <div>
        <header className="projectCardHeader">
          <h3 className="projectCardName">{project.title}</h3>
          <img src={ReactIcon} alt="" className="projectCardIcon" />
        </header>

        <p className="projectCardMeta">
          {project.date} |{" "}
          <span className="projectCardMetaRole">{project.role}</span>
        </p>

        <p className="projectCardDesc">{project.description}</p>

        <div className="projectCardStack">
          <span className="projectCardStackLabel">Tech Stack:</span>
          <div className="projectCardTags">
            {project.tech.map((t: string) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="projectCardFooter">
        {project.codeUrl && (
          <a
            className="projectLink"
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogoIcon size={16} />
            Code
          </a>
        )}

        {project.liveUrl && (
          <a
            className="projectLink projectLinkRight"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ArrowSquareOutIcon size={16} />
            Live
          </a>
        )}
      </div>
    </motion.article>
  )
}
