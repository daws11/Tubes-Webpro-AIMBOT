
import React,{useState} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Formulir() {
    const [setDate] = useState();
    return (  
        <>
         <Card className="text-center">
      <Card.Body>
        <Card.Title>Mau pergi kemana?</Card.Title>
        <Card.Text>
        <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Kota Keberangkatan" />
        </Col>
        <Col>
          <Form.Control placeholder="Kota Tujuan" />
        </Col>
        <Col>
        <Form.Control placeholder ="Tanggal Berangkat " input type="date" onChange={e => setDate(e.target.value)} />
        </Col>
      </Row>
    </Form>
        </Card.Text>
        <Button variant="primary">Cari Tiket!</Button>
      </Card.Body>
    </Card>
          
        </>
    );
}

export default Formulir;