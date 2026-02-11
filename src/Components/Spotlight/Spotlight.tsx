import { useEffect, useRef } from "react";
import "./spotlight.css";

export function SpotlightBackground() {
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        // Respect reduced-motion
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const onMove = (e: MouseEvent) => {
            if (rafRef.current) return;

            rafRef.current = window.requestAnimationFrame(() => {
                rafRef.current = null;

                // Use clientX/Y; CSS wants px or %
                document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
                document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
            });
        };

        window.addEventListener("mousemove", onMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return <div className="spotlight" aria-hidden="true" />;
}