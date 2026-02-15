import { useEffect, useRef } from "react"
import music from "../../../public/music/music.mp3"
import { useMusicStore } from "../../stores/musicStore"
import { SolarPauseBold } from "../icons/SolarPauseBold"
import { SolarPlayBold } from "../icons/SolarPlayBold"
import { SolarVolumeLoudBold } from "../icons/SolarVolumeLoudBold"

export default function MusicPlayerComponent() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const { isPlaying, volume, toggle, setVolume } = useMusicStore()

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

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
        <div className="absolute bottom-10 left-10 z-20 flex flex-col text-white/70">
            <audio
                ref={audioRef}
                src={music}
                preload="auto"
                loop
            />
            <div className="flex items-center gap-2 glass-morphism h-20 border border-white/10 rounded-2xl pl-1 pr-6">
                <div className="h-[90%] relative">
                    <button
                        onClick={toggle}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {isPlaying
                            ? <SolarPauseBold className="w-5 h-5" />
                            : <SolarPlayBold className="w-5 h-5" />
                        }
                    </button>

                    <img src="images/music.jpeg" className="w-full h-full rounded-xl" />
                </div>

                <div className="flex flex-col justify-between h-full py-2">
                    <p className="text-sm font-normal">In The End</p>
                    <p className="text-xs font-normal">Linkin_Park</p>
                    <div className="flex items-center gap-2">
                        <SolarVolumeLoudBold className="w-5 h-5" />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="1"
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
