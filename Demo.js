import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Example (props)  {
  return (
    <Row>
      <Col sm="5">
        <Card body>
          <CardTitle>{props.title1}</CardTitle>
          <CardText>{props.text1}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="5">
        <Card body>
          <CardTitle>{props.title2}</CardTitle>
          <CardText>{props.text2}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  )
}

export default Example;
