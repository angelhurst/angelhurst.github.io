import { Container, Row, Col } from "react-bootstrap";
import { Card, Carousel } from "react-bootstrap";
import {Button} from "react-bootstrap";
import StickNote from "./StrickNote";


import AquarovLogin from "../img/Aquarov/login.png"
import AquarovDashBoard from "../img/Aquarov/dashboard.png"



function Porfolio(){
    return(
       <Container id="porfolio" className="rounded text-white">
            <Row className="justify-content-center pt-4">
                <Col xs="10" className="text-centers">
                    <p className="h2 "><strong>Porfolio</strong></p>
                </Col>
            </Row>
            <Row className="pt-5 justify-content-center">
                <Col xs="10" xl="8" className=""  >
                        <Carousel className="" controls={false} >
                            <Carousel.Item>
                                <img 
                                className="d-block w-100 img-carousel"
                                src={AquarovLogin}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 img-carousel"
                                src={AquarovDashBoard}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                </Col>
                <Col xs="10" xl="4" className="position-relative bg-danger">
                    <div className="text-end">
                        <h3 ><strong>Aquarov Fuel Guard</strong></h3>
                        <div className="porfolio-msg rounded">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ipsam. Assumenda placeat, culpa voluptatum quia nam pariatur deleniti illo ipsum! Harum repudiandae modi ipsum distinctio dolores unde et nulla iusto?
                        </div>
                        <div className="text-gray">
                            <strong>ReactJS</strong>

                        </div>
                    </div>

                </Col>
            </Row>
       </Container>
    );
}

export default Porfolio;