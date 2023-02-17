import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import footerlogo from "../images/footerlogo.png";
import app from "../images/app.png";
import googleplay from '../images/footerlogo.png';

function Footer() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
             <img src={footerlogo} />
             <h3>A Platform for moving people, goods and services</h3>
             <p>From California</p>
            
            </Col>
            <Col>
            <h4>Solutions</h4>
            <p>Taxi & Transportation</p>
            <p>Car Rental Software</p>
            <p>Bike Taxi Software</p>
            <p>Paratransit Software</p>
            <p>Bus Charter/Shuttle Software</p>
            <p>Limousine Software</p>
            <p>Digital Logistics Platform</p>
            
            </Col>
            <Col>
            <h4>LEARN MORE</h4>
            <p>Future of TaxiMobility</p>
            <p>Features</p>
            <p>Blog</p>
            <p>Why choose us</p>
            <p>Release Notes</p>
            <p>FAQ</p>
            
            </Col>
            <Col>
            <h4>COMPANY</h4>
            <P>Features</P>
            <P>Pricing</P>
            <P>About us</P>
            <P>Partners</P>
            <P>Customers</P>
            
            </Col>
            <Col>
            <h4>GET OUR APP</h4>
            <img src={app}  />
            <img src={googleplay}/>
            </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer
