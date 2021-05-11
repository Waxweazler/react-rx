import React from 'react';
import styles from '../../counter/output/counter.output.module.css';
import {useCounterContext} from '../counter.context';

export const CounterOutput = () => {

    const {value} = useCounterContext();

    return (
        <span className={styles.output}>{value}</span>
    );

};
