import { useEffect, useState } from "react"
import { useMusicStore } from "../../stores/musicStore"

export default function LoadingComponent() {
    const [loadProgress, setLoadProgress] = useState(0)
    const startOnce = useMusicStore((s) => s.startOnce)

    useEffect(() => {
        const handleMessage = (event: any) => {
            if (event.data?.eventName !== "loadProgress") return
            const percent = Math.min(
                100,
                Math.max(0, event.data.loadFraction * 100)
            )
            setLoadProgress(Math.floor(percent))
            startOnce()
        }

        window.addEventListener("message", handleMessage)
        return () => window.removeEventListener("message", handleMessage)
    }, [])

    return (
        <div>
            {loadProgress}%
        </div>
    )
}
