import React from 'react';
import styles from './counter.value.module.scss';
import {CounterValueProps} from '../../../types';

export const CounterValue = ({value}: CounterValueProps) => (
    <div className={styles.container}>
        <code className={styles.value}>{value}</code>
    </div>
);
