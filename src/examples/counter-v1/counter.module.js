import React, {useState} from 'react';
import {Counter} from '../../modules/counter/counter.module';
import {CounterElement} from '../../modules/counter/element/counter.element.module';
import {CounterInput} from '../../modules/counter/input/counter.input.module';
import {CounterOutput} from '../../modules/counter/output/counter.output.module';

export const CounterV1 = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <Counter>
            <CounterElement>
                <CounterInput increment={increment} decrement={decrement}/>
            </CounterElement>
            <CounterElement>
                <CounterOutput value={counter}/>
            </CounterElement>
        </Counter>
    );

};
