import { techno } from "./techo-type"
import TechnologyShowcase from "./technology-showcase"
import { useCallback, useMemo, useState } from "react"

export default function TechnologyHoverShowcase({Svg, name, confidence, preference}: techno) {

    const [isHovering, setHovering] = useState(false)
    const [isFocus, setFocus] = useState(false)

    const handleMouseEnter = useCallback(() => {
        if (!isFocus) {
            setHovering(true)
        }
    }, [isFocus])

    const handleMouseLeave = useCallback(() => {
        if (!isFocus) {
            setHovering(false)
        }
    }, [isFocus])

    const handleFocusIn = useCallback(() => {
        setHovering(true)
        setFocus(true)
    }, [])

    const handleFocusOut = useCallback(() => {
        setHovering(false)
        setFocus(false)
    }, [])

    const HoveringClassName = useMemo(() => {
        return isHovering ? "block" : "hidden"
    }, [isHovering])

    return <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onFocus={handleFocusIn}
    onBlur={handleFocusOut}
    tabIndex={0}
    className="
    relative
    p-2
    before:hidden before:bg-secondary-background 
    before:w-12 before:h-12
    before:absolute
    before:-z-10 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
    before:rounded-b-full
    hover:before:block
    focus:before:block
    focus:outline-none
    focus:outline-2 focus:outline-primary focus:rounded-full focus:-outline-offset-2">
        <Svg />
        <div className={` text-primary absolute top-0 -translate-y-full -translate-x-2 ${HoveringClassName}`}>
            <TechnologyShowcase name={name} Svg={Svg} confidence={confidence} preference={preference} />
        </div>
    </div>
}