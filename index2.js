import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

import Show6 from'./contact6';
import Show1 from'./contact1';
import Show2 from'./contact2';
import Show3 from'./contact3';
import Show4 from'./contact4';
import './demo2.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
let p1=1;
let p2=2;
let p3=3;
let p4=4;
let p5=5;
let p6=6;
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
          
          <Button onClick={()=>pass(p1)}>Go somewhere</Button>
        
        
        </Card>
      </Col>
      </Row>
      </div>
      <div className="cards2">
      <Row>
   
      <Col sm="10">
        <Card body body inverse color="danger">
          <CardTitle><h1>HORROR</h1></CardTitle>
          
          <Button onClick={()=>pass(p2)}>Go somewhere</Button>
          
        </Card>
      </Col>

    </Row>
    </div>
   


<div className="cards2">
    <Row>
      <Col sm="10">
        <Card body body inverse color="success">
          <CardTitle><h1>DRAMA</h1></CardTitle>
         
          <Button onClick={()=>pass(p3)}>Go somewhere</Button>
        </Card>
      </Col>
      </Row>
      </div>

      <div className="cards2">
      <Row>
      <Col sm="10">
        <Card body inverse color="warning">
          <CardTitle><h1>COMEDY</h1></CardTitle>
          
          <Button onClick={()=>pass(p4)}>Go somewhere</Button>
          
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
          
          <Button onClick={()=>pass(p6)}>Go somewhere</Button>
          
        </Card>
      </Col>
    </Row>
</div>

</div>




		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
function pass(p)
{
	console.log(p);
	if(p===1)
	{
		
		ReactDOM.render(<Show1 />, document.getElementById('root2'));
	}
	if(p===6)
	{
		
		ReactDOM.render(<Show6 />, document.getElementById('root2'));
	}
	if(p===2)
	{
		
		ReactDOM.render(<Show2 />, document.getElementById('root2'));
	}
	if(p===3)
	{
		
		ReactDOM.render(<Show3 />, document.getElementById('root2'));
	}

    if(p===4)
	{
		
		ReactDOM.render(<Show4 />, document.getElementById('root2'));
	}
}