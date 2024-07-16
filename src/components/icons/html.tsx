import { svgComponent, SvgProps } from "./svg-type"

export default function HtmlSvg({ size }: SvgProps): svgComponent {
    return (
        <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>A shield with a white number "5" in the center. (HTML's Logo)</title>
            <path d="M3.97571 2.4375L6.1643 26.9578L15.9853 29.6706L25.8334 26.9609L28.0242 2.4375H3.97571ZM23.472 8.24291L23.3349 9.81178L23.2745 10.5312H11.754L12.029 13.5938H23.0006L22.9271 14.353L22.2199 22.2541L22.1678 22.7506L16 24.4457V24.4462L15.9925 24.4501L9.8288 22.8263L9.41033 18.1875H12.4324L12.6465 20.576L15.9906 21.4688H16V21.3493L19.3589 20.5017L19.7097 16.6562H9.2758L8.53577 8.31816L8.4638 7.46875H23.5442L23.472 8.24291Z" />
        </svg>

    )
}