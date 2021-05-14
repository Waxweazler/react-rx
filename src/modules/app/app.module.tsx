import {ExampleV1} from '../../examples/v1/example.module';
import {ExampleV2} from '../../examples/v2/example.module';
import {ExampleV3} from '../../examples/v3/example.module';
import {ExampleV4} from '../../examples/v4/example.module';
import {ExampleV5} from '../../examples/v5/example.module';
import styles from './app.module.scss';

export const App = () => (

    <div className={styles.container}>
        <ExampleV1/>
        <ExampleV2/>
        <ExampleV3/>
        <ExampleV4/>
        <ExampleV5/>
    </div>

);
