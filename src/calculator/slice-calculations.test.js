import { calculatorActions, calculatorReducer } from "./slice";

describe('calculator', () => {
    describe('update results action', () => {
        it('should correctly calculate seats for example election from wikipedia', () => {
            // https://en.wikipedia.org/wiki/D%27Hondt_method#Example
            const initialState = {
                seats: 8,
                resultsValid: false,
                parties: {
                    0: { name: 'A', votes: 100_000 },
                    1: { name: 'B', votes: 80_000 },
                    2: { name: 'C', votes: 30_000 },
                    3: { name: 'D', votes: 20_000 },
                },
            }

            const newState = calculatorReducer(initialState, calculatorActions.updateResults());

            expect(newState.results).toEqual({
                0: { name: "A", seats: 4, votes: 100000, difference: 0.5217391304347827 },
                1: { name: "B", seats: 3, votes: 80000, difference: 0.21739130434782616 },
                2: { name: "C", seats: 1, votes: 30000, difference: -0.04347826086956519 },
                3: { name: "D", seats: 0, votes: 20000, difference: -0.6956521739130435 },
            });
        });

        it('should not fail at zero parties', () => {
            const initialState = {
                seats: 8,
                resultsValid: false,
                parties: {},
            }

            const newState = calculatorReducer(initialState, calculatorActions.updateResults());
            expect(newState.results).toEqual({});
            expect(newState.resultsValid).toBe(true);
        });

        it("should not fail when no party meats treshold", () => {
            const initialState = {
                seats: 8,
                resultsValid: false,
                treshold: 100,
                parties: {
                    0: { name: 'A', votes: 100_000 },
                    1: { name: 'B', votes: 100_000 },
                },
            };

            const newState = calculatorReducer(initialState, calculatorActions.updateResults());
            expect(newState.results).toEqual({
                "0": { "difference": -4, "name": "A", "seats": 0, "votes": 100000 },
                "1": { "difference": -4, "name": "B", "seats": 0, "votes": 100000 }
            });
        })
    });
});