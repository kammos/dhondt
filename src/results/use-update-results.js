import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../calculator";

export const useUpdateResults = (isVisible) => {
    const dispatch = useDispatch();
    const areResultsValid = useSelector(state => state.calculator.resultsValid);

    useEffect(() => {
        if (isVisible && !areResultsValid) {
            dispatch(calculatorActions.updateResults());
        }
    }, [areResultsValid, dispatch, isVisible]);
}