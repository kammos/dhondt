import { createStore } from "redux";
import { retainState } from ".";

const initialState = { value: 0 };
const minimalReducer = (state = initialState, action) => {
    if (action.type === 'action') // needs to have any kind of check, as redux internally dispatches actions
        return { value: state.value + 1 };
    else
        return state;
}

describe('state retention enhancer', () => {
    it('should retain state to localStorage', () => {
        global.localStorage = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        const store = createStore(minimalReducer, retainState('storage-key'));

        store.dispatch({ type: 'action' });

        expect(global.localStorage.setItem).toHaveBeenCalledWith('storage-key', JSON.stringify(store.getState()));
    });

    it('should let the reducer pick initial state if nothing was stored', () => {
        global.localStorage = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };

        const store = createStore(minimalReducer, retainState('storage-key'));

        expect(store.getState()).toEqual(initialState);
    });

    it('load state from localStorage, if available', () => {
        const storedState = { value: 'retrieved' };
        global.localStorage = {
            getItem: jest.fn(() => JSON.stringify(storedState)),
            setItem: jest.fn(),
        };

        const store = createStore(minimalReducer, retainState('storage-key'));

        expect(global.localStorage.getItem).toHaveBeenCalledWith('storage-key');
        expect(store.getState()).toEqual(storedState);
    });
});