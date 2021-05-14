import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';
import {useCounterActions} from '../redux/redux.hooks';

export const CounterInput = () => {

    const {increment, decrement} = useCounterActions();

    return (
        <CounterActions increment={increment} decrement={decrement}/>
    );

};
