import ProfileForm from './ProfileForm'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    <div className="home">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Demo app</Navbar.Brand>
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
              activeKey="/home"
              onSelect={selectedKey => alert(`selected ${selectedKey}`)}
              >
                  <div className="sidebar-sticky"></div>
              <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
              </Nav.Item>
              
              </Nav>
      </div>
    <div className="col-md-9" >
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
      <ProfileForm/>
      </div>
      </div>
    </div>
   
    </div>
    </div>
     
     
    </div>
  );
}

export default Home;
