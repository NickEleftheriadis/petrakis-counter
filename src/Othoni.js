
import React, { Component } from 'react';
import "./App.css";
import {Container,Row,Col} from 'react-bootstrap';
import sitega from './sitega.png';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "./Home";
import face from './face.png';

class othoni extends Component {
    state = {count:0 }
    Increasment = () =>{
        this.setState({count:this.state.count +1});
      }
      Decreasment = () =>{
        this.setState({count:this.state.count -1})
      }
    render() { 
        return (
            <div>
                <Container>
        <Row className="App">
          <Col ><h1 className="onoma-style">Petrakis' Counter</h1></Col>
        </Row>
        <Row className="App">
          <Col><button  className="button-plus-style" onClick={this.Increasment} >+</button></Col>
          <Col><span>{this.state.count}</span> </Col>
          <Col><button className="button-minus-style" onClick={this.Decreasment} >-</button></Col>
        </Row>
        <Row>
          <Col className="white">papari</Col>
        </Row>
        <Row >
          <Col className="App">< img src={face} alt="image" height={200} width={200}/></Col>
        </Row>
        <Row>
            <Col>
          <div >
          <Link to="/" className="button4" >Να μαλάκα, ευχαριστημένος;</Link>
          </div>
          </Col>
        </Row>
      </Container>
            </div>
          );
    }
}
 
export default othoni;

    