import {Button, ButtonGroup} from 'react-bootstrap';
import {CounterActionsProps} from '../../../types';

export const CounterActions = ({increment, decrement, isLoading}: CounterActionsProps) => (

    <ButtonGroup>
        <Button variant="danger" onClick={decrement} disabled={isLoading}>
            <span className="text-monospace">-</span>
        </Button>
        <Button variant="success" onClick={increment} disabled={isLoading}>
            <span className="text-monospace">+</span>
        </Button>
    </ButtonGroup>

);
