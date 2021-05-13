import React from 'react';
import {useCounterValue} from '../query/query.hooks';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';

export const CounterOutput = () => {

    const {data, isLoading, isFetching} = useCounterValue();

    return (
        <CounterValue value={(isLoading || isFetching) ? '...' : data.value}/>
    );

};
