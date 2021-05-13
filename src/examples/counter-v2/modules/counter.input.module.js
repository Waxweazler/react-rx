import React from 'react';
import {useCounterContext} from '../counter.provider';
import {CounterInput} from '../../../modules/counter/input/counter.input.module';

export const CounterInputV2 = () => {

    const {increment, decrement} = useCounterContext();

    return (
        <CounterInput increment={increment} decrement={decrement}/>
    );

};
