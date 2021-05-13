import React from 'react';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {counterReducer} from './redux/counter.reducer';

export const CounterProvider = props => {

    const store = createStore(combineReducers({
        counter: counterReducer
    }), window?.__REDUX_DEVTOOLS_EXTENSION__());

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );

};
