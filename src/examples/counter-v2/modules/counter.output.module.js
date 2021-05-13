import React from 'react';
import {useCounterContext} from '../counter.provider';
import {CounterOutput} from '../../../modules/counter/output/counter.output.module';

export const CounterOutputV2 = () => {

    const {value} = useCounterContext();

    return (
        <CounterOutput value={value}/>
    );

};
