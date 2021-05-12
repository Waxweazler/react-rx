import React from 'react';
import {CounterV1} from './counter-v1/counter.module';
import {CounterV2} from './counter-v2/counter.module';
import {CounterV3} from './counter-v3/counter.module';
import styles from './app.module.css';
import {Example} from "./example/example.module";

export const App = () => {

    return (
        <div className={styles.container}>
            <Example description="w/ delegation">
                <CounterV1/>
            </Example>
            <Example description="w/ context">
                <CounterV2/>
            </Example>
            <Example description="w/ redux">
                <CounterV3/>
            </Example>
        </div>
    );

};
