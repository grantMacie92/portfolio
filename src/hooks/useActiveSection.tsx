import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
    const [activeId, setActiveId] = useState(sectionIds[0]);

    useEffect(() => {
        const handler = () => {
            const y = window.scrollY + offset;

            // If we're basically at the bottom, force the last section active
            const nearBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

            if (nearBottom) {
                setActiveId(sectionIds[sectionIds.length - 1]);
                return;
            }

            let current = sectionIds[0];

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;

                if (el.offsetTop <= y) current = id;
                else break;
            }

            setActiveId(current);
        };

        handler(); // set initial
        window.addEventListener("scroll", handler, { passive: true });
        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, [sectionIds.join("|"), offset]);

    return activeId;
}
