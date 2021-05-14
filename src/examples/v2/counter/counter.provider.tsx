import React, {createContext, useContext, useState} from 'react';
import {ChildrenOnlyProps, CounterContextType} from '../../../types';

const CounterProvider = ({children}: ChildrenOnlyProps) => {

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <CounterContext.Provider value={{value: counter, increment: increment, decrement: decrement}}>
            {children}
        </CounterContext.Provider>
    );

};

const CounterContext = createContext({} as CounterContextType);
const useCounterContext = () => useContext(CounterContext);

export {CounterProvider, useCounterContext};
