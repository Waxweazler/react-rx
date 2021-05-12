import React from 'react';
import {useCounterContext} from '../counter.provider';
import {CounterInput as CCounterInput} from '../../counter/input/counter.input.module';

export const CounterInput = () => {

    const {increment, decrement} = useCounterContext();

    return (
        <CCounterInput increment={increment} decrement={decrement}/>
    );

};
