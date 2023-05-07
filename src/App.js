import logo from './logo.svg';
import './App.css';
import Home from '../src/Component/Home/Home';
import Counter from '../src/Component/Counter/Counter';
import ToDo from '../src/Component/ToDo/ToDo';
import ProfileForm from '../src/Component/Profile/ProfileForm';
import NavBar from './Component/NavBar/NavBar'
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from './Component/Login/Login';
import ProtectedRoute from './Component/RouteProtection/ProtectedRoute';

function App() {
  return (
    <div className="App">
     <Col>
          <NavBar/> 
          
          </Col>
          
    </div>
  );
}

export default App;
