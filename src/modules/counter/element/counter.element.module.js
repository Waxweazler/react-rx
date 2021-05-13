import React from 'react';
import styles from './counter.element.module.scss';

export const CounterElement = (props) => {

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );

};
