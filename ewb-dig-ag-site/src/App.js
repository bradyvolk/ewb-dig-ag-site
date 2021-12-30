import "./App.css";
import Counter from "./components/Counter";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EWB Digital Agirculture</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#documentation">Documentation</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Bootstrap Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              This is the body of accordian item #1.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bootstrap Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bootstrap Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              <Counter />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default App;
