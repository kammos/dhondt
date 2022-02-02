import { createSlice } from "@reduxjs/toolkit";

const names = ['Red', 'Blue', 'Green', 'Yellow'];

const initialState = {
    seats: 460,
    treshold: 0,
    nextIndex: 0,
    parties: {},
    resultsValid: false,
}

const slice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addParty(state) {
            const nextIndex = state.nextIndex;

            state.parties[nextIndex] = {
                name: names[state.nextIndex] ?? `Party ${state.nextIndex}`,
                votes: 100,
                index: state.nextIndex,
            };

            state.nextIndex++;
            state.resultsValid = false;
        },
        removeParty(state, action) {
            delete state[action.payload];
        },
        setVotes: {
            prepare(partyIndex, votes) {
                return { payload: { partyIndex, votes } };
            },
            reducer(state, action) {
                const { partyIndex, votes } = action.payload;

                state.parties[partyIndex].votes = votes;
                state.resultsValid = false;
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
            }
        },
        setSeats(state, action) {
            state.seats = action.payload;
            state.resultsValid = false;
        },
        setTreshold(state, action) {
            state.treshold = action.payload;
            state.resultsValid = false;
        },
    }
});

export const calculatorReducer = slice.reducer;
export const calculatorActions = slice.actions;