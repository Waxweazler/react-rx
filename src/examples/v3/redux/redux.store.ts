import {Counter, ReduxStore} from '../../../types';
import {configureStore, createSlice} from '@reduxjs/toolkit';

const createStore = () => configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    devTools: true
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    } as Counter,
    reducers: {
        increment: (state: Counter) => {
            state.value++;
        },
        decrement: (state: Counter) => {
            state.value--;
        }
    }
});

const {increment, decrement} = counterSlice.actions;

const counterValueSelector = ({counter}: ReduxStore) => counter.value;

export {createStore, counterValueSelector, increment as incrementCounter, decrement as decrementCounter};
