import React from 'react';
import {Card} from 'react-bootstrap';

export const Example = ({description, children}) => {

    return (
        <Card>
            <Card.Header>{description}</Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );

}
