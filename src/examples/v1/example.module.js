import React from 'react';
import {Example} from '../../modules/example/example.module';
import {CounterV1} from './counter/counter.module';

export const ExampleV1 = () => {

    return (
        <Example description="w/ delegation">
            <CounterV1/>
        </Example>
    );

};