import React from 'react';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';
import {useCounterActions, useCounterValue} from '../swr/swr.hooks';

export const CounterInput = () => {

    const {isLoading} = useCounterValue();
    const {increment, decrement} = useCounterActions();

    return (
        <CounterActions increment={increment} decrement={decrement} isLoading={isLoading}/>
    );

};
