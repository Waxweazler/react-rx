import React from 'react';
import {Card} from 'react-bootstrap';
import styles from './example.module.scss';
import {ExampleProps} from '../../types';

export const Example = ({description, children}: ExampleProps) => (

    <div className={styles.container}>
        <Card>
            <Card.Header>
                <span className="font-weight-bold">{description}</span>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    </div>

);
