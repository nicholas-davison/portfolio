import { Link } from 'react-router-dom'
import './css/home.css'
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export const HomePage = () => {
    return (
        <div>
            <div className="homepage">
                <h5 className='italic'>The Portfolio of </h5>
                <h1>Nicholas Davison</h1>
            </div>

            <Container 
                style={{
                    width: '100vw',
                    maxWidth: 'none',
                    padding: '0',
                }}
                >
    {/*  Music  */}
                <Row className="border border-dark ">
                    <Col xs={12} md={6} className="section section1">
                        <h3>Hi There!</h3>
                        <p>My name is Nick Davison, and I am so glad you found your way here. 
                            I am an audio engineer, musician, and former operations manager 
                            making a transition into the technology industry.</p>
                        <Link to="/about" className='custom-dark-btn'>
                            Learn More About Me
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                        <Col xs={12} md={6} className="section section2">
                    </Col>
    {/*  Experience  */}                    
                    <Col xs={12} md={6} className="section section3">
                        <h2>Professional Experience</h2>
                        <p>With a decade of combined experience in audio engineering and inventory management, 
                            I have developed strong problem solving and managerial skills. Now, driven by a passion 
                            for technology and operational efficiency, I am transitioning into the tech industry to 
                            apply my expertise in creating data-driven solutions and optimizing processes.
                        </p>
                        <Link to="experience" className="custom-lite-btn">
                            See my Credentials
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                    <Col className="section section4">
                        <Container>
                            <Row className='text-center '>
                                <Col className='icon-grid'>
                                    <a href="https://github.com/nicholas-davison" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github m-4 custom-icon"></i>
                                    </a>
                                </Col>
                                <Col className='icon-grid'>
                                    <a href="https://www.linkedin.com/in/nickdavison13/" target="_blank" rel="noopener noreferrer">    
                                    <i className="bi bi-linkedin m-4 custom-icon"></i>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='icon-grid'>
                                    <i className="bi bi-cup-hot-fill m-4 custom-icon"></i>
                                </Col>
                                <Col className='icon-grid'>
                                    <i className="bi bi-boombox-fill m-4 custom-icon"></i>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
    {/*  Digital Work  */}                
                    <Col xs={12} md={6} className="section section5">
                        <Card style={{ width: '560px', height: '315px' }}>
                            <Card.Body 
                                className="d-flex justify-content-center align-items-center"
                            >Placeholder for video runthrough of FallsFinder
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="section section6">
                        <h2>Work Examples</h2>
                        <p><strong>FallsFinder</strong> is a platform to discover, share, and save information about waterfalls 
                            in the beautiful state of Tennessee. Users can create pages with detailed information 
                            on waterfalls in their area, save their favorite falls from the site, and get map directions 
                            to any of their favorite falls.
                        </p>
                        <Link to="work" className="custom-lite-btn">
                            See my digital work
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>

    {/*  Music  */}
                    <Col xs={12} md={6} className="section section8">
                        <h2>Music</h2>
                        <p>I've been playing music since forever etc etc
                        </p>
                        <Link to="music" className="custom-lite-btn">
                            Listen to my Music
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} className="section section7">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}