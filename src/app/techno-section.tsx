"use client"
import { useMemo } from "react"
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
import TechnologyHoverShowcase from "@/components/home/technology-hover-showcase"
import { Dispatch, useEffect, useState } from "react"

const technologies: techno[] = [
    {name: "Javascript", Svg: JavascriptSvg, confidence: "good", preference: "like"},
    {name: "Css", Svg: CssSvg, confidence: "good", preference: "like"},
    {name: "Html", Svg: HtmlSvg, confidence: "good", preference: "like"},
    {name: "Tailwindcss", Svg: TailwindcssSvg, confidence: "ok", preference: "love"},
    {name: "React", Svg: ReactSvg, confidence: "ok", preference: "like"},
    {name: "Nextjs", Svg: NextjsSvg, confidence: "ok", preference: "like"},
    {name: "Linux", Svg: LinuxSvg, confidence: "ok", preference: "love"},
    {name: "Python", Svg: PythonSvg, confidence: "good", preference: "neutral"}
]



export default function Technologies() {

    const [currentLang, setCurrentLang]: [techno | false, Dispatch<techno>] = useState(technologies[0] ?? false)
    const [width, setWidth] = useState(1920)

    useEffect(() => {
        setWidth(window.innerWidth)
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("reize", handleWindowResize)
    }, [])

    const handleClick = (event: React.MouseEvent, name: string) => {
        const lang: techno | undefined = technologies.find((techno) => techno.name == name)

        if (lang) {
            setCurrentLang(lang)
        }
    }

    const isMobile = useMemo(() => {
        return width < 1350
    }, [width])

    const TechnologiesFCs = useMemo(() => {
        return technologies.map(({name, Svg, confidence, preference}) => {
            if (isMobile) {
            return <li key={name} className={name == currentLang.name ? "text-primary" : "text-tern"}>
                <TechnologyBtn name={name} Svg={Svg} onClick={handleClick} />
            </li>
            } else {
                return <li key={name} className="text-tern hover:text-primary">
                    <TechnologyHoverShowcase name={name} Svg={Svg} confidence={confidence} preference={preference} />
                </li>
            }
        })
    }, [isMobile, currentLang])

    return <section id="technologies" className="
    flex flex-col gap-6 items-center col-span-2 intermediate-md:items-start intermediate-md:justify-center
    w-64 intermediate-md:w-full intermediate-md:h-20
    intermediate-md:border-t-2 intermediate-md:border-tern
    intermediate-md:pl-8 intermediate-md:mt-8">
        <h2 className="font-bold text-2xl intermediate-md:hidden">Technologies</h2>
        <ul className="flex gap-4 flex-wrap justify-center">
            {TechnologiesFCs}
        </ul>
        { isMobile ? <TechnologyShowcase Svg={currentLang.Svg} confidence={currentLang.confidence} preference={currentLang.preference} name={currentLang.name} /> : <></>}

    </section>
}