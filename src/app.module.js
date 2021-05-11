import React from 'react';
import {CounterV1} from './counter-v1/counter.module';
import {CounterV2} from './counter-v2/counter.module';
import {CounterV3} from './counter-v3/counter.module';
import styles from './app.module.css';

export const App = () => {

    return (
        <div className={styles.container}>
            <CounterV1/>
            <CounterV2/>
            <CounterV3/>
        </div>
    );

};
