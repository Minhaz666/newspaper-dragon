import moment from 'moment';
import React from 'react';
import { Button, Card, CardImg, Image } from 'react-bootstrap';
import { FaBookmark,FaCloudsmith, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url,author,rating,total_view } = news;
    
    return (
        <Card className="text-center">
            <Card.Header className='d-flex align-items-center justify-content-center'>
               <div className='d-flex flex-grow-1'>
                    <Image  style={{height:'40px'}} roundedCircle src={author?.img} />
                    <div className='ps-2 '>
                        <p className='mb-0'>{author?.name}</p>
                        <p >{moment(author?.published_date).format("MMM Do YY")}</p>
                    </div>
               </div>
                <div className='d-flex'>
                    <FaBookmark></FaBookmark>
                    <FaCloudsmith></FaCloudsmith>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <CardImg variant="top" src={image_url} />
                <Card.Text>
                    {details.length<250 ? <>{details}</>:<>{details.slice(0,250)}...<Link to={`/news/${_id}`}>load more</Link></>}
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <span>{rating?.number}</span>
                </div>

                <div>
                <FaEye></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;

