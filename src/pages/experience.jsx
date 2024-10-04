import { Col, Container, Row } from "react-bootstrap"
import './css/experience.css'

export const Experience = () => {

    return (
        <div>
            <Container fluid className="experience-container">
                <Row>
                    <img 
                        src="/SpainRoofs.png" 
                        alt="orange red painting" 
                        className="top-image" />
                </Row>
                <Row className="section-header">
                    <Col>
                        <h2>Technical Experience</h2>
                    </Col>
                </Row>
                <Row className="section-body">
                    <Col xs={12} md={4} className="section-detail-header">
                        <h5>Nashville Software School | Feb 2024 - Sept 2024</h5>
                        <h6 className="italic">Intensive full-time, six months software development bootcamp focusing on Python/Django 
                            development fundamentals and problem solving. The final three months of the program being 
                            executed in a simulated company environment with SCRUM methodology. 
                        </h6>
                        <h6 className="italic">
                        Additional seven week professional enrichment course providing a comprehensive focus on SQL fundamentals and 
                            problem-solving techniques.
                        </h6>
                    </Col>
                    <Col xs={12} md={8} className="section-detail">
                        <ul>
                            <li>Daily hands on application of OOP fundamentals through group and individual projects</li>
                            <li>Created single page applications in JavaScript, as well as in the React framework</li>
                            <li>Project management/tracking with GitHub project boards and issue tracking</li>
                            <li>Source code/version control with Git/GitHub</li>
                            <li>Solution Design: white-boarding and wireframes</li>
                            <li>Leveraged Django for creating and editing server-generated web applications</li>
                            <li>Created RESTful API’s with Django REST framework</li>
                            <li>Retrieved and stored database information with SQLite</li>
                            <li>Practiced testing with Python’s unit test framework</li>
                        </ul>
                        <hr className="gradient-line"/>
                        <ul>
                            <li>Gain hands-on experience with PostgreSQL</li>
                            <li>Learn the fundamentals of database design, including creating Entity-Relationship Diagrams (ERDs) and normalizing data</li>
                            <li>Master SQL scripting to modify database structures using CREATE and ALTER statements</li>
                            <li>Practice data manipulation through INSERT, UPDATE, and DELETE operations</li>
                            <li>Explore advanced querying techniques, including Sub-Queries, Common Table Expressions (CTEs), and Window Functions</li>
                            <li>Automate processes with VIEWs, Stored Procedures, Triggers, and Transactions</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="section-header">
                    <Col>
                        <h2>Professional Experience</h2>
                    </Col>
                </Row>
                <Row className="section-body">
                    <Col xs={12} md={4} className="section-detail-header">
                        <h5>The North American Guitar DBA Carter Vintage Guitars; Nashville, Tennessee - 2020 - 2023</h5>
                        <h6 className="italic">Industry leader In vintage and boutique guitar Inventory and sales
                        </h6>
                    </Col>
                    <Col xs={12} md={8} className="section-detail">
                        <h5>Head of Operations - March 2022 - August 2023</h5>
                        <ul>
                            <li>Design and implement custom built inventory management system with third party developers, with the goal of increasing data driven operations</li>
                            <li>Manage and supervise operations and logistics team consisting of inventory management, authentication and procurement, repair shop, and shipping/receiving</li>
                            <li>Optimize inventory intake procedures to increase volume and accuracy, supporting a 100%+ increase in sales in first year</li>
                            <li>Report operational performance to C-suite executives and board of directors</li>
                        </ul>
                        <hr className="gradient-line"/>
                        <h5>Inventory Manager - September 2020 - March 2022</h5>
                        <ul>
                            <li>Manage inbound and outbound inventory from 30+ vendors both physically and via IMS</li>
                            <li>Administrate repair schedule for incoming and outgoing instruments</li>
                            <li>Learn and assist with light repairs on acoustic and electric instruments</li>
                            <li>Create customer facing content detailing physical and sonic features of exceptional instruments with a tight turnaround schedule</li>
                            <li>Perform customer service duties including sales and customer support</li>
                        </ul>
                    </Col>
                        <hr className="gradient-line"/>
                </Row>
                <Row className="section-body">
                    <Col xs={12} md={4} className="section-detail-header">
                        <h5>Freelance/Self Employed - 2017 - 2020</h5>
                        <h6 className="italic">Employed by various artists and studios as an audio engineer
                        including Jesse Colin Young, Mark Cohn, Reba McEntire, Chris Stapleton, and Donovan
                        </h6>
                    </Col>
                    <Col xs={12} md={8} className="section-detail">
                        <h5>Audio Engineer; Greater Nashville Metropolitan Area, Tennessee - 2017-2020</h5>
                        <ul>
                            <li>Receive, interpret, and execute setups for a wide variety of recording sessions at Warner Studios Nashville</li>
                            <li>Manage data backups of all sessions and assist with generation of deliverables</li>
                            <li>Run Front of House amplification for multiple music groups</li>
                            <li>Interface with staff engineers of venues to ensure shows run smoothly and as planned</li>
                            <li>Advance tech details for multiple groups and dates simultaneously</li>
                        </ul>
                        <hr className="gradient-line"/>
                        <h5>Senior Recording Engineer, Aspen Music Festival and School; Aspen, Colorado 2017 & 2018</h5>
                        <ul>
                            <li>Record and edit classical music performances for broadcast in 3 different halls</li>
                            <li>Maintain organization of multiple broadcast standards for distribution and archive</li>
                            <li>Formulate plans of action and direct team of engineers for recording projects</li>
                            <li>Run Front of House amplification for contemporary music concerts</li>
                        </ul>
                    </Col>
                        <hr className="gradient-line"/>
                </Row>
                <Row className="section-body">
                    <Col xs={12} md={4} className="section-detail-header">
                        <h5>New England Conservatory of Music; Boston, Massachusetts - 2013-2017</h5>
                        <h6 className="italic">One of the oldest and most prestigious independent music schools in the United States
                        </h6>
                    </Col>
                    <Col xs={12} md={8} className="section-detail">
                        <h5>Audio Engineer</h5>
                        <ul>
                            <li>Record and edit concerts in 4 different halls for archival purposes</li>
                            <li>Prepare, record, and mix jazz/classical studio sessions</li>
                            <li>Maintain the studio and concert facilities, audio archive, and concert catalog</li>
                            <li>Provide A/V support and troubleshooting for classroom and presentation scenarios</li>
                            <li>Implement and oversee new video recording and streaming services for student recitals</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="section-header">
                    <Col>
                        <h2>Education</h2>
                    </Col>
                </Row>
                <Row className="section-body-education">
                    <Col xs={12} md={6} className="section-detail-header">
                        <h4>2024</h4>
                        <h5 className="italic">Nashville Software School</h5>
                        <h5>Certificate, Full Stack Web Development Bootcamp</h5>
                    </Col>
                    <Col xs={12} md={6} className="section-detail-header">
                        <h4>2009-2013</h4>
                        <h5 className="italic">Appalachian State University, Boone, NC</h5>
                        <h5>Bachelor of Science in Music Industry Studies, Concentration in Audio Engineering, Minor in Business - 3.79 GPA</h5>
                    </Col>
                </Row>
            </Container>
        </div>
)}