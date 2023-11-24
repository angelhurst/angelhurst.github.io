import { Container, Row, Col } from "react-bootstrap";
import shieldsImages from "../utils/shield";

function Skills(){
    return (
        <Container id="skills" className="text-white">
            <Row className="justify-content-center">
                <Col xs="9" xl="4" className="">
                    <h2>Skills</h2>
                    <p className="lead">Lenguajes de Programacion</p>
                    <img className="ms-2" src={shieldsImages['javascript']} alt="" />
                    <img className="ms-2" src={shieldsImages['typescript']} alt="" />
                    <img className="ms-2" src={shieldsImages['python']} alt="" />
                    <img className="ms-2" src={shieldsImages['html']} alt="" />
                    <img className="ms-2" src={shieldsImages['css']} alt="" />
                    <p className="lead mt-3">Framework y Librerias</p>
                    <img className="ms-2" src={shieldsImages['bootstrap']} alt="" />
                    <img className="ms-2" src={shieldsImages['react']} alt="" />
                    <img className="ms-2" src={shieldsImages['express']} alt="" />
                    <img className="ms-2" src={shieldsImages['nextjs']} alt="" />
                    <img className="ms-2" src={shieldsImages['fastify']} alt="" />
                    <img className="ms-2" src={shieldsImages['gatsby']} alt="" />
                    <img className="ms-2" src={shieldsImages['django']} alt="" />
                    <p className="lead mt-3">Bases de Datos</p>
                    <img className="ms-2" src={shieldsImages['postgresql']} alt="" />
                    <img className="ms-2" src={shieldsImages['mongo']} alt="" />
                    <img className="ms-2" src={shieldsImages['db2']} alt="" />
                    <p className="lead mt-3">Software y Herramientas</p>
                    <img className="ms-2" src={shieldsImages['aws']} alt="" />
                    <img className="ms-2" src={shieldsImages['docker']} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;