import { useEffect, useState } from "react"

export const useIsInViewport = (observedElementRef) => {
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const handler = entries => {
            setIsInViewport(entries[0].isIntersecting);
        };

        const observer = new IntersectionObserver(handler, {
            treshold: 0,
        });

        observer.observe(observedElementRef.current);

        return () => {
            observer.disconnect();
        }
    }, [observedElementRef]);

    return isInViewport;
}