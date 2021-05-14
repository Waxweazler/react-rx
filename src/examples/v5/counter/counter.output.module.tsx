import {CounterValue} from '../../../modules/counter/value/counter.value.module';
import {useCounterValue} from '../swr/swr.hooks';

export const CounterOutput = () => {

    const {data, isLoading} = useCounterValue();

    return (
        <CounterValue value={isLoading ? '...' : data.value}/>
    );

};
