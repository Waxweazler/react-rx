import React, {useState} from 'react';
import {Counter} from '../../../modules/counter/counter.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';

export const CounterV1 = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <Counter>
            <CounterOutput value={counter}/>
            <CounterInput increment={increment} decrement={decrement}/>
        </Counter>
    );

};
