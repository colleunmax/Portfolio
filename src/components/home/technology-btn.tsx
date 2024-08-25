import { svgFC } from "../icons/svg-type"

type Props = {
    Svg: svgFC,
    name: string,
    onClick: (event: React.MouseEvent, name: string) => void
}

export default function TechnologyBtn({Svg, name, onClick}: Props) {

    const handleClick = (event: React.MouseEvent) => {
        onClick(event, name)
    }

    return <button className="focus:outline-none focus:outline-2 focus:outline-secondary focus:outline-offset-2 focus:text-secondary" onClick={handleClick}>
        <Svg />
    </button>
}