import React, {useState} from 'react';
import styles from '../counter/counter.module.css';
import {CounterInput} from './input/counter.input.module';
import {CounterOutput} from './output/counter.output.module';
import {CounterElement} from '../counter/element/counter.element.module';

export const CounterV1 = () => {

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
