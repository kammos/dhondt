import './reset.scss';

import { render } from 'react-dom';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';

import './styles.scss';

import { calculatorActions, calculatorReducer } from './calculator';
import { Shell } from './shell';

const store = configureStore({ 
    reducer: {
        calculator: calculatorReducer
    }
});

store.dispatch(calculatorActions.addParty());
store.dispatch(calculatorActions.addParty());
store.dispatch(calculatorActions.addParty());
store.dispatch(calculatorActions.addParty());

render(
    <Provider store={store}>
        <Shell />
    </Provider>, 
document.querySelector('#root'));
