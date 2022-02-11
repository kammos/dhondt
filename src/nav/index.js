import { cnb } from "cnbuilder";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "./nav-link";
import s from "./styles.scss";

export const Nav = () => {
    const shadowRef = useRef();
    const [shadowSkipAnimation, setShadowSkipAnimation] = useState(false);

    const setActiveLink = linkRef => {
        shadowRef.current.style.left = `${linkRef.current.offsetLeft}px`;
        shadowRef.current.style.width = `${linkRef.current.scrollWidth}px`;
    }

    useEffect(() => {
        let timeout;
        const handler = () => {
            setShadowSkipAnimation(true);

            clearTimeout(timeout);
            setTimeout(() => {
                setShadowSkipAnimation(false);
            }, 20);
        }

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    return <nav className={s.nav}>
        <div className={cnb(s.shadow, shadowSkipAnimation && s.skipAnimation)} ref={shadowRef} />
        <NavLink 
            href="/setup" 
            setActiveLink={setActiveLink}
        >
            Enter data
        </NavLink>
        <NavLink 
            href="/results" 
            setActiveLink={setActiveLink}
        >
            See results
        </NavLink>
        <NavLink 
            href="/about" 
            setActiveLink={setActiveLink}
        >
            About
        </NavLink>
    </nav>
}