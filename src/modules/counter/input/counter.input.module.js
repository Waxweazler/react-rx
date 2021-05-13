import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export const CounterInput = ({increment, decrement, isLoading}) => {

    return (
        <ButtonGroup>
            <Button variant="success" onClick={increment} disabled={isLoading}>+</Button>
            <Button variant="danger" onClick={decrement} disabled={isLoading}>-</Button>
        </ButtonGroup>
    );

};
