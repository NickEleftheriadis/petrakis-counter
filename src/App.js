import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';


class App extends Component {
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
          <Col ><h1 className="onoma-style">Petrakis Counter</h1></Col>
        </Row>
        <Row className="App">
          <Col ><button className="button-plus-style" onClick={this.Increasment} >+</button></Col>
          <Col><span  >{this.state.count}</span></Col>
          <Col><button className="button-minus-style" onClick={this.Decreasment} >-</button></Col>
        </Row>
      </Container>
    </div>
     );
  }
}
 
export default App;
