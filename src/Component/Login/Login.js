import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

function Login() {

  const [email,setEmail]=useState([]);
  const [password,setPassword]=useState([]);
  function saveLoginDetails() {
    
    localStorage.setItem('userDetails', JSON.stringify({email: email,password:password}));
  }
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  return (
    <div className="Login">
      <div className="row">
      <div className="page-header">
      <h4>Login </h4>
      </div>
      </div>
     
    <Form>
    <Form.Group>
    
    <Form.Label>Enter your email address:</Form.Label>
    <Form.Control type="email" 
              placeholder="Your your email address" onChange={handleEmailChange} />
    </Form.Group>
    <Form.Group>
    <Form.Label>Enter your password:</Form.Label>
    <Form.Control type="number" placeholder="Your password" onChange={handlePasswordChange}/>
    </Form.Group>
    <Button variant="primary" className="submitBtn" onClick={() => {
            saveLoginDetails();
          }}>
    Submit 
    </Button>
    </Form>
    </div>
 )

}
  
  export default Login;