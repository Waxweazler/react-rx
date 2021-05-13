import React from 'react';
import {Counter} from '../../../modules/counter/counter.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';

export const CounterV5 = () => {

    return (
        <Counter>
            <CounterOutput/>
            <CounterInput/>
        </Counter>
    );

};
