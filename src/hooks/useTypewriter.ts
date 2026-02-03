import { useState, useEffect } from "react"

type TypewriterPhase = "typing" | "pausing" | "deleting"

export const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState<number>(0)
  const [phase, setPhase] = useState<TypewriterPhase>("typing")
  const [text, setText] = useState<string>("")

  // velocidades (ms)
  const TYPING_SPEED = 80
  const DELETING_SPEED = 45
  const PAUSE_AFTER_TYPED = 900
  const PAUSE_BEFORE_NEXT = 250

  const currentWord = words[index] ?? ""

  useEffect(() => {
    let timeout: number

    if (phase === "typing") {
      const next = currentWord.slice(0, text.length + 1)
      /* console.log(next) */
      timeout = window.setTimeout(() => {
        setText(next)
        if (next === currentWord) setPhase("pausing")
      }, TYPING_SPEED)
    }

    if (phase === "pausing") {
      timeout = window.setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPED)
    }

    if (phase === "deleting") {
      const next = currentWord.slice(0, Math.max(0, text.length - 1))
      timeout = window.setTimeout(
        () => {
          setText(next)

          if (next.length === 0) {
            setPhase("typing")
            setIndex((i) => (i + 1) % words.length)
          }
        },
        text.length === 0 ? PAUSE_BEFORE_NEXT : DELETING_SPEED
      )
    }

    return () => window.clearTimeout(timeout)
  }, [phase, text, currentWord, words.length])

  return text
}
