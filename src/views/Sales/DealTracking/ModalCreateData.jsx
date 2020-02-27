import React, { useState } from 'react';
import {
    Modal,
    Row,
    ModalBody,
    Button,
    ModalHeader,
    ModalFooter,
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalCreateData({ isOpen, isClose }) {

    return (
        <div>
            <Modal isOpen={isOpen} className="modal-dialog-centered">
                <ModalHeader>Board</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Judul Board</Label>
                            <Input type='text'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mata Uang</Label>
                            <Input type='text'></Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Simpan</Button>{' '}
                    <Button outline color="secondary" className="button-size" onClick={isClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalCreateData