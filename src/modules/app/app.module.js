import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {ExampleV1} from '../../examples/v1/example.module';
import {ExampleV2} from '../../examples/v2/example.module';
import {ExampleV3} from '../../examples/v3/example.module';
import {ExampleV4} from '../../examples/v4/example.module';

export const App = () => {

    return (
        <Container>
            <Row>
                <Col xs="6">
                    <ExampleV1/>
                </Col>
                <Col xs="6">
                    <ExampleV2/>
                </Col>
                <Col xs="6">
                    <ExampleV3/>
                </Col>
                <Col xs="6">
                    <ExampleV4/>
                </Col>
            </Row>
        </Container>
    );

};
