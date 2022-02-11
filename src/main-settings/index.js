import { Input } from "../input"
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../calculator";
import s from "./styles.scss";

export const MainSettings = () => {
    const dispatch = useDispatch();
    const seats = useSelector(state => state.calculator.seats);
    const treshold = useSelector(state => state.calculator.treshold);
    const seatsError = useSelector(state => state.calculator.seatsError);
    const tresholdError = useSelector(state => state.calculator.tresholdError);

    const handleSeatsChange = event => {
        dispatch(calculatorActions.setSeats(parseInt(event.target.value, 10)));
    }

    const handleTresholdChange = event => {
        dispatch(calculatorActions.setTreshold(parseInt(event.target.value, 10)));
    }
    
    // cannot use real fieldset here due to bugs in chrome
    return <div 
        role="group" 
        aria-labelledby="main-settings-label" 
        className={s.fieldset}
    >
        <div className={s.legend} id="main-settings-label">
            Main settings
        </div>
        <div className={s.inputs}>
            <Input name="seats" type="number" value={seats} error={seatsError} onChange={handleSeatsChange} />
            <Input name="treshold" type="number" value={treshold} error={tresholdError} onChange={handleTresholdChange} />
        </div>
    </div>
}