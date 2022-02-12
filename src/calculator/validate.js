import { atLeast, atMost, isInteger, notEmpty, validate } from "../validation"

export const validateParty = party => {
    party.nameError = validate(party.name, () => {
        notEmpty()
    });

    party.votesError = validate(party.votes, () => {
        notEmpty();
        isInteger();
        atLeast(0);
    });
};

export const validateAll = calculator => {
    Object.values(calculator.parties).forEach(validateParty);

    calculator.tresholdError = validate(calculator.treshold, () => {
        notEmpty();
        isInteger();
        atLeast(0);
        atMost(100);
    });

    calculator.seatsError = validate(calculator.seats, () => {
        notEmpty();
        isInteger();
        atLeast(0);
    });
}