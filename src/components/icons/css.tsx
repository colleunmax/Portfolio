import { svgComponent, SvgProps } from "./svg-type"

export default function CssSvg({ size }: SvgProps): svgComponent {
    return (
        <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>A shield with a white number "3" in the center (CSS's logo)</title>
            <path d="M4 2L6.19953 26.6932L16.0691 29.445L25.9662 26.6831L28.1675 2H4ZM23.598 7.65731L22.8659 15.8834L22.8681 15.9278L22.865 16.03V16.0291L22.3448 21.7809L22.2875 22.2919L16.0837 24.0078L16.0789 24.0122L9.88591 22.2867L9.46656 17.5312H12.5035L12.7189 19.9493L16.0846 20.8615L16.0837 20.8633V20.8628L19.4619 19.9377L19.8189 16H12.757L12.6964 15.3343L12.5584 13.7749L12.486 12.9375H20.0873L20.3638 9.875H8.78625L8.72566 9.20978L8.58784 7.64987L8.51522 6.8125H23.6704L23.598 7.65731Z" />
        </svg>
    )
}