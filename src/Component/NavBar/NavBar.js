import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import Login from '../Login/Login';
import ProtectedRoute from '../RouteProtection/ProtectedRoute';
import Home from '../Home/Home';
import Counter from '../Counter/Counter';
import ToDo from '../ToDo/ToDo';
import ProfileForm from '../Profile/ProfileForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosDemo from '../AxoisDemo/AxiosDemo';

const NavBar = () => {
  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="row col-md-12 div12">
      <div className="col-md-3 div3">
        <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"

        >
          <div className="sidebar-sticky"></div>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/axiosDemo">
              <Nav.Link >Axios demo</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item>
            <LinkContainer to="/profile">
              <Nav.Link >Profile</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/login">
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </div>
      <div className='col-md-9'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterApp" element={<ProtectedRoute> <Counter /> </ProtectedRoute>} />
          <Route path="/toDoApp" element={<ProtectedRoute> <ToDo /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute>  <ProfileForm /> </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/axiosDemo" element={<AxiosDemo />} />
        </Routes>
      </div>
    </div>
  </>
}
export default NavBar;