import React from 'react';
import styles from './counter.value.module.scss';

export const CounterValue = ({value}) => {

    return (
        <span className={styles.container}>{value}</span>
    );

};
