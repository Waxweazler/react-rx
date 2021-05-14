import {useDispatch, useSelector} from 'react-redux';
import {counterValueSelector, decrementCounter, incrementCounter} from './redux.store';

export const useCounterValue = () => useSelector(counterValueSelector);
export const useCounterActions = () => {
    const dispatch = useDispatch();
    return {
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter())
    };
}
