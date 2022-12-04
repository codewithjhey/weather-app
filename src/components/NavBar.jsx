import { Navbar, Nav } from "react-bootstrap"

const NavBar = ({ subtitle }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"> Weather Today - {subtitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#weatherinfo">Weather & climate</Nav.Link>
        <Nav.Link href="#favorites">Favorites Cites</Nav.Link>
        <Nav.Link href="#findus">About us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
