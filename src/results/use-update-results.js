import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../calculator";

export const useUpdateResults = () => {
    const dispatch = useDispatch();
    const areResultsValid = useSelector(state => state.calculator.resultsValid);

    useLayoutEffect(() => {
        if (!areResultsValid) {
            dispatch(calculatorActions.updateResults());
        }
    }, [areResultsValid, dispatch]);
}