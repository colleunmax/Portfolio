import music from "$lib/assets/thisWay.mp3"

export default function playBossMusic() {
    const track = new Audio(music)
    track.volume = 0.1
    track.loop = true
    track.play()
    return track
}