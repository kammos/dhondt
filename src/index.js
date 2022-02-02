import {render} from 'react-dom';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';

import s from './styles.scss';

const store = configureStore({ 
    reducer: // TODO 
});

render(
    <Provider store={store}>
        <p class={s.mainMain}>hello</p>
    </Provider>, 
document.querySelector('#root'));
