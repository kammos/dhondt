import { Link } from "wouter";
import { seatsFormatter, seatsFormatterReversed } from "../../misc";
import { Prose } from "../../prose";
import s from "./styles.scss";

const greatestAbsoluteDifferenceFromIdeal = (partyA, partyB) => 
    Math.abs(partyB.difference) - Math.abs(partyA.difference);

export const Explanation = ({parties, isDataValid}) => {
    if (!isDataValid) {
        return <Prose>
            <h2 className={s.error}>
                The data you entered is invalid
            </h2>
            <div>
                <p>
                    It seems that some of the data you entered is invalid. Please go back to the <Link href="/setyp">Enter data</Link> tab and correct all fields marked in red.
                </p>
            </div>
        </Prose>
    }

    if (parties.length === 0) {
        return <Prose>
            <h2>
                It seems that you didn&apos;t enter any parties
            </h2>
            <div>
                <p>
                    To see election results, please go back to the <Link href="/setyp">Enter data</Link> tab and fill in at least one party.
                </p>
            </div>
        </Prose>
    }

    const party = parties.sort(greatestAbsoluteDifferenceFromIdeal)[0];

    if (party.difference === 0) {
        return <Prose>
            <h2>
                Wow, no party lost or gained any seats!
            </h2>
            <div>
                <p>
                    Sadly, this is a rare occurence with the D&apos;Hondt method. 
                </p>
                <p>
                    Try changing number votes received by each party even just a little.
                </p>
            </div>
        </Prose>
    }

    return <Prose>
        <h2>
            Seems low?
        </h2>
        <div>
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
    </Prose>
}