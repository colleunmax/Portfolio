import { svgComponent, SvgProps } from "./svg-type"

export default function NextjsSvg({ size }: SvgProps): svgComponent {
    return (
        <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>The Next.js logo is a simple black circle with the letter "N" inside. The vertical stroke of the "N" extends outside the circle's boundary (Nextjs's logo)</title>
            <path d="M16 2C12.287 2 8.72601 3.475 6.10051 6.10051C3.475 8.72601 2 12.287 2 16C2 19.713 3.475 23.274 6.10051 25.8995C8.72601 28.525 12.287 30 16 30C18.7665 29.9945 21.4694 29.1695 23.7674 27.6292L12.2843 12.7931V21.5952H10.4V10.4H12.7555L25.2516 26.4965C26.7424 25.1839 27.9368 23.5691 28.7555 21.7593C29.5742 19.9496 29.9984 17.9863 30 16C30 12.287 28.525 8.72601 25.8995 6.10051C23.274 3.475 19.713 2 16 2ZM19.8887 10.4H21.7555V21.0697L19.8887 18.6184V10.4ZM25.1781 26.57L25.1538 26.591C25.1619 26.584 25.17 26.577 25.1781 26.57Z" />
        </svg>
    )
}