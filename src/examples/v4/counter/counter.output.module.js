import React from 'react';
import {useCounter} from '../query/query.hooks';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';

export const CounterOutput = () => {

    const {data, isLoading, isFetching} = useCounter();

    return (
        <CounterValue value={(isLoading || isFetching) ? '...' : data.value}/>
    );

};
