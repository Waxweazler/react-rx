import React from 'react';
import {useSelector} from 'react-redux';
import {selectCounterValue} from '../redux/counter.reducer';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';

export const CounterOutput = () => {

    const value = useSelector(selectCounterValue);

    return (
        <CounterValue value={value}/>
    );

};
