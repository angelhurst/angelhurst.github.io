import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import StickNote from "./StrickNote";

import { FileEarmarkPlus } from "react-bootstrap-icons";
import { useState } from "react";

const firstNote = [
    '"La única forma de hacer un gran trabajo, es amar lo que haces" <Steve Jobs>',
    '"El software es una gran combinación entre arte y ingeniería" <Bill Gates>'
    // "Sabes cual es el problema?, imaginar el algoritmo y no programarlo",
]

function Notes(){
    
    const [notes, setNotes] = useState([...firstNote])

    function handleClick(){
        setNotes([...notes,""])
    }


    return (
        <Container id="note">
            <Row className="justify-content-center">
                   { notes.map((msg,index)=>{
                        return <Col xs="10" md="5" xl="3" className="mb-5 mb-xl-2" key={index}>
                                    <StickNote
                                        index={index}
                                        text={msg}
                                    />
                                </Col>
                        })
                    }
                <Col xs="3" className="mt-5 align-self-center text-center ">
                    <Button  variant="outline-light" className="border-0 rounded-0" onClick={handleClick}  >
                        <FileEarmarkPlus size={50}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    )

}

export default Notes;