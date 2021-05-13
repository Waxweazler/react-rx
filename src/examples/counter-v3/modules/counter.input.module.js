import React from 'react';
import {useDispatch} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/counter.reducer';
import {CounterInput} from '../../../modules/counter/input/counter.input.module';

export const CounterInputV3 = () => {

    const dispatch = useDispatch();

    const increment = () => dispatch(incrementCounter());
    const decrement = () => dispatch(decrementCounter());

    return (
        <CounterInput increment={increment} decrement={decrement}/>
    );

};
