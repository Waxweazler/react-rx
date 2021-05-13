import React from 'react';
import {Example} from '../../modules/example/example.module';
import {CounterV5} from './counter/counter.module';

export const ExampleV5 = () => {

    return (
        <Example description="w/ swr">
            <CounterV5/>
        </Example>
    );

};
