import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
    const auth = getAuth(app)
    

    const {signIn}=useContext(AuthContext);

    //state declare
    const [error,setError]=useState(null)
    const [success,setSuccess]=useState('')
    
    // handle for sign in 
    const handleSignIn=(event)=>
    {
        setError(null);
        setSuccess('');
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
        // console.log(name,photo,email,password)
        signIn(email,password)
        .then((result)=>{
            // console.log(result.user)
            // observer for getg user 
            const userup=result.user;

            setSuccess('successfully login')
        })
        .catch((error)=>{
            const errorMessage =error.message
            setError(errorMessage)
        })
        
        event.target.reset()

    }

    return (
        <div className='container mx-auto w-50'>
            <h1>Login Your Account</h1>

            <Form onSubmit={handleSignIn}>
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
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button> <br />
                <Form.Text className="text-success">
                    don't have an account..??<Link to='/register' >register</Link>
                </Form.Text> <br />
                <Form.Text className="text-success">
                {success}
                </Form.Text> <br />
                <Form.Text className="text-danger">
                {error}
                </Form.Text>
            </Form>

        </div>
    );
};

export default Login;