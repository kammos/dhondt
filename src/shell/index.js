import { Link, Redirect, Route, Switch } from "wouter";
import { Calculator } from "../calculator";
import { Results } from "../results";
import s from "./styles.scss";


export const Shell = () => {
    return <div className={s.shell}>
        <header className={s.titleBar}>
            <span>D&apos;Hondt calculator</span>
            <nav className={s.nav}>
                <Link href="/setup" className={s.navLink}>
                    Data
                </Link>
                <Link href="/results" className={s.navLink}>
                    Results
                </Link>
                <Link href="/about" className={s.navLink}>
                    About
                </Link>
            </nav>
        </header>
        <main className={s.main}>
            <Switch>
                <Route path="/about">
                    the about
                </Route>
                <Route path="/setup">
                    <Calculator />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route>
                    <Redirect to="/setup" />
                </Route>
            </Switch>
        </main>
    </div>
}