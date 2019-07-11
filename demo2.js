import React,{Component} from"react";
import './demo2.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


	



class App extends Component
{
	render(){
	return(
	

<div className="cards">
<div className="cards2">
 <Row>
 
      <Col sm="10">
        <Card body inverse color="info">
          <CardTitle><h1>SCI FI</h1></CardTitle>
          
          <Button onClick={pass}>Go somewhere</Button>
        
        
        </Card>
      </Col>
      </Row>
      </div>
      <div className="cards2">
      <Row>
   
      <Col sm="10">
        <Card body body inverse color="danger">
          <CardTitle><h1>HORROR</h1></CardTitle>
          
          <Button>Go somewhere</Button>
          
        </Card>
      </Col>

    </Row>
    </div>
   


<div className="cards2">
    <Row>
      <Col sm="10">
        <Card body body inverse color="success">
          <CardTitle><h1>DRAMA</h1></CardTitle>
         
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      </Row>
      </div>

      <div className="cards2">
      <Row>
      <Col sm="10">
        <Card body inverse color="warning">
          <CardTitle><h1>COMEDY</h1></CardTitle>
          
          <Button>Go somewhere</Button>
          
        </Card>
      </Col>
    </Row>
    </div>
   

<div className="cards2">
    <Row>
      <Col sm="10">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
          <CardTitle><h1>ADVENTURE</h1></CardTitle>
          
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      </Row>
      </div>

      <div className="cards2">
      <Row>
      <Col sm="10">
        <Card body body inverse color="primary">
          <CardTitle><h1>FANTASY</h1></CardTitle>
          
          <Button>Go somewhere</Button>
          
        </Card>
      </Col>
    </Row>
</div>

</div>




		);
	}
}

export default App;