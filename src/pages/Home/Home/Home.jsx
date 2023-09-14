import React from 'react';
import useTitle from '../../../customHook/useTitle';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <h4>This is home</h4>
        </div>
    );
};

export default Home;