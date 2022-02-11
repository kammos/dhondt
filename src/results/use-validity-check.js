import { useSelector } from "react-redux"

const isPartyValid = party => 
    party.nameError == null && party.votesError == null;

export const useValidityCheck = () => {
    const calculator = useSelector(state => state.calculator);

    return calculator.tresholdError == null && calculator.seatsError == null && Object.values(calculator.parties).every(isPartyValid);
}