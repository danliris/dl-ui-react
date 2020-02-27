import React from "react";
import { Row, Container, Col, ButtonToolbar, Button, FormControl, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import '../../../assets/css/style.css';
import DataTable, { createTheme } from 'react-data-table-component';


function Kategori() {
    const history = useHistory();
    function handlerClickDestination(destination) {
        history.push(destination)
    }

    const data = [

        { id: 1, namaAkun: 'BCA', noAkun: '015.29.7344.4', kodeBank: '-', namaBank: 'BCA', alamatBank: '-', kodeMataUang: 'USD', namaDivisi: 'T', COA: '1042.01.0.00' },
        { id: 2, namaAkun: 'BCA IDR', noAkun: '015.29.7344.4', kodeBank: '-', namaBank: 'BCA', alamatBank: '-', kodeMataUang: 'USD', namaDivisi: 'T', COA: '1042.01.0.00' },
        { id: 3, namaAkun: 'PT. DAN LIRIS', noAkun: '015.29.7344.4', kodeBank: '-', namaBank: 'BCA', alamatBank: '-', kodeMataUang: 'USD', namaDivisi: 'T', COA: '1042.01.0.00' },
        { id: 4, namaAkun: 'BUKOPIN IDR', noAkun: '015.29.7344.4', kodeBank: '-', namaBank: 'BCA', alamatBank: '-', kodeMataUang: 'USD', namaDivisi: 'T', COA: '1042.01.0.00' },
        { id: 5, namaAkun: 'BUKOPIN USD', noAkun: '015.29.7344.4', kodeBank: '-', namaBank: 'BCA', alamatBank: '-', kodeMataUang: 'USD', namaDivisi: 'T', COA: '1042.01.0.00' }

    ]
    const columns = [
        {
            name: 'Nama Akun',
            selector: 'namaAkun',
            sortable: true,
        },
        {
            name: 'No Akun',
            selector: 'noAkun',
            sortable: true,
        },
        {
            name: 'Kode Bank',
            selector: 'kodeBank',
            sortable: true,
        },
        {
            name: 'Nama Bank',
            selector: 'namaBank',
            sortable: true,
        },
        {
            name: 'Alamat Bank',
            selector: 'alamatBank',
            sortable: true,
        },
        {
            name: 'Kode Mata Uang',
            selector: 'kodeMataUang',
            sortable: true,
        },
        {
            name: 'Nama Divisi',
            selector: 'namaDivisi',
            sortable: true,
        },
        {
            name: 'COA',
            selector: 'COA',
            sortable: true,
        },
    ];

    return (
        <Container fluid>
            <Row>
                <h3 className='wel-text'>Kategori</h3>
            </Row>
            <Row>
                <Col md={0}>
                    <Button variant="primary">Buat</Button>
                </Col>
                <Col md={3} style={{left: 800}}>
                    <FormControl type='text' placeholder='Pencarian...'></FormControl>
                </Col>
            </Row>
            <Row>
                <DataTable noHeader columns={columns} data={data} />
            </Row>
        </Container>
    )
}

export default Kategori;