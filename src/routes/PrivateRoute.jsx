import React, { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    console.log(location)

    const {signinuser}=useContext;
    if(signinuser)
    {
        return children;
    }
    return (
        <Navigate state={{from:location}} to={'/login'} replace></Navigate>
    );
};

export default PrivateRoute;