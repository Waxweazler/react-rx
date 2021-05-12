import {createStore} from 'redux';
import {counterReducer} from './reducers/counter.reducer';
import {Provider} from 'react-redux';
import React from 'react';

export const CounterProvider = props => {

    const store = createStore(
        counterReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );

};
