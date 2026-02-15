import { create } from "zustand"

interface MusicState {
    isPlaying: boolean
    volume: number
    hasStarted: boolean

    startOnce: () => void
    toggle: () => void
    setVolume: (v: number) => void
}

export const useMusicStore = create<MusicState>((set, get) => ({
    isPlaying: false,
    volume: 1,
    hasStarted: false,

    startOnce: () => {
        if (!get().hasStarted) {
            set({ isPlaying: true, hasStarted: true })
        }
    },

    toggle: () => set({ isPlaying: !get().isPlaying }),

    setVolume: (v) => set({ volume: v }),
}))
