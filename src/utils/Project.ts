import ReactIcon from "../assets/icons/react.svg"
import NodeIcon from "../assets/icons/nodejs.svg"

export type Project = {
  title: string
  date: string
  role: string
  description: string
  tech: string[]
  codeUrl?: string
  liveUrl?: string
  techIcon: string
}

export const PROJECTS: Project[] = [
  {
    title: "Managio",
    date: "2024",
    role: "Front End",
    description:
      "Desarrollo de landing page para un sistema de gestión empresarial en base a un diseño proporcionado por el equipo de UX. Desarrollada en su totalidad con React, MantineUI, TanStack para manejo de formularios y ReactRouter para ruteo entre vistas.",
    tech: ["React JS", "MantineUI", "TanStack", "ReactRouter"],
    liveUrl: "https://managio.com.ar/",
    techIcon: ReactIcon,
  },
  {
    title: "SwitchIT",
    date: "2025",
    role: "Front End",
    description:
      "Desarrollo y diseño de landing page para empresa informática de soporte técnico y servicios web. Hecha en su totalidad con React, MantineUI, TanStack para manejo de formularios y ReactRouter para ruteo entre vistas.",
    tech: ["React JS", "MantineUI", "TanStack", "ReactRouter"],
    liveUrl: "https://switchit.com.ar/",
    techIcon: ReactIcon,
  },
  {
    title: "Barbman Panamá",
    date: "2025",
    role: "Front End",
    description:
      "Desarrollo de landing page para una barbería en base a un template proporcionado por el mismo cliente. Hecha en su totalidad con React, MantineUI y ReactRouter para ruteo entre vistas.",
    tech: ["React JS", "MantineUI", "ReactRouter"],
    liveUrl: "https://barbmanpanama.com/",
    techIcon: ReactIcon,
  },
  {
    title: "Just Another Notes App",
    date: "2026",
    role: "Front End",
    description:
      "Aplicación de gestión y almacenamiento de notas en una base de datos mediante autenticación de usuario. Front end desarrollado en su totalidad con React, CSS, ReactRouter para ruteo entre vistas y Axios como gestor de peticiones HTTP.",
    tech: ["React JS", "CSS", "ReactRouter", "Axios", "Netlify"],
    codeUrl: "https://github.com/reemeerie/jana-app",
    liveUrl: "https://jana-app.netlify.app/",
    techIcon: ReactIcon,
  },
  {
    title: "Just Another Notes API",
    date: "2026",
    role: "Back End",
    description:
      "API para una aplicación de gestión y almacenamiento de notas. Back end desarrollado en su totalidad con Node, Express, MySQL como motor de base de datos, jsonwebtoken para autenticación y bcrypt para hash seguro de contraseñas",
    tech: ["Node.js", "Express", "MySQL", "JWT", "Bcrypt", "Vercel"],
    codeUrl: "https://github.com/reemeerie/jana-api",
    techIcon: NodeIcon,
  },
]
