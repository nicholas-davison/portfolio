import React from 'react';
import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
        <Container>
            <h2>Lets Connect!</h2>
            <Row>
                <Col xs={12} md={6}>
                    <p>I love meeting new people. Please reach out and say hello!</p>
                    <br/>
                    <Link to="contact" className="custom-lite-btn">
                        Contact Me
                        <i className="bi bi-arrow-right-circle-fill m-2"></i>
                    </Link>
                </Col>
                <Col xs={12} md={3}>
                    akdsfhlsdkj
                </Col>
                <Col xs={12} md={3}>
                    sakdfhslkdjhf
                </Col>
            </Row>
        </Container>
        <p>&copy; 2024 Nicholas Davison. All rights reserved.</p>
    </footer>
  );
};