import './css/home.css'
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export const HomePage = () => {
    return (
        <div>
            <div className="homepage">
                <h5 className='italic'>The Portfolio of </h5>
                <h1>Nicholas Davison</h1>
            </div>

            {/* Additional content sections */}
            <Container 
                style={{
                    width: '100vw',
                    maxWidth: 'none',
                    padding: '0',
                }}
            >
                <Row className=" border border-dark ">
                    <Col xs={12} md={6} className="section section1">
                        <h3>Hi There!</h3>
                        <p>My name is Nick Davison, and I am so glad you found your way here. 
                            I am an audio engineer, musician, and former operations manager 
                            making a transition into the technology industry.</p>
                        <Button className='custom-btn'>
                            Learn More About Me
                            <i className="bi bi-arrow-right-circle-fill m-2"></i>
                        </Button>
                    </Col>
                    <Col xs={12} md={6} className="section section2">
                        
                    </Col>
                    <Col xs={12} md={6} className="section section3">
                        <h2>Professional Experience</h2>
                        <p>With a decade of combined experience in audio engineering and inventory management, 
                            I have developed strong problem solving and managerial skills. Now, driven by a passion 
                            for technology and operational efficiency, I am transitioning into the tech industry to 
                            apply my expertise in creating data-driven solutions and optimizing processes.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="section section4">
                        <Card></Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}