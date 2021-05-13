import React from 'react';
import {useCounter, useDecrementCounter, useIncrementCounter} from '../query/query.hooks';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';

export const CounterInput = () => {

    const {isLoading, isFetching} = useCounter();
    const incrementMutation = useIncrementCounter();
    const decrementMutation = useDecrementCounter();

    const increment = () => incrementMutation.mutate();
    const decrement = () => decrementMutation.mutate();

    return (
        <CounterActions increment={increment} decrement={decrement} isLoading={isLoading || isFetching}/>
    );

};
