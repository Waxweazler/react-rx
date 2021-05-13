import React from 'react';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';
import {useCounterValue} from '../redux/redux.hooks';

export const CounterOutput = () => {

    const value = useCounterValue();

    return (
        <CounterValue value={value}/>
    );

};
