import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';

const News = () => {

    const news=useLoaderData();
    const {_id,title,details,image_url,category_id}=news;

    return (
      <div>
          <Card>
            <CardImg variant='top' src={image_url}></CardImg>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/categorie/${category_id}`}><Button>News in the category</Button></Link>
            </Card.Body>
        </Card>

        <EditorsInsights></EditorsInsights>
      </div>
    );
};

export default News;