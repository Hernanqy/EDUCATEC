import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from './../assets/imagenes/e.png'
import "./Barra.css"

function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><a href="/"><img className='Logo' src={Logo} alt="" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="sobrenos">Cursos</Nav.Link>
            <Nav.Link href="sobrenos">Sobre Nosotros</Nav.Link>
            <Nav.Link href="sobrenos">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;