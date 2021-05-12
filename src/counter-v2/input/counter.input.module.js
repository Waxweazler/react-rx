import React from 'react';
import {useCounterContext} from '../counter.provider';

export const CounterInput = () => {

    const {increment, decrement} = useCounterContext();

    return (
        <>
            <button type="button" onClick={increment}>+</button>
            <button type="button" onClick={decrement}>-</button>
        </>
    );

};
