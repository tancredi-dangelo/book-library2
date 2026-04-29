import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const MainNavbar = function () {
  return (
    <Navbar bg="black" data-bs-theme="dark" className="m-0" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">EpiLibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="black"
                className="text-light"
                id="dropdown-basic"
              >
                Browse Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#fantasy-section">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#horror-section">Horror</Dropdown.Item>
                <Dropdown.Item href="#scifi-section">Sci-Fi</Dropdown.Item>
                <Dropdown.Item href="#romance-section">Romance</Dropdown.Item>
                <Dropdown.Item href="#history-section">History</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
