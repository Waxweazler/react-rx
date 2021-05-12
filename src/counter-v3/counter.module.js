import React from 'react';
import styles from '../counter/counter.module.css';
import {CounterElement} from '../counter/element/counter.element.module';
import {CounterOutput} from './output/counter.output.module';
import {CounterInput} from './input/counter.input.module';
import {CounterProvider} from './counter.provider';

export const CounterV3 = () => {

    return (
        <div className={styles.container}>
            <CounterProvider>
                <CounterElement>
                    <CounterInput/>
                </CounterElement>
                <CounterElement>
                    <CounterOutput/>
                </CounterElement>
            </CounterProvider>
        </div>
    );

};
