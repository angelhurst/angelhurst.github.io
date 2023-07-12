import { Row, Col } from "react-bootstrap";
import { Carousel, Image } from "react-bootstrap";
import shieldsImages from "../utils/shield";

function ItemProyect(props){

    const { title, text, shields,  images, index} = props.datos;

    return(
        <Row className="mb-5">
            <Col xl="8" className={`${index % 2 === 0  ? 'order-1' : 'order-1 order-md-2 '}`} >
                <Carousel className="text-center"  >
                    {images.map((item,index)=>{
                        return <Carousel.Item key={index}>
                                    <Image
                                    fluid 
                                    src={item}
                                    />
                                </Carousel.Item>
                    })}
                </Carousel>
            </Col>
            <Col xl="4" className={`mt-3 mt-md-0 rounded ${index % 2 === 0  ? 'order-2' : 'order-2 order-md-1 '}`}>
                <div className="bg-dangers mx-3 mt-2">
                    <h3 className="porfolio-titles"><strong>{title}</strong></h3>
                    <div className="porfolio-msg ">
                        {text}
                    </div>
                    <div className="mt-3" >
                        {shields.map((shield,index)=>{
                            return <img className="ms-2" key={index} src={shieldsImages[shield]} alt="" />
                        })}
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default ItemProyect;