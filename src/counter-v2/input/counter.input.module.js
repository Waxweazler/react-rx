import React from 'react';
import {useCounterContext} from '../counter.context';

export const CounterInput = () => {

    const {increment, decrement} = useCounterContext();

    return (
        <>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </>
    );

};
