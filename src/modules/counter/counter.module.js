import React, {useState} from 'react';
import {CounterInput} from './input/counter.input.module';
import {CounterOutput} from './output/counter.output.module';
import {CounterElement} from './element/counter.element.module';
import styles from './counter.module.css';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className={styles.container}>
            <CounterElement>
                <CounterInput increment={increment} decrement={decrement}/>
            </CounterElement>
            <CounterElement>
                <CounterOutput value={counter}/>
            </CounterElement>
        </div>
    );

};
