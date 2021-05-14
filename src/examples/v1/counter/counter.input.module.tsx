import React from 'react';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';
import {CounterInputProps} from '../../../types';

export const CounterInput = ({increment, decrement}: CounterInputProps) => (

    <CounterActions increment={increment} decrement={decrement}/>

);
