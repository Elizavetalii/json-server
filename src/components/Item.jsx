import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Price {props.price}
        </Card.Text>
        <Card.Text>
          Count {props.count}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default Item