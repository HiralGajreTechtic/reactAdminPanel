import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
class Counter extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment=()=> {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement=()=> {
    if (this.state.count === 0) {
      this.setState({
        count: 0
      });
    } else {
      this.setState(prevState => ({
        count: this.state.count - 1
      }));
    }
  }
  render(){ 
   return  <div>
    <Container>
      <Row>
        <div className="page-header">
          <h4>Counter App</h4>
          <p>Counter value: {this.state.count}</p>
          <p>Props value: {this.props.name}</p>
        </div>
            <Col>
              <Button variant="primary" className="submitBtn"  onClick={this.increment}  type="submit">Increment </Button>
            </Col>
            <Col>
              <Button variant="primary" className="submitBtn"  onClick={this.decrement} type="submit">Decrement </Button>
            </Col>
            <Col>
              <Button variant="primary" className="submitBtn"  onClick={() => this.setState({ count: 0})}  type="submit">Reset </Button>
            </Col>
        </Row>
    </Container>
    
    </div>
  };
};

export default Counter;