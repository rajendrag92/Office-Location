import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <Row>
            <Col>
                <Row className='mb-5'> 
                    <Col>
                        <h2>Login</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="userNameGroup">
                                <Row>
                                    <Col md={2}>
                                        <Form.Label>User</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Control type='text' placeholder="User Name"></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="userPasswordGroup">
                                <Row>
                                    <Col md={2}>
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Control type='password'></Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="userNameGroup">
                                <hr></hr>
                                <Row className="mt-3">
                                    <Col md={{ span: 2, offset: 2 }}>

                                        <Button variant='primary' size='lg'>Submit</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}