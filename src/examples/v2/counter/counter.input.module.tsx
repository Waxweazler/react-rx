import React from 'react';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';
import {useCounterContext} from './counter.provider';

export const CounterInput = () => {

    const {increment, decrement} = useCounterContext();

    return (
        <CounterActions increment={increment} decrement={decrement}/>
    );

};
