import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export const CounterActions = ({increment, decrement, isLoading}) => {

    return (
        <ButtonGroup>
            <Button variant="danger" onClick={decrement} disabled={isLoading}>
                <span className="text-monospace">-</span>
            </Button>
            <Button variant="success" onClick={increment} disabled={isLoading}>
                <span className="text-monospace">+</span>
            </Button>
        </ButtonGroup>
    );

};
