import React from 'react';
import styles from './example.module.css'

export const Example = props => {

    const {description, children} = props;

    return (
        <div className={styles.container}>
            <h3 className={styles.description}>{description}</h3>
            {children}
        </div>
    )

}
