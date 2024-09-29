import { Col, Container, Row } from "react-bootstrap"
import './css/about.css'

export const About = () => {

    return (
        <Container fluid className="about-container">
            <Row style={{ height: '30vh', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img 
                    src="/alim-cxj-8PILRU4-unsplash.jpg" 
                    alt="Red-orange stucco wall" 
                    className="top-image" />
            </Row>
            <Row>
                <Col>
                    <p>Hey, I'm Nicholas!

I live in Nashville, TN, where my love for music and the outdoors inspires much of my life and work. I’m a software developer with a background as a professional recording engineer, which taught me how to solve problems under pressure and think critically to find creative solutions.

When I’m not coding, you can find me playing guitar, hiking, camping, or traveling to discover new places. I’ve also found a passion for woodworking, where I apply the same hands-on problem-solving skills I use in my professional life. Whether it’s building a custom piece of furniture or writing clean, efficient code, I’m always working on something that challenges me.

At the core, I’m a builder. I love taking ideas and turning them into something tangible—whether that’s an innovative solution in tech</p>
                </Col>
            </Row>
        </Container>
    )
}