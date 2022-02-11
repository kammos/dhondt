import { Fieldset } from "../fieldset"
import { Input } from "../input";
import { useDispatch } from "react-redux";
import { calculatorActions } from "../calculator";
import s from "./styles.scss";

export const Party = ({party}) => {
    const dispatch = useDispatch();

    const handleNameChange = event => {
        dispatch(calculatorActions.setName(party.index, event.target.value));
    }

    const handleVotesChange = event => {
        dispatch(calculatorActions.setVotes(party.index, parseInt(event.target.value, 10)));
    }

    const handleIgnoresTresholdChange = event => {
        dispatch(calculatorActions.setIgnoresTreshold(party.index, event.target.checked));
    }

    const handleDeleteClick = () => {
        dispatch(calculatorActions.removeParty(party.index));
    }

    return <Fieldset color={party.index}>
        <div className={s.container}>
            <div className={s.input}>
                <Input name="name" value={party.name} onChange={handleNameChange} error={party.nameError}/>
            </div>
            <div className={s.icons}>
                <button type="button" className={s.deleteButton} onClick={handleDeleteClick}>
                    <div className={s.crossIcon} />
                </button>
            </div>
            <div className={s.input}>
                <Input name="votes" type="number" value={party.votes} onChange={handleVotesChange} error={party.votesError} />
            </div>
            <div className={s.input}>
                <Input name="ignores-treshold" type="checkbox" checked={party.ignoresTreshold} onChange={handleIgnoresTresholdChange}/>
            </div>
        </div>
    </Fieldset>
}