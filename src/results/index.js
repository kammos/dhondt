import { useUpdateResults } from "./use-update-results";
import { useSelector } from "react-redux";
import { DifferenceFromIdeal, SeatsPerParty } from "./charts";
import { Explanation } from "./explanation";
import { useValidityCheck } from "./use-validity-check";
import s from "./styles.scss";
import common from "../common.scss";


export const Results = () => {
    useUpdateResults();
    const results = useSelector(state => state.calculator.results);
    const parties = Object.values(results).sort((partyA, partyB) => partyB.votes - partyA.votes);
    const hasAnyParties = parties.length !== 0;
    const isDataValid = useValidityCheck();

    return <div className={s.container}>
        <h1 className={common.srOnly}>Results</h1>
        {isDataValid && hasAnyParties && <>
            <div className={s.chartContainer}>
                <h2 className={common.srOnly}>Seats per party</h2>
                <SeatsPerParty parties={parties} />
            </div>
            <div className={s.chartContainer}>
                <h2 className={common.srOnly}>Seats gained or lost by each party due to inaccuracy of D&apos;Hondt method</h2>
                <DifferenceFromIdeal parties={parties} />
            </div>
        </>}
        <div className={s.explanationContainer}>
            <Explanation parties={parties} isDataValid={isDataValid} />
        </div>
    </div>
}

export default Results;