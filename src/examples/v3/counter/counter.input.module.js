import React from 'react';
import {useDispatch} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/counter.reducer';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';

export const CounterInput = () => {

    const dispatch = useDispatch();

    const increment = () => dispatch(incrementCounter());
    const decrement = () => dispatch(decrementCounter());

    return (
        <CounterActions increment={increment} decrement={decrement}/>
    );

};
