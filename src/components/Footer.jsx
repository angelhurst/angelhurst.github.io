import { Container, Row, Col } from "react-bootstrap";
import shieldsImages from "../utils/shield";

function Footer(){
    return (
        <footer className=" text-white bg-blue">
            <Container fluid className="h-100 ">
                <Row className="h-100 align-items-center">
                    <Col  className="">
                        <p className="lead">Este Sitio esta desarrollado con:</p>
                        <img className="ms-2" src={shieldsImages['html']} alt="" />
                        <img className="ms-2" src={shieldsImages['css']} alt="" />
                        <img className="ms-2" src={shieldsImages['bootstrap']} alt="" />
                        <img className="ms-2" src={shieldsImages['react']} alt="" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;