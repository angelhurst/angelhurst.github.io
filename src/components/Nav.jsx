import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar  expand="lg" fixed="top" data-bs-theme="dark" className='p-4'>
      <Container className=''>
        <Navbar.Brand href="#home" className='brand' ><strong>Angel Hurst</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='' href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link className='' href="#abount"><strong>Sobre Mi</strong></Nav.Link>
            <Nav.Link className='' href="#note"><strong>Notas</strong></Nav.Link>
            <Nav.Link href="#porfolio"><strong>Porfolio</strong></Nav.Link>
            <Nav.Link href="#skills"><strong>Skills</strong></Nav.Link>
            <Nav.Link href="#contact"><strong>Contacto</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;