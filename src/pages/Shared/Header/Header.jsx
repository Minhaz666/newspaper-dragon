// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container>

            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">journalism without fear and favour</p>
                <p>{moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
            </div>

            <div className='d-flex'>
                <Button variant='danger'>Latest</Button> 
                <Marquee className='text-danger' speed={50}>
                 I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>


        </Container>
    );
};

export default Header;