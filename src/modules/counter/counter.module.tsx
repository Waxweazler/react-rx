import React from 'react';
import styles from './counter.module.scss';
import {ChildrenOnlyProps} from '../../types';

export const Counter = ({children}: ChildrenOnlyProps) => (

    <div className={styles.container}>
        {children}
    </div>

);
