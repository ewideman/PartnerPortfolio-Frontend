import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {handleGoogleLogout} from '../firebase'
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
          <Nav>
            <Link style={{marginRight: "10px"}} to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </Nav>
          <Nav>
            <Navbar.Text style={{marginRight: "10px", cursor:'pointer'}}
              onClick={()=>{
                handleGoogleLogout();
                navigate("/login")
              }}
            >Logout</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;