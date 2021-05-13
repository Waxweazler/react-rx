import React from 'react';
import {Counter} from '../../../modules/counter/counter.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';
import {CounterProvider} from './counter.provider';

export const CounterV3 = () => {

    return (
        <CounterProvider>
            <Counter>
                <CounterOutput/>
                <CounterInput/>
            </Counter>
        </CounterProvider>
    );

};
