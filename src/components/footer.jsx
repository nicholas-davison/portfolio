import React from 'react';
import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="footer" className="footer bg-dark text-white text-center py-3">
        <Container >
            <h2 className="footer-title">Lets Connect!</h2>
            <Row className="footer-row">
                <Col xs={12} md={8}>
                    <p>I love meeting new people. Please reach out and say hello! <br></br>
                    Email me directly at <strong>nick.a.davison@gmail.com</strong> or use the links on the right to connect!
                     </p>
                    
{/*                     <Link to="contact" className="custom-lite-btn">
                        Contact Me
                        <i className="bi bi-arrow-right-circle-fill m-2"></i>
                    </Link> */}
                </Col>
                <Col xs={12} md={4}>
                    <a href="https://github.com/nicholas-davison" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github m-4 custom-icon-footer"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nickdavison13/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin m-4 custom-icon-footer"></i>
                    </a>
                    <a href="mailto:nick.a.davison@gmail.com">
                            <i className="bi bi-envelope-fill m-4 custom-icon-footer"></i>
                        </a>
                </Col>
            </Row>
        </Container>
        <p className="footer-copy">&copy; 2024 Nicholas Davison. All rights reserved.</p>
    </footer>
  );
};