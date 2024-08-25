import { svgFC } from "../icons/svg-type"

export type confidenceType = "neutral" | "ok" | "good"
export type preferenceType = "neutral" | "like" | "love"

export type techno = {
    Svg: svgFC,
    name: string,
    confidence: confidenceType,
    preference: preferenceType
}
