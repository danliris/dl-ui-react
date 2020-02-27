import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Container, Button, CardBody, CardHeader, CardFooter } from 'reactstrap'

function Board() {

    return (
        <div>

            <Container fluid>
                <Row>
                    <h2>Test</h2>
                </Row>
                <hr></hr>
                <Row>
                    <Button color='primary'>Buat Stage</Button>
                    <Button color='primary'>Buat Deal</Button>
                </Row>
                <br></br>
                <Row>
                    <Col md={3} className='styleBoardDetail'>
                        <Card>
                            <CardHeader>Test</CardHeader>
                            <CardBody style={{ height: 200 }}>
                                test
                            </CardBody>
                            <CardFooter>
                                test
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Board;