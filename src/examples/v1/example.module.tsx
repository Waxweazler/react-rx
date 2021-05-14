import {Example} from '../../modules/example/example.module';
import {CounterV1} from './counter/counter.module';

export const ExampleV1 = () => (

    <Example description="w/ delegation">
        <CounterV1/>
    </Example>

);
