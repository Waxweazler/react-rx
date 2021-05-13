import React from 'react';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';

export const CounterOutput = ({value}) => {

    return (
        <CounterValue value={value}/>
    );

};
