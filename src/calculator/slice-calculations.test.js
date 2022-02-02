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
                0: { name: "A", seats: 4, votes: 100000 },
                1: { name: "B", seats: 3, votes: 80000 },
                2: { name: "C", seats: 1, votes: 30000 },
                3: { name: "D", seats: 0, votes: 20000 },
            });
        });
    });
});