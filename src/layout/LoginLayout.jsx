import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/NavigationBar/Navigation';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;