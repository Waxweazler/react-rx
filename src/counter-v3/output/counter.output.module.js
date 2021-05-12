import React from 'react';
import {useSelector} from 'react-redux';
import {CounterOutput as CCounterOutput} from '../../counter/output/counter.output.module';

export const CounterOutput = () => {

    const value = useSelector(state => state.value);

    return (
        <CCounterOutput value={value}/>
    );

};
