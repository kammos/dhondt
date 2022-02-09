const tryLoadAndParse = storageKey => {
    try {
        return JSON.parse(localStorage.getItem(storageKey));
    } catch {
        return undefined;
    }
}

export const retainState = storageKey => createStore => (reducer, initialState, enhancer) => {
    let actualInitialState = initialState;
    let actualEnhancer = enhancer;

    if (enhancer === undefined) {
        actualEnhancer = initialState;
        actualInitialState = undefined;
    }

    const retainedState = tryLoadAndParse(storageKey);

    const store = createStore(reducer, retainedState ?? actualInitialState, actualEnhancer);

    const unsub = store.subscribe(() => {
        const state = store.getState();
        
        try {
            localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (ex) {
            unsub();
        }
    });

    return store;
}

