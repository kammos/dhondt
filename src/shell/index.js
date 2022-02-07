import { useRef } from "react";
import { Calculator } from "../calculator";
import { useIsInViewport } from "../misc";
import { Results } from "../results";
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
            <Results inViewport={areResultsVisible} />
        </div>
    </div>
}