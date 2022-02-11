import { lazy, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "wouter";
import { useHashLocation } from "../routing";
import { Nav } from "../nav";
import s from "./styles.scss";

const Results = lazy(() => import("../results"));
const Calculator = lazy(() => import("../calculator/component"));

export const Shell = () => {
    return <Router hook={useHashLocation}>
        <header className={s.titleBar}>
            <div className={s.titleBarInner}>
                <span className={s.title}>D&apos;Hondt calculator</span>
                <div className={s.navContainer}>
                    <Nav />
                </div>
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
    </Router>
}