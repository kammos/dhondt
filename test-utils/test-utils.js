import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { calculatorReducer } from '../src/calculator';


const customRender = (ui, { initialState, store, ...options } = {}) => {
    const actualStore = store ?? configureStore({
        reducer: { calculator: calculatorReducer },
        preloadedState: initialState,
    });

    const Wrapper = ({ children }) => {
        return <Provider store={actualStore}>
            {children}
        </Provider>
    }

    return render(ui, { wrapper: Wrapper, ...options });
}


export * from '@testing-library/react';
export { customRender as render };