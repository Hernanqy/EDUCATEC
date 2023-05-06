
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from './../assets/imagenes/e.png'
import "./Barra.css"
const Barra = () => {
    return (
        <div>
        <Navbar className='bg' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><a href="/"><img className='Logo' src={Logo} alt="" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="Menu" href="/">Inico</Nav.Link>
            <Nav.Link className="Menu"  href="SobreNos">Sobre Nosotros</Nav.Link>
            <Nav.Link className="Menu" href="cursos">Cursos</Nav.Link>
            <Nav.Link className="Menu" href="#link">Talleres</Nav.Link>
            <Nav.Link className="Menu" href="#link">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  


        </div>
    );
};

export default Barra;