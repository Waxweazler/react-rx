import React, {useState} from 'react';
import styles from '../counter/counter.module.css';
import {CounterElement} from '../counter/element/counter.element.module';
import {CounterInput} from '../counter/input/counter.input.module';
import {CounterOutput} from '../counter/output/counter.output.module';

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
