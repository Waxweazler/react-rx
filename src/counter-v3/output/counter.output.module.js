import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../../counter/output/counter.output.module.css';

export const CounterOutput = () => {

    const value = useSelector(state => state.value);

    return (
        <span className={styles.output}>{value}</span>
    );

};
