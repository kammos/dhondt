import { useUpdateResults } from "./use-update-results";
import { useSelector } from "react-redux";
import { DifferenceFromIdeal, SeatsPerParty } from "./charts";
import { Explanation } from "./explanation";
import s from "./styles.scss";

export const Results = () => {
    useUpdateResults();
    const results = useSelector(state => state.calculator.results);
    const parties = Object.values(results).sort((partyA, partyB) => partyB.votes - partyA.votes);
    const hasAnyParties = parties.length !== 0;

    return <div className={s.container}>
        {hasAnyParties && <>
            <div className={s.chartContainer}>
                <SeatsPerParty parties={parties} />
            </div>
            <div className={s.chartContainer}>
                <DifferenceFromIdeal parties={parties} />
            </div>
        </>}
        <div className={s.explanationContainer}>
            <Explanation parties={parties} />
        </div>
    </div>
}

export default Results;