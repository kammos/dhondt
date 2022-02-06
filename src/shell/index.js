import { useRef } from "react";
import { Calculator } from "../calculator";
import { useIsInViewport } from "../misc";
import s from "./styles.scss";


export const Shell = () => {
    const resultsElement = useRef();
    const calculatorElement = useRef();
    const areResultsVisible = useIsInViewport(resultsElement);

    const handleScrollLinkClick = () => {
        if (areResultsVisible) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            resultsElement.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    return <div className={s.shell}>
        <header className={s.titleBar}>
            <span>D&apos;Hondt calculator</span>
            <a className={s.scrollLink} onClick={handleScrollLinkClick}>
                {areResultsVisible ? 'Back to top' : 'See results'}
            </a>
        </header>
        <main className={s.calculator} ref={calculatorElement}>
            <Calculator />
        </main>
        <div className={s.results} ref={resultsElement}>
            Resulting results of the resultation ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Resulting results of the resultation ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Resulting results of the resultation ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Resulting results of the resultation ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
}