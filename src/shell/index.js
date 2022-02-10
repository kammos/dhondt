import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";
import { Nav } from "../nav";
import s from "./styles.scss";

const Results = lazy(() => import("../results"));
const Calculator = lazy(() => import("../calculator/component"));

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
                <Suspense fallback="fallback">
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
                </Suspense>
            </div>
        </main>
    </div>
}