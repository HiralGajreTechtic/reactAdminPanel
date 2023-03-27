import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './ProfileForm.css'
function ProfileForm() {
  return (
    <div className="ProfileForm">
      <div className="row">
      <div className="page-header">
      <h4>Profile Details </h4>
      </div>
      </div>
     
    <Form>
    <Form.Group>
    <Form.Label>Enter your full name:</Form.Label>
    <Form.Control type="text" 
              placeholder="Your full name" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Enter your email address:</Form.Label>
    <Form.Control type="email" 
              placeholder="Your your email address" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Enter your age:</Form.Label>
    <Form.Control type="number" placeholder="Your age" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Enter your Address:</Form.Label>
    <Form.Control type="number" placeholder="Your address" />
    </Form.Group>
   
    <Form.Group>
    <Form.Label>Select gender:</Form.Label>
    <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Select"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Male</Dropdown.Item>
          <Dropdown.Item href="#">Female</Dropdown.Item>
          <Dropdown.Item href="#">Others</Dropdown.Item>
          <Dropdown.Divider />
         
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
    </Form.Group>
   
    <Button variant="primary" className="submitBtn"  type="submit">
    Submit 
    </Button>
    </Form>
    </div>
 )

}
  
  export default ProfileForm;