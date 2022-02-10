import { seatsFormatter, seatsFormatterReversed } from "../../misc";
import s from "./styles.scss";

const greatestAbsoluteDifferenceFromIdeal = (partyA, partyB) => Math.abs(partyB.difference) - Math.abs(partyA.difference);

export const Explanation = ({parties}) => {
    const party = parties.sort(greatestAbsoluteDifferenceFromIdeal)[0];

    if (!party)
        return null;

    return <div className={s.container}>
        <header>
            Seems low?
        </header>
        <div className={s.text}>
            <p>
                Remember, this simulator only shows resuls for a <em>single voting district</em>. 
                In a real-world election, typically there will be multiple districts, allowing such discrepancies to accumulate.
            </p>
            <p>
                As an example, in the above simulation for a single district, party {party.name} <strong>{seatsFormatterReversed(party.difference)}</strong>.
            </p>
            <p>
                In a country with 40 voting districts, this would translate to <strong>{seatsFormatter(Math.round(party.difference * 40))}</strong> nationwide.
            </p>
        </div>
    </div>
}