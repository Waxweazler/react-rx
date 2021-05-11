import React from 'react';

export const CounterInput = ({increment, decrement}) => {

    return (
        <>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
        </>
    );

};
