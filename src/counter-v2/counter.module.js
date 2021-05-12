import React from 'react';
import styles from '../counter/counter.module.css';
import {CounterInput} from './input/counter.input.module';
import {CounterOutput} from './output/counter.output.module';
import {CounterElement} from '../counter/element/counter.element.module';
import {CounterProvider} from './counter.provider';

export const CounterV2 = () => {

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
