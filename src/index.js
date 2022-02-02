import { render } from 'react-dom';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';

import s from './styles.scss';
import { calculatorReducer } from './calculator';

const store = configureStore({ 
    reducer: {
        calculator: calculatorReducer
    }
});

render(
    <Provider store={store}>
        <p class={s.mainMain}>hello</p>
    </Provider>, 
document.querySelector('#root'));
