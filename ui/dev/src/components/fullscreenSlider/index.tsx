// components/FullscreenSlider.tsx
import { useEffect } from "react";
import { useSliderStore } from "../../stores/useSliderStore";
import { motion, AnimatePresence } from "motion/react";

interface Props {
    images: string[];
    interval?: number;
}

export default function FullscreenSlider({
    images,
    interval = 5000,
}: Props) {
    const { current, next, setTotal } = useSliderStore();

    useEffect(() => {
        setTotal(images.length);
    }, [images.length, setTotal]);

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, interval);

        return () => clearInterval(timer);
    }, [next, interval]);

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={images[current]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 5.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    );
}
