import {Container, Row, Col}  from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Button} from "react-bootstrap";

import desktop from "../img/desktop.jpeg"
import software from "../img/software2.png"
import gears from "../img/gears.png"


import StickNote from "./StrickNote";

function Abount(){
    return(
        <Container className="header-title d-none ">
            
            <Row className="mt-5 pt-5">
                <Col xs="6" xl="3">
                    <StickNote text="el software es la puerta al mundo de la imaginacion" />
                </Col>
                <Col xs="6" xl="3">
                    <StickNote text="el software es la puerta al mundo de la imaginacion" />
                </Col>
            </Row>
        </Container>
    );
}

export default Abount;