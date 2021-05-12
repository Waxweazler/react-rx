import React from 'react';
import {useCounterContext} from '../counter.provider';
import {CounterOutput as CCounterOutput} from '../../counter/output/counter.output.module';

export const CounterOutput = () => {

    const {value} = useCounterContext();

    return (
        <CCounterOutput value={value}/>
    );

};
