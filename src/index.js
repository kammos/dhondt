/* eslint-disable no-restricted-syntax */
import './reset.scss';
import './styles.scss';

import { render } from 'react-dom';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import { calculatorActions, calculatorReducer } from './calculator';
import { Shell } from './shell';
import { PreloadController } from './preload-controller';
import { retainState } from './state-retention';


const store = configureStore({ 
    reducer: {
        calculator: calculatorReducer
    },
    enhancers: [retainState('state-retention-key')]
});

if (Object.values(store.getState().calculator.parties).length === 0) {
    store.dispatch(calculatorActions.addParty());
    store.dispatch(calculatorActions.addParty());
    store.dispatch(calculatorActions.addParty());
    store.dispatch(calculatorActions.addParty());
}

render(
    <Provider store={store}>
        <PreloadController>
            <Shell />
        </PreloadController>
    </Provider>, 
document.querySelector('#root'));
