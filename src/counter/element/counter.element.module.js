import React from 'react';
import styles from './counter.element.module.css';

export const CounterElement = (props) => {

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );

};
