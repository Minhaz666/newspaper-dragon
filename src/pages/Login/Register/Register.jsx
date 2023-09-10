import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const {creatUser}=useContext(AuthContext);

    const handleRegister=(event)=>
    {
        event.preventDefault()
        const name=event.target.name.value;
        const photo=event.target.photo.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // console.log(name,photo,email,password)
        creatUser(email,password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }

    return (
      <div className='container mx-auto w-50'>
        <h1>Please register</h1>
        <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Photo URL" name='photo' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept tearms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button> <br />
                <Form.Text className="text-success">
                    Already have an account..??<Link to='/login' >Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
      </div>
    );
};

export default Register;

 