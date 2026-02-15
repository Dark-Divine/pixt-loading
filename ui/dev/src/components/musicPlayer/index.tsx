import { useEffect, useRef } from "react"
import music from "../../../public/music/music.mp3"
import { useMusicStore } from "../../stores/musicStore"

export default function MusicPlayerComponent() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const { isPlaying, volume, toggle, setVolume } = useMusicStore()

    // sync volume
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    // sync play state
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.play().catch(() => { })
        } else {
            audio.pause()
        }
    }, [isPlaying])

    return (
        <>
            <audio ref={audioRef} src={music} preload="auto" loop />

            <button onClick={toggle}>
                {isPlaying ? "Pause" : "Play"}
            </button>

            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
            />
        </>
    )
}
