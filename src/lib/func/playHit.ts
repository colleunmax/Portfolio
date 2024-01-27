import hit from "$lib/assets/hit.mp3"

export default function playHit() {
    new Audio(hit).play()
    return hit
}