import React from 'react';
import styles from './counter.module.scss';

export const Counter = ({children}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    );

};
