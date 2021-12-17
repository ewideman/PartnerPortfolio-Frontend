import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleLogout } from '../firebase'
import logo from '../img/homepage.png';

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/addProperty">
              Add Property
            </Link>
          </Nav>
          <img src={logo} style={{ width: '100px', display: 'block', margin: '0 27% 0 15%' }} />

          <Nav>
            <Link style={{ marginRight: "10px" }} to="/signup">Sign Up</Link>
            <Link style={{ marginRight: "10px" }} to="/login">Log In</Link>
          </Nav>
          <Nav>
            <Link style={{ marginRight: "10px", cursor: 'pointer' }} to="/"
              onClick={(event) => {
                event.preventDefault();
                handleGoogleLogout();
                navigate("/login")
              }}
            >Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;