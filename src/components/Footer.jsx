import { Container, Row, Col } from "react-bootstrap";
import shieldsImages from "../utils/shield";

function Footer(){
    return (
        <footer className=" text-white bg-blue">
            <Container fluid className="h-100 ">
                <Row className="h-100 align-items-between py-4">
                    <Col  className="">
                        <p className="">Este Sitio esta desarrollado con:</p>
                        <img className="ms-2" src={shieldsImages['html']} alt="" />
                        <img className="ms-2" src={shieldsImages['css']} alt="" />
                        <img className="ms-2" src={shieldsImages['bootstrap']} alt="" />
                        <img className="ms-2" src={shieldsImages['react']} alt="" />
                        <p className="mt-3">
                                Repositorio - 
                            <a target="_blank" href="https://github.com/angelhurst/angelhurst.github.io" rel="noreferrer" >
                                <img className="ms-2" src={shieldsImages['github']} alt="" /> 
                            </a>
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;