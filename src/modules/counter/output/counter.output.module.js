import React from 'react';
import styles from './counter.output.module.css';

export const CounterOutput = ({value}) => {

    return (
        <span className={styles.output}>{value}</span>
    );

};
