import React from 'react';
import {CounterOutput} from '../../../modules/counter/output/counter.output.module';
import {useCounter} from '../query/query.hooks';
import {Spinner} from 'react-bootstrap';

export const CounterOutputV4 = () => {

    const {data, isLoading, isFetching} = useCounter();

    if (isLoading || isFetching) {
        return <Spinner animation="border"/>;
    }

    return <CounterOutput value={data.value}/>;

};
