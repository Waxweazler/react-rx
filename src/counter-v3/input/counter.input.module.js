import React from 'react';
import {useDispatch} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/counter.reducer';
import {CounterInput as CCounterInput} from '../../counter/input/counter.input.module';

export const CounterInput = () => {

    const dispatch = useDispatch();

    const increment = () => dispatch(incrementCounter());
    const decrement = () => dispatch(decrementCounter());

    return (
        <CCounterInput increment={increment} decrement={decrement}/>
    );

};
