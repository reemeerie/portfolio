import { SKILLS } from "../../utils/Skill"
import { Badge } from "./Badge"
import "../../styles/TechBadges.css"

export default function TechBadges() {
  return (
    <section className="techBadges">
      <div className="techBadges__wrap">
        {SKILLS.map((s) => (
          <Badge key={s.label} skill={s} />
        ))}
      </div>
    </section>
  )
}
