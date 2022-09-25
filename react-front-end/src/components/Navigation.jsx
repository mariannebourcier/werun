import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { authContext } from "../providers/AuthProvider";

export default function Navigation() {
  const { auth, logout, user, setPage } = useContext(authContext);

  const handleSignOut = () => {
    logout();
    setPage("Home");
  };
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" onClick={()=>setPage("Home")}>WeRun</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" onClick={()=>setPage("Home")}>Home</Nav.Link>
            <Nav.Link href="#" onClick={()=>setPage("FindRun")}>Join A Run</Nav.Link>
            {!auth && <Nav.Link href="#" onClick={()=>setPage("SignIn")}>Sign In</Nav.Link>}
            {!auth && <Nav.Link href="#" onClick={()=>setPage("Register")}>Sign Up</Nav.Link>}
            {auth && (
              <Nav.Link href="#" onClick={handleSignOut}>
                Sign Out
              </Nav.Link>
            )}
            {auth && <Nav.Link href="#" onClick={()=>setPage("Profile")}>Profile</Nav.Link>}
            {auth && user && (
              <Nav.Link href="#" disabled>
                Signed in as {user.email}
              </Nav.Link>
            )}
            <NavDropdown title="More Options" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
