import { Container, Row, Col } from "react-bootstrap";

import ItemProyect from "./ItemProyect";

const proyects =
    [
        {
            title: 'Aquarov Fuel Guard',
            text: 'Plataforma web de telemétrica para dispositivos IOT, para la medición del consumo de combustible en las granjas de Salmon.',
            shields : ['html','css','bootstrap','react','node','nextjs','python','mongo','aws'],
            images :[
                require("../img/aquarov/login.png"),
                require("../img/aquarov/dashboard.png"),
            ]
        },
        {
            title: 'Orange PRO',
            text: 'Progresive Web App de metricas de venta, catalogo de productos, indice de cubrimiento de ventas territorial.',
            shields : ['html','css','bootstrap','react','node','postgresql'],
            images :[
                require("../img/stihl/imagen1.png"),
                require("../img/stihl/imagen2.png")
            ]
        },
        {
            title: 'Napa AutoCare',
            text: 'Plataforma web de talleres de autoservicio Napa, control de clientes, formularios de inspecciones, historial de vehiculos, reporte de trabajo.',
            shields : ['html','css','bootstrap','react','node','django','postgresql','mongo'],
            images :[
                require("../img/servicenter/reduce/1.jpeg"),
                require("../img/servicenter/reduce/2.jpeg"),
                require("../img/servicenter/reduce/3.jpeg"),
                require("../img/servicenter/reduce/4.jpeg"),
                require("../img/servicenter/reduce/5.jpeg"),
                require("../img/servicenter/reduce/6.jpeg"),
                require("../img/servicenter/reduce/7.jpeg"),
            ]
        },
        {
            title: 'Cemcol Logistic',
            text: 'Plataforma web de monitoreo de transferencias entre almacenes y centros de distribucion, con metricas de tiempo y control de estado.',
            shields : ['html','css','bootstrap','react','node','mongo'],
            images :[
                require("../img/almacenes/home.jpeg"),
                require("../img/almacenes/dashboard.jpeg"),
            ]
        },
        {
            title: 'Cemcol SAC',
            text: 'Plataforma complementaria al ERP, con modulos de productos, clientes, inventarios.',
            shields : ['html','css','bootstrap','javascript','django','db2'],
            images :[
                require("../img/sac/reduce/login.jpeg"),
                require("../img/sac/reduce/consulta.png"),
                require("../img/sac/reduce/detalle.png"),
                require("../img/sac/reduce/aplicativos.png"),
                require("../img/sac/reduce/maestros.png"),
                require("../img/sac/reduce/aplicativo.png"),
                require("../img/sac/reduce/categorias.png"),
            ]
        },
    ]


function Porfolio(){

    return(
       <Container id="porfolio" className="text-white">
            <div className="bg-blue rounded">
                <Row className="justify-content-center pt-4">
                    <Col xs="10" className="text-center">
                        <p className="h2"><strong>Porfolio</strong></p>
                    </Col>
                </Row>
                <Row className="pt-5 justify-content-evenly">
                    <Col xs="10"  className=""  >
                        {proyects.map((proyect,index)=>{
                            return <ItemProyect
                                        key={index}
                                        datos={{...proyect , index : index}}
                                    />
                        })}
                            
                    </Col>
                </Row>
            </div>
       </Container>
    );
}

export default Porfolio;