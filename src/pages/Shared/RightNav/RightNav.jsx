import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGooglePlusG, FaInstagram, FaTwitter  } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg1 from '../../../assets/bg1.png'

const RightNav = () => {
    return (
       
        <div>

            <div>
                <h4>Login with</h4>
                <Button className='mb-2' variant="outline-primary"> <FaGooglePlusG/> Login With Google</Button>
                <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
            </div>

            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div className='mt-3 text-center bg-info p-2 '>
                <img src={bg1} alt="" />
            </div>

        </div>
        
    );
};

export default RightNav;