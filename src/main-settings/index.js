import s from "./styles.scss";
import { Fieldset } from "../fieldset"
import { Input } from "../input"
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../calculator";

export const MainSettings = () => {
    const dispatch = useDispatch();
    const seats = useSelector(state => state.calculator.seats);
    const treshold = useSelector(state => state.calculator.treshold);

    const handleSeatsChange = event => {
        dispatch(calculatorActions.setSeats(parseInt(event.target.value, 10)));
    }

    const handleTresholdChange = event => {
        dispatch(calculatorActions.setTreshold(parseInt(event.target.value, 10)));
    }

    const handleSeatsBlur = event => {
        if (event.target.value === '') {
            dispatch(calculatorActions.setSeats(0));
        }
    }

    const handleTresholdBlur = event => {
        if (event.target.value === '') {
            dispatch(calculatorActions.setTreshold(0));
        }
    }
    
    return <Fieldset color={80}>
        <div className={s.container}>
            <Input name="seats" type="number" value={seats} onChange={handleSeatsChange} onBlur={handleSeatsBlur} />
            <Input name="treshold" type="number" value={treshold} onChange={handleTresholdChange} onBlur={handleTresholdBlur}/>
        </div>
    </Fieldset>
}