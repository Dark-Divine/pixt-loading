// stores/useSliderStore.ts
import { create } from "zustand";

interface SliderState {
    current: number;
    total: number;
    setTotal: (total: number) => void;
    next: () => void;
}

export const useSliderStore = create<SliderState>((set, get) => ({
    current: 0,
    total: 0,
    setTotal: (total) => set({ total }),
    next: () => {
        const { current, total } = get();
        if (total === 0) return;
        set({ current: (current + 1) % total });
    },
}));
