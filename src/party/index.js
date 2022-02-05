import s from "./styles.scss";
import { Fieldset } from "../fieldset"
import { Input } from "../input";
import { useDispatch } from "react-redux";
import { calculatorActions } from "../calculator";


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

    const handleVotesBlur = event => {
        if (event.target.value === '') {
            dispatch(calculatorActions.setVotes(party.index, 0));
        }
    }

    const handleNameBlur = event => {
        if (event.target.value === '') {
            dispatch(calculatorActions.setName(party.index, `Party ${party.index}`));
        }
    }

    return <Fieldset color={party.index}>
        <div className={s.container}>
            <Input name="name" value={party.name} onChange={handleNameChange} onBlur={handleNameBlur}/>
            <div className={s.icons}>
                <button type="button" className={s.deleteButton} onClick={handleDeleteClick}>
                    <div className={s.crossIcon} />
                </button>
            </div>
            <Input name="votes" type="number" value={party.votes} onChange={handleVotesChange} onBlur={handleVotesBlur}/>
            <Input name="ignores-treshold" type="checkbox" checked={party.ignoresTreshold} onChange={handleIgnoresTresholdChange}/>
        </div>
    </Fieldset>
}