import {Container, Row, Col}  from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Button} from "react-bootstrap";

import software from "../img/software2.png"
import gears from "../img/gears.png"
import { ArrowDown } from "react-bootstrap-icons";

function Abount(){
    return(
        <header>
            <Container className="header text-white">
                <Row className=" h-100 ">
                    <Col xs="12" xl="6"  className="align-self-center order-2 order-xl-1">
                        <Row className="justify-content-center ">
                            <Col xs="10" xl="9">
                                <Row>
                                    <Col>
                                        <div className="mt-5 mt-xl-0">
                                            <p className="h2">
                                            Cada línea de código es una oportunidad para cambiar el mundo y mejorar la vida de las personas
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row  className="mt-4" >
                                    <Col xs="7" >
                                        <Row className="align-items-center h-100">
                                            <Col className="align-self-center h6" >
                                                <Button  variant="outline-light" className="header-buttom  rounded-pill" >
                                                            <ArrowDown size={25}/>
                                                </Button>
                                                <h5 className="mt-3">Mas información <br /> sobre Angel</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs="5"  >
                                        <div className="header-gears position-relative">
                                                <Image src={gears} className="gears-1" />
                                                <Image src={gears} className="gears-2" />
                                                <Image src={gears} className="gears-3" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" xl="6" className="text-center align-self-centers bg-whites order-1 order-xl-2">
                        <Row className="justify-content-center">
                            <Col xs="10" className="position-relative">
                                    <Image fluid src={software}  />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Abount;