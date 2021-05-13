import React from 'react';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';

export const CounterInput = ({increment, decrement}) => {

    return (
        <CounterActions increment={increment} decrement={decrement}/>
    );

};
