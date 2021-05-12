import React from 'react';

export const CounterInput = ({increment, decrement}) => {

    return (
        <>
            <button type="button" onClick={increment}>+</button>
            <button type="button" onClick={decrement}>-</button>
        </>
    );

};
