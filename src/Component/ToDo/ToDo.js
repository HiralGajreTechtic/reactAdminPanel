//crud
//input field, add button, table list
// return list in table
// edit and delete

import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap';

const ToDo=()=>
{
    const [toDo,setToDo]=useState([]);
    const [isEdit, setEdit] = useState(false);
    const [updateIndex, setUpdateIndex] = useState();
    const [title, setTitle] = useState();
   
    function insertToDo(toDoTitle) {
      if(isEdit){
        var updateRecord = toDo.map((obj) => {
          if (obj.id === updateIndex) {
            obj.title = toDoTitle;
          }
          return obj;
        });
        setToDo(updateRecord);
      }else{
        const id = Math.floor(Math.random() * 100);
        setToDo([
          ...toDo,
          {
            id:id,
            title:toDoTitle
          },
        ]);
      }
      setEdit(false);
    }
    const handleDelete = (index,e) => {
      setToDo(toDo.filter((v, i) => i !== index));
    }
    const handleEdit = (index,data) => {
      setUpdateIndex(data.id)
      setTitle(data.title)
      setEdit(!isEdit);
     
    }

    const handleChange = (e) => {
      e.preventDefault();
      setTitle(e.target.value);
    }

  return (
  <>
    <Container>
      <Row>
       <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={handleChange} placeholder="Enter to do" />
            
          </Form.Group>
          
          <Button variant="primary" onClick={() => {
            insertToDo(title);
          }}>
              Submit
          </Button >
        </Form>
      </Row>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>To Do title</th>
            </tr>
          </thead>
        <tbody>
        {toDo.map((data, index) => (
            <tr key={index}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>
            <button className="btn btn-success btn-xs" onClick={e => handleEdit(index,data)}>Edit</button>
            <button className="btn btn-danger btn-xs" onClick={e => handleDelete(index,e)}>Delete</button> </td>
          </tr>
          ))}
        </tbody>
        </Table>
      </Row>
    </Container>
  
   
  </>
  )
 
}
 
export default ToDo;