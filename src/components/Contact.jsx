import { Container, Row, Col } from "react-bootstrap";

function Contact(){
    return (
        <Container  id="contact" className="text-white">
            <Row className="justify-content-center">
                <Col xs="12"  xl='6' className="py-4 text-center">
                    <h2 className="mb-5">Contacto</h2>
                    <Row>
                        <Col xs="4" xl="4">
                            <div className="rounded-circle bg-white icon-contact position-relative mx-auto">
                                <a target="_blank" href="https://www.linkedin.com/in/angelhurst-dev/" rel="noreferrer" >
                                    <img className="position-absolute top-50 start-50 translate-middle" height="50" width="50" src="https://cdn.simpleicons.org/linkedin/#0A66C2" alt="" />
                                </a>
                            </div>
                        </Col>
                        <Col xs="4" xl="4">
                            <div className="rounded-circle bg-white icon-contact position-relative mx-auto">
                                <a target="_blank" href="https://github.com/angelhurst" rel="noreferrer" >
                                    <img className="position-absolute top-50 start-50 translate-middle" height="50" width="50" src="https://cdn.simpleicons.org/github/#0A66C2" alt="" />
                                </a>
                            </div>
                        </Col>
                        <Col xs="4" xl="4">
                            <div className="rounded-circle bg-white icon-contact position-relative mx-auto">
                                <a href="mailto:angelhurst@hotmail.com?Subject=Saludos%20mire%20tu%20porfolio">
                                    <img className="position-absolute top-50 start-50 translate-middle" height="50" width="50" src="https://cdn.simpleicons.org/microsoftoutlook/#0078D4" alt="" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <p className="lead mt-5">Email: angelhurst@hotmail.com</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;