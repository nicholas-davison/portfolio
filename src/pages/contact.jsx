import { Col, Container, Row } from "react-bootstrap"
import './css/contact.css'

export const Contact = () => {

    return (
        <div className="contact-page">
            <Container className="contact-container">
                        <a href="https://github.com/nicholas-davison" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github m-4 custom-icon-footer"></i>
                        </a>
                       <a href="https://www.linkedin.com/in/nickdavison13/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin m-4 custom-icon-footer"></i>
                        </a>
                       <a href="mailto:nick.a.davison@gmail.com">
                            <i className="bi bi-envelope-fill m-4 custom-icon-footer"></i>
                        </a>
            </Container>
        </div>
    )
}
