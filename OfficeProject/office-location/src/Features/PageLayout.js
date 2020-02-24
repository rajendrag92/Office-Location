import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


export default function PageLayout({ component: Component, ...rest }) {

    return (

        <Route {...rest} render={matchProps => (
            <Row className="mt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <Component {...matchProps} />
                </Col>
            </Row>
        )} />
    )
}