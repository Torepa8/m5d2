import { Form,Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../react.png'

function FormInput({userSearch,setUserSearch}) {
  return (
      <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
              type="text"
              value={userSearch}        //per tenere in memoria il testo che scrive l'utente
              onChange={(event) => setUserSearch(event.target.value)}
          />
      </Form.Group>
  )
}

export default function MyNav({userSearch,setUserSearch}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="LOGO"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FormInput userSearch={userSearch} setUserSearch={setUserSearch}/>
      </Container>
    </Navbar>
  );
}