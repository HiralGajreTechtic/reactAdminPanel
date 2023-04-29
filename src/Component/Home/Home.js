import ProfileForm from '../Profile/ProfileForm';
import Nav from 'react-bootstrap/Nav';
import NavBar from '../NavBar/NavBar'
import Counter from '../Counter/Counter';
import ToDo from '../ToDo/ToDo'


function Home() {
  return (
    <div className="home">
      <NavBar/>
     
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
                <Nav.Link eventKey="link-1">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Counter</Nav.Link>
            </Nav.Item>
          </Nav>
      </div>
    <div className="col-md-9" >
    <div className='container'>
    <div className="row">
      <div className="col-md-12">
        <ToDo/>
      {/* <Counter name="Hiral Gajre"/> */}

      </div>
      </div>
    </div>
   
    </div>
    </div>
     
     
    </div>
  );
}

export default Home;
