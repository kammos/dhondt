import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "..";
import { Fieldset } from "../../fieldset";
import { MainSettings } from "../../main-settings";
import { Party } from "../../party";
import s from "./styles.scss";

export const Calculator = () => {
    const dispatch = useDispatch();
    const parties = useSelector(state => state.calculator.parties);
    const nextIndex = useSelector(state => state.calculator.nextIndex);


    const handleAddPartyClick = () => {
        dispatch(calculatorActions.addParty());
    }

    return <form className={s.form} autoComplete="off">
        <div className={s.mainSettings}>
            <MainSettings />
        </div>
        <div className={s.parties}>
            {Object.values(parties).map(party => <Party key={party.index} party={party} />)}
            <Fieldset color={nextIndex}>
                <button type="button" className={s.addParty} onClick={handleAddPartyClick}>
                    New party
                </button>
            </Fieldset>
        </div>
    </form>
}

export default Calculator;
