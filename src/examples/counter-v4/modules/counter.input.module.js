import React from 'react';
import {CounterInput} from '../../../modules/counter/input/counter.input.module';
import {useCounter, useDecrementCounter, useIncrementCounter} from '../query/query.hooks';

export const CounterInputV4 = () => {

    const {isLoading, isFetching} = useCounter();
    const incrementMutation = useIncrementCounter();
    const decrementMutation = useDecrementCounter();

    const increment = () => incrementMutation.mutate();
    const decrement = () => decrementMutation.mutate();

    return (
        <CounterInput increment={increment} decrement={decrement} isLoading={isLoading || isFetching}/>
    );

};
