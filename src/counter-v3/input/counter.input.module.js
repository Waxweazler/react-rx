import React from 'react';
import {useDispatch} from 'react-redux';
import {decrement, increment} from '../reducers/counter.reducer';
import {CounterInput as CCounterInput} from '../../counter/input/counter.input.module';

export const CounterInput = () => {

    const dispatch = useDispatch();

    return (
        <CCounterInput increment={() => dispatch(increment())} decrement={() => dispatch(decrement())}/>
    );

};
