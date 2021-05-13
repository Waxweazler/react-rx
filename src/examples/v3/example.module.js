import React from 'react';
import {Example} from '../../modules/example/example.module';
import {CounterV3} from './counter/counter.module';

export const ExampleV3 = () => {

    return (
        <Example description="w/ redux">
            <CounterV3/>
        </Example>
    );

};
