import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import editorsInsight1 from '../../assets/editorsInsight1.png'
import editorsInsight2 from '../../assets/editorsInsight2.png'
import editorsInsight3 from '../../assets/editorsInsight3.png'

const EditorsInsights = () => {
    return (
        <CardGroup className='mt-4'> 
        <Card>
          <Card.Img variant="top" src= {editorsInsight1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src={editorsInsight2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src={editorsInsight3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    );
  }
  

export default EditorsInsights;