import React from 'react';
import {Spinner} from 'react-bootstrap';
import {useCounter} from '../query/query.hooks';
import {CounterValue} from '../../../modules/counter/value/counter.value.module';

export const CounterOutput = () => {

    const {data, isLoading, isFetching} = useCounter();

    if (isLoading || isFetching) {
        return (
            <Spinner animation="border"/>
        );
    }

    return (
        <CounterValue value={data.value}/>
    );

};
