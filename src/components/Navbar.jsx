import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cart =useSelector((state)=>state.cart)
  return (
    <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: "#2f4766" /* '#cecbdb' */ }}
      >
      <Container>
        <Link className="navbar-brand" to="/">
          CartApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Products
            </Link>
            <Link className=" btn btn-warning" to="/cart">
              Cart - {cart.length}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
