import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import ModalCreateData from './ModalCreateData';

function DealTracking() {
    const [isShow, setModalCreateOpen] = useState(false)
    const history = useHistory();
    const [dataBoard, setBoard] = useState([
        { boardName: "Test1" },
        { boardName: "Test2" },
        { boardName: "Test3" },
        { boardName: "Test4" },
        { boardName: "Test5" },
        { boardName: "Test6" },
        { boardName: "Test7" },
    ])

    function handlerClickDestination(destination) {
        history.push(destination)
    }

    return (
        <div>
            <Row style={{ marginTop: 20 }}>
                <Col sm="3" className='cardSpace'>
                    <Card className="card-entity" onClick={() => (setModalCreateOpen(!isShow))}>
                        <Row className="card-row-entity">
                            <Col sm="10" className="entity-col-10">
                                <Card className="card-body-entity">
                                    <label className="entity-title">Buat Board +</label>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                {dataBoard.map((item, index) => {
                    return (
                        <Col sm="3" id={index} className='cardSpace'>
                            <Card className="card-entity" onClick={() => handlerClickDestination("/Board")}>
                                <Row className="card-row-entity">
                                    <Col sm="10" className="entity-col-10">
                                        <Card className="card-body-entity">
                                            <label className="entity-title">{item.boardName}</label>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <ModalCreateData
                isOpen={isShow}
                isClose={() => setModalCreateOpen(!isShow)} />
        </div>

    )
}

export default DealTracking