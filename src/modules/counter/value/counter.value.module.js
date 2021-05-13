import React from 'react';
import styles from './counter.value.module.scss';

export const CounterValue = ({value}) => {

    return (
        <div className={styles.container}>
            <code className={styles.value}>{value}</code>
        </div>
    );

};
