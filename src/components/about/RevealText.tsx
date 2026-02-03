import { useEffect, useMemo, useRef, useState } from "react"
import "../../styles/RevealText.css"

type Props = {
  text: string
  /* cuántas palabras se pintan por “paso” (más alto = más rápido) */
  step?: number
  /** ratio de scroll dentro del bloque para completar (0.6 = se completa rápido) */
  range?: number
}

export const RevealText = ({
  text,
  step = 1,
  range = 0.75
}: Props) => {
  const words = useMemo(() => text.split(/\s+/), [text])
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      // progreso 0..1 mientras el bloque “pasa” por la ventana
      // start: cuando la parte superior entra
      // end: cuando el bloque avanzó 'range' de la altura de viewport
      const start = vh * 0.85 // más alto => empieza a pintar antes
      const end = vh * (0.85 - range)

      const raw = (start - rect.top) / (start - end) // 0..1 aprox
      const progress = Math.min(1, Math.max(0, raw))

      const target = Math.ceil(progress * words.length)

      // step permite “escalonar” más suave o más rápido
      setActiveCount(Math.min(words.length, Math.ceil(target / step) * step))
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [words.length, step, range])

  return (
    <p ref={ref} className={`reveal`}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`reveal__word ${i < activeCount ? "isOn" : ""}`}
        >
          {w}
          {/* mantener espacios */}
          <span className="reveal__space"> ‎</span>
        </span>
      ))}
    </p>
  )
}
