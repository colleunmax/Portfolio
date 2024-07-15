import Education from "./edu-section"
import Intro from "./intro-section"

export default function Home() {
    return <main className="flex flex-col items-center gap-11 my-8">
        <Intro />
        ----------------------------
        <Education />
    </main>
}