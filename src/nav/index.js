import { useEffect, useRef, useState } from "react";
import { NavLink } from "./nav-link";
import s from "./styles.scss";

export const Nav = () => {
    const activeLinkElement = useRef();
    const [shadowOffset, setShadowOffset] = useState(0);
    const [shadowWidth, setShadowWidth] = useState(0);

    const setActiveLink = linkRef => {
        activeLinkElement.current = linkRef.current;
        setShadowOffset(activeLinkElement.current.offsetLeft);
        setShadowWidth(activeLinkElement.current.scrollWidth);
    }

    useEffect(() => {
        const handler = () => {
            setShadowOffset(activeLinkElement.current.offsetLeft);
            setShadowWidth(activeLinkElement.current.scrollWidth);
        }

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    return <nav className={s.nav}>
        <div className={s.shadow} style={{left: shadowOffset, width: `${shadowWidth}px`}}/>
        <NavLink 
            href="/setup" 
            activeLinkElement={activeLinkElement} 
            setActiveLink={setActiveLink}
        >
            Enter data
        </NavLink>
        <NavLink 
            href="/results" 
            activeLinkElement={activeLinkElement} 
            setActiveLink={setActiveLink}
        >
            See results
        </NavLink>
        <NavLink 
            href="/about" 
            activeLinkElement={activeLinkElement} 
            setActiveLink={setActiveLink}
        >
            About
        </NavLink>
    </nav>
}