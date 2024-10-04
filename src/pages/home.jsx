import { Link } from 'react-router-dom'
import './css/home.css'
import { Col, Container, Row } from "react-bootstrap"
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
                            Driven by a passion for technology and operational efficiency, I am transitioning into the tech industry
                            with a decade of combined experience in audio engineering and operations leadership. I have developed strong
                            problem solving and managerial skills in my career, and aim to apply my expertise in creating data-driven 
                            solutions and optimizing processes.
                            </p>
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
                        <p> I have a strong foundation in the technologies listed and strive to continually
                            learn and increase my experience with cutting edge tools.
                        </p>
                        <Link to="work" className="custom-lite-btn">
                            See my digital work
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Link>
                    </Col>
                    <Col className="section section4">
                        <Container>
                            <Row className='text-center'>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-js custom-icon"></i>
                                    <span>JavaScript</span>
                                </Col>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-react custom-icon"></i>
                                    <span>React</span>
                                </Col>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-css3-alt custom-icon"></i>
                                    <span>CSS3</span>
                                </Col>
                            </Row>
                            <Row className='text-center'>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-python custom-icon"></i>
                                    <span>Python</span>
                                </Col>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-bootstrap custom-icon"></i>
                                    <span>Bootstrap</span>
                                </Col>
                                <Col xs={4} md={4} className='icon-grid'>
                                    <i className="fa-brands fa-github custom-icon"></i>
                                    <span>GitHub</span>
                                </Col>
                            </Row>
                            <Row className='text-center'>
                                <Col xs={12} md={12} className='icon-grid'>
                                    <div className='svg'>
                                        <img 
                                            src={djangoLogo} 
                                            className='custom-icon django-logo'
                                            alt="Django Icon" 
                                        />
                                    </div>
                                    <span>Django</span>
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