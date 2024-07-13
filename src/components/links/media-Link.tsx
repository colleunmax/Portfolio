import { svgFC }from "@/components/icons/svg-type"

type Props = {
    Svg: svgFC,
    href: string,
    label: string
}

export default function MediaLink({ Svg, href, label }: Props) {
    return <a href={href} className="text-tern hover:text-primary" target="_black" aria-label={label}>
        <Svg />
    </a>
}