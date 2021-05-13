import React from 'react';
import {useSelector} from 'react-redux';
import {CounterOutput} from '../../../modules/counter/output/counter.output.module';
import {selectCounterValue} from '../redux/counter.reducer';

export const CounterOutputV3 = () => {

    const value = useSelector(selectCounterValue);

    return (
        <CounterOutput value={value}/>
    );

};
