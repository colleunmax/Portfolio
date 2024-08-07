import { techno } from "./techo-type"
import TechnologyShowcase from "./technology-showcase"
import { useCallback, useMemo, useState } from "react"

export default function TechnologyHoverShowcase({Svg, name, confidence, preference}: techno) {

    const [isHovering, setHovering] = useState(false)

    const handleMouseEnter = useCallback(() => {
        setHovering(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setHovering(false)
    }, [])

    const HoveringClassName = useMemo(() => {
        return isHovering ? "block" : "hidden"
    }, [isHovering])

    return <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} 
    className="
    relative
    p-2
    before:hidden before:bg-secondary-background 
    before:w-12 before:h-12
    before:absolute
    before:-z-10 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
    before:rounded-b-full
    hover:before:block">
        <Svg />
        <div className={` text-primary absolute top-0 -translate-y-full -translate-x-2 ${HoveringClassName}`}>
            <TechnologyShowcase name={name} Svg={Svg} confidence={confidence} preference={preference} />
        </div>
    </div>
}