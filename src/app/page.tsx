import Education from "./edu-section"
import Intro from "./intro-section"
import Projects from "./projects-section"
import Technologies from "./techno-section"

export default function Home() {
    return <main className="flex flex-col items-center gap-11 my-8">
        <Intro />
        ----------------------------
        <Education />
        ----------------------------
        <Projects />
    </main>
}