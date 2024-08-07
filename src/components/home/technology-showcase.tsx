import { techno } from "./techo-type"
import { confidenceType, preferenceType } from "./techo-type"

type Props = techno & {
    // ...
}

export default function TechnologyShowcase({Svg, confidence, preference}: Props) {

    const ConfidenceOrPreferenceFC = ({levelOf}: {levelOf: confidenceType | preferenceType}) => {
        let className = ""

        console.log(levelOf)

        switch (levelOf) {
            case "neutral": className = " text-ternary"; break
            case "ok": className = "text-secondary"; break
            case "good" || "like": className = "text-primary"; break
            case "love": className = "bg-clip-text text-transparent bg-gradient-to-r from-love-gradiant-start to-love-gradiant-end"; break
            default: ""
        }

        return <span className={`font-bold italic ${className}`}>{levelOf}</span>
    }

    return <div id="selected-lang" className="flex items-center gap-4 bg-secondary-background py-2 px-2 rounded-sm min-w-64">
        <Svg size={64} />
        <ul className=" capitalize text-sm text-nowrap text-ternary">
            <li>Confidence: <ConfidenceOrPreferenceFC levelOf={confidence} /></li>
            <li>Preference: <ConfidenceOrPreferenceFC levelOf={preference} /></li>
        </ul>
    </div>
}