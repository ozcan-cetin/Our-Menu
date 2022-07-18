import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-light navbarContainer">
      <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home" >Navbar</Navbar.Brand> */}
          <Nav className="mx-auto">
            <NavLink to="/home" style={{ margin: "1rem" }}>
              Home
            </NavLink>
            <NavLink to="/register" style={{ margin: "1rem" }}>
              Register
            </NavLink>
            <NavLink to="/login" style={{ margin: "1rem" }}>
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
