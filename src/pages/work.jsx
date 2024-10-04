import { Col, Container, Row } from "react-bootstrap"
import './css/work.css'
import { Link } from "react-router-dom"

export const Work = () => {

    return (
        <Container fluid className="work-container">
            <Row className="work-section-container">
                <Col className="work-section-text" xs={12} md={5}>
                <strong>FallsFinder</strong> is a platform to discover, share, and save information about waterfalls 
                in the beautiful state of Tennessee. Users can create pages with detailed information 
                on waterfalls in their area, save their favorite falls from the site, and get map directions 
                to any of their favorite falls. Built using <strong>React</strong> with JSON server for storage and <strong>React Bootstrap </strong> 
                for styling. Integrated with <strong>Google Maps, Places, and Directions APIs </strong>to provide users with location 
                and routing data.
                <br></br>
                <br></br>
                    <a className='custom-dark-btn' href="https://fallsfinder-sovh9.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">
                        See Live Site
                        <i className="bi bi-arrow-right-circle-fill m-2"></i>
                    </a>
                </Col>
                <Col className="work-section-imagery"  xs={12} md={7}>
                <video  
                    autoPlay 
                    muted 
                    loop 
                    className="video-center"
                    playsInline 
                    >
                    <source src="/FallsFinderVideo.mp4" type="video/mp4" />
                   
                </video>
                </Col>
            </Row>
            <Row className="work-section-container">
                <Col className="work-section-text" xs={12} md={5}>
                <strong>FixWiz</strong> is a platform to facilitate connections between contractors and customers. 
                Community members post service requests of various types as they arise, and repair 
                people claim these jobs and have a source of business to grow their client base.
                Client built using <strong>React</strong> with <strong>React Bootstrap </strong> 
                for styling. API built with <strong>Python and Django</strong>
                <br></br>
                <br></br>
                    <a className='custom-dark-btn' href="https://dolphin-app-nfouu.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">
                        See Live Site
                        <i className="bi bi-arrow-right-circle-fill m-2"></i>
                    </a>
                </Col>
                <Col className="work-section-imagery"  xs={12} md={7}>
                    <video  
                        autoPlay 
                        muted 
                        loop 
                        className="video-center" 
                        playsInline
                        >
                        <source src="/FixWizVideo.mp4" type="video/mp4" />
                    
                    </video>
                </Col>
            </Row>
        </Container>
    )
}
