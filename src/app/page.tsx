import Separation from "@/components/home/separation"
import Education from "./edu-section"
import Intro from "./intro-section"
import Projects from "./projects-section"
import Technologies from "./techno-section"

export default function Home() {
    return <main className="
    flex flex-col items-center
    gap-11 intermediate-md:gap-0
    intermediate-md:grid intermediate-md:grid-cols-2 intermediate-md:items-start
    py-12 intermediate-md:pb-0 intermediate-md:pt-8
    intermediate-md:h-full
    intermediate-md:overflow-hidden
     content-end">
        <Intro />
        <Separation type={1} />
        <Education />
        <Separation type={2} />
        <Projects />
        <Separation type={3} />
        <Technologies />
    </main>
}