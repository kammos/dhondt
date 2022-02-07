import { useLayoutEffect } from "react";
import { useEffect } from "react";
import s from "./styles.scss";


export const PreloadController = ({children}) => {
    useLayoutEffect(() => {
        document.body.classList.add(s.preload);
    }, []);

    useEffect(() => {
        // NOTE seen people using non-zero timeout here, but this seems to work?
        setTimeout(() => {
            document.body.classList.remove(s.preload);
        }, 0);
    }, []);

    return <>
        {children}
    </>
}