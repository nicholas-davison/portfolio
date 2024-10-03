import { Link } from 'react-router-dom'
import './css/home.css'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import djangoLogo from '../assets/icons/djangoLogo.svg'

export const HomePage = () => {
    return (
        <div>
            <div className="homepage">
                <h2 className="italic">The Portfolio of </h2>
                <h1 >Nicholas Davison</h1>
            </div>

            <Container 
                style={{
                    width: '100vw',
                    maxWidth: 'none',
                    padding: '0',
                }}
                >
    {/*  Experience  */}
                <Row className="border border-dark ">
                    <Col xs={12} md={6} className="section section1">
                        <h3>Hi There!</h3>
                        <p>My name is Nick Davison, and I am so glad you found your way here. 
                            With a decade of combined experience in audio engineering and inventory management, 
                            I have developed strong problem solving and managerial skills. Now, driven by a passion 
                            for technology and operational efficiency, I am transitioning into the tech industry to 
                            apply my expertise in creating data-driven solutions and optimizing processes.</p>
                        <Link to="/experience" className='custom-dark-btn'>
                            Learn More About My Professional Experience
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                        <Col xs={12} md={6} className="section section2">
                    </Col>
    {/*  Digital Work  */}                    
                    <Col xs={12} md={6} className="section section3">
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
                    <Col className="section section4">
                        <Container>
                            <Row className='text-center'>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-js custom-icon"></i>
                                    <span>JavaScript</span>
                                </Col>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-react custom-icon"></i>
                                    <span>React</span>
                                </Col>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-css3-alt custom-icon"></i>
                                    <span>CSS3</span>
                                </Col>
                            </Row>
                            <Row className='text-center'>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-python custom-icon"></i>
                                    <span>Python</span>
                                </Col>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <img 
                                        src={djangoLogo} 
                                        className='custom-icon'
                                        alt="Django Icon" 
                                        /* style={{ width: '100%', maxWidth: '110px', height: 'auto' }} */
                                    />
                                    <span>Django</span>
                                </Col>
                                <Col xs={6} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-bootstrap custom-icon"></i>
                                    <span>Bootstrap</span>
                                </Col>
                            </Row>
                            <Row className='text-center'>
                                <Col xs={12} md={12} className='icon-grid'>
                                    <i className="fa-brands fa-github custom-icon"></i>
                                    <span>GitHub</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
    {/*  Music  */}
{/*                     <Col xs={12} md={6} className="section section8">
                        <h2>Music</h2>
                        <p>I've been playing music since forever etc etc
                        </p>
                        <Link to="music" className="custom-lite-btn">
                            Listen to my Music
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} className="section section7">
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}