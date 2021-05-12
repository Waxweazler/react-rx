import React from 'react';
import {useSelector} from 'react-redux';
import {CounterOutput as CCounterOutput} from '../../counter/output/counter.output.module';
import {selectCounterValue} from '../redux/counter.reducer';

export const CounterOutput = () => {

    const value = useSelector(selectCounterValue);

    return (
        <CCounterOutput value={value}/>
    );

};
