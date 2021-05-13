import React, {createContext, useContext, useState} from 'react';

const CounterContext = createContext(null);

export const CounterProvider = (props) => {

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <CounterContext.Provider value={{value: counter, increment: increment, decrement: decrement}}>
            {props.children}
        </CounterContext.Provider>
    );

};

export const useCounterContext = () => useContext(CounterContext);
