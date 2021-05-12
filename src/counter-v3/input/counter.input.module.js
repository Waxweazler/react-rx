import React from 'react';
import {useDispatch} from 'react-redux';
import {decrement, increment} from '../reducers/counter.reducer';

export const CounterInput = () => {

    const dispatch = useDispatch();

    return (
        <>
            <button type="button" onClick={() => dispatch(increment())}>+</button>
            <button type="button" onClick={() => dispatch(decrement())}>-</button>
        </>
    );

};
