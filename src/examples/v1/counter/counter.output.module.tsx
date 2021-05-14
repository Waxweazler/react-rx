import {CounterValue} from '../../../modules/counter/value/counter.value.module';
import {CounterOutputProps} from '../../../types';

export const CounterOutput = ({value}: CounterOutputProps) => (

    <CounterValue value={value}/>

);
