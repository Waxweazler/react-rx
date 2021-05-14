import {CounterValue} from '../../../modules/counter/value/counter.value.module';
import {useCounterContext} from './counter.provider';

export const CounterOutput = () => {

    const {value} = useCounterContext();

    return (
        <CounterValue value={value}/>
    );

};
