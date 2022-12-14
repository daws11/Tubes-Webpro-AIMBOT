import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Aboutus from './Aboutus';
import CS from './CS';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function AutoLayoutExample() {
  return (
    <Router>
      <div>
    <Container>
    <Row>
        <Col>
        <Figure>
        <Image 
            width={100}
            height={70}
            src='https://s1.rdbuz.com/web/images/home/promise.png' className='img-fluid shadow-4' ></Image>
        <Figure.Caption>
            <h4>Kelebihan layanan kami</h4>
        </Figure.Caption>
        </Figure>
        </Col>

    </Row>
      <Row>
        <Col>   
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/app.png"
      />
      <Figure.Caption>
      <h1>Fleksibel</h1>
      <h5>Sekarang pesan tiket bisa kapanpun dan dimanapun.</h5>
      </Figure.Caption>
    </Figure>
    </Col>

    <Col>
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/cloud.png"/>
      <Figure.Caption>
      <h1>Informatif</h1>
      <h5>Anda dapat melihat informasi tentang armada dan tiket anda.</h5>
      </Figure.Caption>
    </Figure>
        </Col>

    <Col>
        <Figure>
      <Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src="https://www.newshantika.co.id/assets/img/ux.png"
      />
      <Figure.Caption>
      <h1>Praktis</h1>
      <h5>Anda tidak perlu repot cukup klik saja.</h5>
      </Figure.Caption>
     </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
        <Figure>
            <Image 
            width={150}
            height={200}
            src='https://www.newshantika.co.id/assets/img/smartmockups_kt2px5sw.png' className='img-fluid shadow-4' ></Image>
        <Figure.Caption>
            <h1>Download Apikasi Mobile Kami Sekarang!</h1>
        </Figure.Caption>
        </Figure>
        </Col>
      </Row> 
      <Row>
        <Col>
        <Figure>
        <Figure.Caption>
            <h1>About Us!</h1>
            <h4>PO. New Shantika didirikan pada bulan Maret 2003.</h4>
            
        </Figure.Caption>
        
        </Figure>
        <Nav.Link as={Link} to="/About"><Button variant="primary" >Cari Tahu lebih lanjut !</Button></Nav.Link>
        </Col>
        <Col>
      <Figure>
      <Image 
            
            src='https://www.newshantika.co.id/assets/img/ic-new-shantika_ilustrasi-bus-shantika.png' className='img-fluid shadow-4' ></Image>
        </Figure>
        </Col>
      </Row>

      <Row>

        <Col>
        <Figure>
        <Image 
             width={300}
             height={400}
            src= 'https://i1.wp.com/intraoralscanners.com/wp-content/uploads/2018/06/faq_icon_pic.png' className='img-fluid shadow-4' ></Image>
          <Figure.Caption>
        <h4>FAQ</h4>
        <Nav.Link as={Link} to="/Bantuan"><Button variant="primary" >Lihat FAQ </Button></Nav.Link>
        </Figure.Caption>
        </Figure>
        </Col>
      </Row>

      <Row>
        
      </Row>
      
    </Container>
    </div>
    <div>
                    <Switch>
                        <Route path="/Bantuan">
                            <CS />
                        </Route> 
                        <Route path="/About">
                            <Aboutus />
                        </Route> 
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
    </Router>
    
  );
}

export default AutoLayoutExample;