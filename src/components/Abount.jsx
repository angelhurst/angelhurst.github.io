import {Container, Row, Col}  from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Button} from "react-bootstrap";

import cv from "../docs/angel_hurst.pdf"
import selfie from '../img/selfie.png'

function Abount(){
    return(
        <Container id="abount" className="text-white">
            <Row className="justify-content-center">
                <Col xs="9" md="6" xl="3" >
                        <div className="abount-arc-1 rounded-circle p-4">
                            <div className="abount-arc-2 rounded-circle">
                                    <Image fluid roundedCircle src={selfie}></Image>
                            </div>
                        </div>
                </Col>
                <Col xs="10"  xl="6" className="align-self-center mt-4 mt-xl-0 ms-xl-4">
                    <p className="h2 typewriter ">Hola soy Ángel Hurst</p>
                        <p className="lead mt-3">Full-Stack Developer 
                            <a href={cv}  download="Angel Hurst" target="_blank" rel="noreferrer">
                                <Button className="mt-3 mt-sm-0 ms-sm-4 rounded-pill px-4 py-2 btn-cv"  size="sm">Descargar mi CV
                                </Button>
                            </a>
                        </p>
                    <p className="text-gray h5"><strong>
                    Llegue a Chile desde Honduras,
                    soy un entusiasta del desarrollo de software, 
                    encontrando en el mismo un mundo de posibilidades,
                    considerándolo la puerta de la 
                    Imaginación. 
                    </strong> </p>
                </Col>
            </Row>
            
        </Container>
    );
}

export default Abount;