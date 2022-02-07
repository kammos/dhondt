import { cnb } from "cnbuilder";
import { useLayoutEffect, useRef } from "react";
import { Link, useRoute } from "wouter";
import s from "./styles.scss";

export const NavLink = ({ href, children, setActiveLink, activeLinkElement, ...rest }) => {
    const [isActive] = useRoute(href);
    const linkElementRef = useRef();

    useLayoutEffect(() => {
        if (isActive && activeLinkElement.current != linkElementRef.current) {
            setActiveLink(linkElementRef);
        }
    }, [activeLinkElement, isActive, setActiveLink]);

    return <Link href={href}>
        <a {...rest} className={cnb(s.link, isActive ? s.active : s.inactive)} ref={linkElementRef}>
            {children}
        </a>
    </Link>
}