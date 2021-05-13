import {useDispatch, useSelector} from 'react-redux';
import {decrementCounter, incrementCounter, selectCounterValue} from './counter.reducer';

export const useCounterValue = () => useSelector(selectCounterValue);
export const useCounterActions = () => {
    const dispatch = useDispatch();
    return {
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter())
    };
}
