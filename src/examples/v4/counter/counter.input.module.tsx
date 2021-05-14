import {useCounterActions, useCounterValue} from '../query/query.hooks';
import {CounterActions} from '../../../modules/counter/actions/counter.actions.module';

export const CounterInput = () => {

    const {isLoading, isFetching} = useCounterValue();
    const {increment, decrement} = useCounterActions();

    return (
        <CounterActions increment={() => increment.mutate(null)}
                        decrement={() => decrement.mutate(null)}
                        isLoading={isLoading || isFetching}/>
    );

};
