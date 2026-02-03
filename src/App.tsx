import { Projects } from "./components/projects/Projects"
import { About } from "./components/about/About"
import { Tools } from "./components/tools/Tools"
import { Hero } from "./components/hero/Hero"
import "./App.css"

function App() {
  return (
    <>
      <Hero mp4Src="/bg/space.mp4" />
      <About />
      <Tools />
      <Projects />
    </>
  )
}

export default App
