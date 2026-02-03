import reactSvg from "../assets/icons/react.svg"
import tsSvg from "../assets/icons/typescript.svg"
import nodeSvg from "../assets/icons/nodejs.svg"
import expressSvg from "../assets/icons/express.svg"
import mongodbSvg from "../assets/icons/mongodb.svg"
import postgreSvg from "../assets/icons/postgresql.svg"
import mysqlSvg from "../assets/icons/mysql.svg"
import vercelSvg from "../assets/icons/vercel.svg"
import githubSvg from "../assets/icons/github.svg"
import gitSvg from "../assets/icons/git.svg"
import tailwindSvg from "../assets/icons/tailwind.svg"
import jiraSvg from "../assets/icons/Jira.svg"
import kotlinSvg from "../assets/icons/Kotlin.svg"
import linuxSvg from "../assets/icons/linux.svg"
import postmanSvg from "../assets/icons/postman.svg"
import trelloSvg from "../assets/icons/Trello.svg"
import windowsSvg from "../assets/icons/windows.svg"

export type Skill = {
  label: string
  iconSrc: string
}

export const SKILLS: Skill[] = [
  { label: "React", iconSrc: reactSvg },
  { label: "TypeScript", iconSrc: tsSvg },
  { label: "TailwindCSS", iconSrc: tailwindSvg },
  { label: "Node.js", iconSrc: nodeSvg },
  { label: "Express", iconSrc: expressSvg },
  { label: "MySQL", iconSrc: mysqlSvg },
  { label: "Git", iconSrc: gitSvg },
  { label: "Github", iconSrc: githubSvg },
  { label: "PostgreSQL", iconSrc: postgreSvg },
  { label: "MongoDB", iconSrc: mongodbSvg },
  { label: "Jira", iconSrc: jiraSvg },
  { label: "Kotlin", iconSrc: kotlinSvg },
  { label: "Postman", iconSrc: postmanSvg },
  { label: "Trello", iconSrc: trelloSvg },
  { label: "Linux", iconSrc: linuxSvg },
  { label: "Windows", iconSrc: windowsSvg },
  { label: "Vercel", iconSrc: vercelSvg },
]
