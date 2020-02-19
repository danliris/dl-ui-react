import React from "react";
import { Row, Container, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../assets/css/style.css';


function Dashboard() {
    const history = useHistory();
    function handlerClickDestination(destination) {
        history.push(destination)
    }

    return (
        <Container fluid>
            <Row>
                <Col md={9} className='wel-text'>
                    <h3>SELAMAT DATANG DI APLIKASI DAN LIRIS</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;