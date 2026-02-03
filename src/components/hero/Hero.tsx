import { useMemo } from "react"
import { motion } from "framer-motion"
import {
  CaretDownIcon,
  DownloadSimpleIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react"
import { useTypewriter } from "../../hooks/useTypewriter"
import "../../styles/Hero.css"

type Props = {
  mp4Src: string
}

export const Hero = ({ mp4Src }: Props) => {
  const words = useMemo(
    () => [
      "Resuelvo problemas. ",
      "Amo programar. ",
      "Soy Desarrollador Full Stack. ",
    ],
    [],
  )

  const typed = useTypewriter(words)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // stagger para que entren de a uno
        delayChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { stiffness: 120, damping: 18, mass: 0.7 },
    },
  }

  const arrowAnim = {
    y: [0, 8, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }

  return (
    <section className="hero">
      {/* Video de fondo */}
      <div className="heroBg" aria-hidden="true">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={mp4Src} type="video/mp4" />
        </video>

        {/* Layers gradientes para legibilidad */}
        <div className="heroOverlay" />
        <div className="heroVignette" />
      </div>

      {/* Contenido */}
      <motion.div
        className="heroInner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="heroKicker" variants={item}>
          Hola, mi nombre es
        </motion.p>

        <motion.h1 className="heroName" variants={item}>
          Thomas Reemeerie
        </motion.h1>

        <motion.div className="heroType" variants={item}>
          <span className="heroTypeText" aria-label={typed}>
            {typed}
            <span className="heroCursor" aria-hidden="true">
              |
            </span>
          </span>
        </motion.div>

        <motion.p className="heroDesc" variants={item}>
          Innovative Full Stack Developer passionate about creating seamless and
          impactful web solutions. Eager to leverage modern technologies to
          solve real-world problems and contribute to dynamic team environments.
        </motion.p>

        <motion.div className="heroActions" variants={item}>
          <a className="btn btnPrimary" href="#projects">
            View My Work
          </a>
          <a className="btn btnGhost" href="/Thomas_Reemeerie_CV.pdf" download>
            <DownloadSimpleIcon size={32} />
            Download CV
          </a>
        </motion.div>

        <motion.div className="heroSocial" variants={item}>
          <a
            className="iconBtn"
            href="https://www.linkedin.com/in/thomas-reemeerie/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogoIcon size={20} />
          </a>
          <a
            className="iconBtn"
            href="https://github.com/reemeerie"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogoIcon size={20} />
          </a>
          <a className="iconBtn" href="mailto:thomasreemeerie0@gmail.com">
            <EnvelopeIcon size={20} />
          </a>
        </motion.div>

        <motion.a
          className="heroDown"
          href="#about"
          aria-label="Scroll down"
          variants={item}
        >
          <motion.span
            className="heroDownIcon"
            animate={arrowAnim}
            aria-hidden="true"
          >
            <CaretDownIcon size={32} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
