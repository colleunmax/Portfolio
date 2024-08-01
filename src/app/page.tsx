import Separation from "@/components/home/separation"
import Education from "./edu-section"
import Intro from "./intro-section"
import Projects from "./projects-section"
import Technologies from "./techno-section"

export default function Home() {
    return <main className="flex flex-col items-center gap-11 py-12 intermediate-md:grid intermediate-md:grid-cols-2 intermediate-md:mx-32 intermediate-md:h-full intermediate-md:min-h-[600px overflow-hidden">
        <Intro />
        <Separation type={1} />
        <Education />
        <Separation type={2} />
        <Projects />
        <Separation type={3} />
        <Technologies />
    </main>
}