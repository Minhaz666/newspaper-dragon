import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {

    const {signinuser , logOut}=useContext(AuthContext)
    console.log(signinuser)

    
 const handlesignout=()=>
    {
        logOut()
        .then()
        .catch(error => console.log(error));
    }


    return (
        <Container className=''>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <div >
                                <Link className='me-4' to={'/categorie'}>Home</Link>
                                <Link className='me-4'>About</Link>
                                <Link className='me-4'>Career</Link>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                { signinuser && <FaUserCircle className='me-2' style={{ fontSize: '30px', }}></FaUserCircle>}
                            </Nav.Link>
                            { signinuser ? <Button onClick={handlesignout} variant="secondary">Logout</Button> :
                            <Link to={'/login'}><Button  variant="secondary">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>

    );
};

export default Navigation;