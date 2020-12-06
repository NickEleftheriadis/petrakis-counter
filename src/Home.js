import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import sitega from './sitega.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Othoni from "./Othoni";


class Home extends Component {
  state = { count:0}
  Increasment = () =>{
    this.setState({count:this.state.count +1});
  }
  Decreasment = () =>{
    this.setState({count:this.state.count -1})
  }
  
  render() { 
    
    
    return (  
      <div  >
      <Container>
        <Row className="App">
          <Col ><h1 className="onoma-style">Petrakis' Counter</h1></Col>
        </Row>
        <Row className="App">
          <Col><button  className="button-plus-style" onClick={this.Increasment} >+</button></Col>
          <Col><span>{this.state.count}</span></Col>
          <Col><button className="button-minus-style" onClick={this.Decreasment} >-</button></Col>
        </Row>
        <Row>
          <Col className="white">papari</Col>
        </Row>
        <Row >
          <Col className="image">< img src={sitega} alt="image" height={200} width={200}/></Col>
        </Row>
        <Row>
          <Col>
          <div>
        <Link to="/othoni" className="button3">press me but bee ready for the consiquences</Link>
        </div>
          </Col>
        </Row>
      </Container>
      <div>
       
      </div>
    </div>
     );
  }
}
 
export default Home;
