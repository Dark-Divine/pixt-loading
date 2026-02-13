import { useEffect, useRef, useState } from 'react'
import { SolarPlayBold } from "../../components/icons/SolarPlayBold"
import { SolarVolumeLoudBold } from "../../components/icons/SolarVolumeLoudBold"
import { SolarPauseBold } from '../icons/SolarPauseBold'
import music from "../../../public/music/music.mp3"

export default function MusicPlayerComponent() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const onMessage = (event: any) => {
            if (event.data?.eventName !== 'loadProgress') return

            const audio = audioRef.current
            if (!audio) return

            audio.muted = false
            audio.volume = 1

            audio.play()
                .then(() => setIsPlaying(true))
                .catch(() => { })
        }

        window.addEventListener("message", onMessage)
        return () => window.removeEventListener("message", onMessage)
    }, [])

    const togglePlayMusic = () => {
        const audio = audioRef.current
        if (!audio) return

        if (audio.paused) {
            audio.play()
            setIsPlaying(true)
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }

    return (
        <div className="absolute bottom-10 left-10 z-20 flex flex-col text-white/70">
            {/* autoplay بی‌صدا */}
            <audio
                ref={audioRef}
                src={music}
                preload="auto"
                muted
                autoPlay
                loop
            />

            <div className="flex items-center gap-2 glass-morphism h-20 border border-white/10 rounded-2xl pl-1 pr-6">
                <div className="h-[90%] relative">
                    <button
                        onClick={togglePlayMusic}
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
                    <p className="text-sm">Music Name</p>

                    <div className="flex items-center gap-2">
                        <SolarVolumeLoudBold className="w-5 h-5" />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="1"
                            onChange={(e) => {
                                if (audioRef.current)
                                    audioRef.current.volume = Number(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
