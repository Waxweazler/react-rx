import React from 'react';
import {Example} from '../example/example.module';
import {CounterV1} from '../../examples/counter-v1/counter.module';
import {CounterV2} from '../../examples/counter-v2/counter.module';
import {CounterV3} from '../../examples/counter-v3/counter.module';
import {CounterV4} from '../../examples/counter-v4/counter.module';
import styles from './app.module.scss';

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
            <Example description="w/ query">
                <CounterV4/>
            </Example>
        </div>
    );

};
