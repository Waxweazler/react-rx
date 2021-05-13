import React from 'react';
import {useCounterActions, useCounterValue} from '../query/query.hooks';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';

export const CounterInput = () => {

    const {isLoading, isFetching} = useCounterValue();
    const {increment, decrement} = useCounterActions();

    return (
        <CounterActions increment={increment} decrement={decrement} isLoading={isLoading || isFetching}/>
    );

};
