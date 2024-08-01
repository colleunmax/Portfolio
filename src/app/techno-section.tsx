"use client"
import TechnologyBtn from "@/components/home/technology-btn"
import { techno } from "@/components/home/techo-type"
import CssSvg from "@/components/icons/css"
import HtmlSvg from "@/components/icons/html"
import JavascriptSvg from "@/components/icons/javascript"
import LinuxSvg from "@/components/icons/linux"
import NextjsSvg from "@/components/icons/nextjs"
import PythonSvg from "@/components/icons/python"
import ReactSvg from "@/components/icons/reactjs"
import TailwindcssSvg from "@/components/icons/tailwindcss"
import TechnologyShowcase from "@/components/home/technology-showcase"
import { Dispatch, useState } from "react"

const technologies: techno[] = [
    {name: "Javascript", Svg: JavascriptSvg, confidence: "good", preference: "like"},
    {name: "Css", Svg: CssSvg, confidence: "good", preference: "like"},
    {name: "Html", Svg: HtmlSvg, confidence: "good", preference: "like"},
    {name: "Tailwindcss", Svg: TailwindcssSvg, confidence: "ok", preference: "like"},
    {name: "React", Svg: ReactSvg, confidence: "ok", preference: "like"},
    {name: "Nextjs", Svg: NextjsSvg, confidence: "ok", preference: "like"},
    {name: "Linux", Svg: LinuxSvg, confidence: "ok", preference: "love"},
    {name: "Python", Svg: PythonSvg, confidence: "good", preference: "neutral"}
]



export default function Technologies() {

    const [currentLang, setCurrentLang]: [techno | false, Dispatch<techno>] = useState(technologies[0] ?? false)

    const handleClick = (event: React.MouseEvent, name: string) => {
        const lang: techno | undefined = technologies.find((techno) => techno.name == name)

        if (lang) {
            setCurrentLang(lang)
        }
    }

    const TechnologiesFCs = technologies.map(({name, Svg, confidence, preference}) => {
        return <li key={name} className={name == currentLang.name ? "text-primary" : "text-tern"}>
            <TechnologyBtn name={name} Svg={Svg} onClick={handleClick} />
        </li>
    })

    return <section id="technologies" className="w-64 flex flex-col gap-6 items-center col-span-2 intermediate-md:w-full intermediate-md:border-t-2 intermediate-md:border-tern">
        <h2 className="font-bold text-2xl intermediate-md:hidden">Technologies</h2>
        <ul className="flex gap-6 flex-wrap justify-center">
            {TechnologiesFCs}
        </ul>
        <TechnologyShowcase Svg={currentLang.Svg} confidence={currentLang.confidence} preference={currentLang.preference} name={currentLang.name} />

    </section>
}