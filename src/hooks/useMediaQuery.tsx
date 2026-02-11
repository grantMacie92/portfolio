import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
    const getMatch = () => {
        if (typeof window === "undefined" || !window.matchMedia) return false;
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState<boolean>(getMatch);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;

        const mql = window.matchMedia(query);

        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

        // Set once in case query changed
        setMatches(mql.matches);

        if (mql.addEventListener) {
            mql.addEventListener("change", handler);
            return () => mql.removeEventListener("change", handler);
        } else {
            // Safari < 14
            // @ts-ignore
            mql.addListener(handler);
            // @ts-ignore
            return () => mql.removeListener(handler);
        }
    }, [query]);

    return matches;
}
