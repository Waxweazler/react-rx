import {Counter} from '../../../modules/counter/counter.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';

export const CounterV5 = () => (

    <Counter>
        <CounterOutput/>
        <CounterInput/>
    </Counter>

);
