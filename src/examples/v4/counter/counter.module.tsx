import {Counter} from '../../../modules/counter/counter.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';
import {CounterProvider} from './counter.provider';

export const CounterV4 = () => (

    <CounterProvider>
        <Counter>
            <CounterOutput/>
            <CounterInput/>
        </Counter>
    </CounterProvider>

);
