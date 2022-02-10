import { calculatorActions, calculatorReducer } from './slice';

describe('calculator', () => {
    describe('add party action', () => {
        const initialState = {
            seats: 460,
            nextIndex: 0,
            parties: {},
            resultsValid: true,
        };

        it('should allow to add party with automatic name', () => {
            const newState = calculatorReducer(initialState, calculatorActions.addParty());

            expect(newState.parties[0].name).toBe('Red');

            const newState2 = calculatorReducer(newState, calculatorActions.addParty());

            expect(newState2.parties[1].name).toBe('Green');
        });

        it('should automatically set votes to initial value', () => {
            const newState = calculatorReducer(initialState, calculatorActions.addParty());

            expect(newState.parties[0].votes).toBe(100);
        });

        it('should invalidate results', () => {
            const newState = calculatorReducer(initialState, calculatorActions.addParty());

            expect(newState.resultsValid).toBe(false);
        });
    });

    describe('remove party action', () => {
        const initialState = {
            seats: 460,
            nextIndex: 0,
            parties: {
                0: {
                    index: 0,
                    name: 'delete me',
                }
            },
            resultsValid: true,
        };

        it('should delete a party', () => {
            const newState = calculatorReducer(initialState, calculatorActions.removeParty(0));

            expect(newState.parties[0]).toBe(undefined);
        });

        it('should invalidate results', () => {
            const newState = calculatorReducer(initialState, calculatorActions.removeParty(0));

            expect(newState.resultsValid).toBe(false);
        });
    })

    describe('set votes action', () => {
        const initialState = {
            seats: 460,
            nextIndex: 0,
            resultsValid: true,
            parties: {
                0: {
                    name: 'Red',
                    votes: 100,
                    index: 0,
                }
            },
        }

        it('should allow to set votes for a party', () => {
            const newState = calculatorReducer(initialState, calculatorActions.setVotes(0, 50));

            expect(newState.parties[0].votes).toBe(50);
        });

        it('should invalidate results', () => {
            const newState = calculatorReducer(initialState, calculatorActions.setVotes(0, 50));

            expect(newState.resultsValid).toBe(false);
        });
    });
});