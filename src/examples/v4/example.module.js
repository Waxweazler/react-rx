import React from 'react';
import {Example} from '../../modules/example/example.module';
import {CounterV4} from './counter/counter.module';

export const ExampleV4 = () => {

    return (
        <Example description="w/ query">
            <CounterV4/>
        </Example>
    );

};
