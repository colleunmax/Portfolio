import Image from "next/image"

type Props = {
    type: 1 | 2 | 3
}

export default function Separation({type=3}: Props) {
    return <Image aria-hidden={true} src={`/sep-${type}.svg`} width={256} height={45} alt="separation" />
}