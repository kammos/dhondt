import { Redirect, Route, Switch } from "wouter";
import { Calculator } from "../calculator";
import { Nav } from "../nav";
import { Results } from "../results";
import s from "./styles.scss";


export const Shell = () => {
    return <div className={s.shell}>
        <header className={s.titleBar}>
            <span className={s.title}>D&apos;Hondt calculator</span>
            <div className={s.navContainer}>
                <Nav />
            </div>
        </header>
        <main className={s.main}>
            <div className={s.content}>
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
            </div>
        </main>
    </div>
}