export type Project = {
  title: string
  date: string
  role: string
  description: string
  tech: string[]
  codeUrl?: string
  liveUrl?: string
}

export const PROJECTS: Project[] = [
  {
    title: "AgriSure",
    date: "March 2025 - Present",
    role: "Full Stack",
    description:
      "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    codeUrl: "https://github.com/",
  },
  {
    title: "BuildBridge",
    date: "March 2025 - Present",
    role: "Full Stack",
    description:
      "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "FarmConnect",
    date: "Feb 2025 - Present",
    role: "Full Stack",
    description:
      "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
]