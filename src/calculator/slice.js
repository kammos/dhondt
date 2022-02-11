import { createSlice } from "@reduxjs/toolkit";
import { calculateSeats } from "./calculate-seats";
import { validateAll, validateParty } from "./validate";

const names = ['Red', 'Green', 'Blue', 'Pink', 'Lime', 'Turquise', 'Magenta'];

const initialState = {
    seats: 100,
    treshold: 0,
    nextIndex: 0,
    parties: {},
    resultsValid: false,
    results: {},
}

const slice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addParty(state) {
            const nextIndex = state.nextIndex;

            state.parties[nextIndex] = {
                name: names[state.nextIndex] ?? `Party ${state.nextIndex}`,
                votes: 100 + 10 * state.nextIndex,
                index: state.nextIndex,
                ignoresTreshold: false,
            };

            validateParty(state.parties[nextIndex]);

            state.nextIndex++;
            state.resultsValid = false;
        },
        removeParty(state, action) {
            delete state.parties[action.payload];
            state.resultsValid = false;
        },
        setVotes: {
            prepare(partyIndex, votes) {
                return { payload: { partyIndex, votes } };
            },
            reducer(state, action) {
                const { partyIndex, votes } = action.payload;

                state.parties[partyIndex].votes = votes;
                state.resultsValid = false;
                validateParty(state.parties[partyIndex]);
            }
        },
        setName: {
            prepare(partyIndex, name) {
                return { payload: { partyIndex, name } };
            },
            reducer(state, action) {
                const { partyIndex, name } = action.payload;

                state.parties[partyIndex].name = name;
                state.resultsValid = false;
                validateParty(state.parties[partyIndex]);
            }
        },
        setIgnoresTreshold: {
            prepare(partyIndex, ignoresTreshold) {
                return { payload: { partyIndex, ignoresTreshold } };
            },
            reducer(state, action) {
                const { partyIndex, ignoresTreshold } = action.payload;

                state.parties[partyIndex].ignoresTreshold = ignoresTreshold;
                state.resultsValid = false;
                validateParty(state.parties[partyIndex]);
            }
        },
        setSeats(state, action) {
            state.seats = action.payload;
            state.resultsValid = false;
            validateAll(state)
        },
        setTreshold(state, action) {
            console.log(action);
            state.treshold = action.payload;
            state.resultsValid = false;
            validateAll(state);
        },
        updateResults(state) {
            state.results = calculateSeats(state.parties, state.seats, state.treshold);
            state.resultsValid = true;
        }
    }
});

export const calculatorReducer = slice.reducer;
export const calculatorActions = slice.actions;