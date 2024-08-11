import { svgFC }from "@/components/icons/svg-type"

type Props = {
    Svg: svgFC,
    href: string,
    label: string
}

export default function MediaLink({ Svg, href, label }: Props) {
    return <a href={href} className="
    text-tern 
    hover:text-primary focus:text-primary
    focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary" target="_black" aria-label={label}>
        <Svg />
    </a>
}