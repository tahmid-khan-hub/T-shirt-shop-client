import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            home
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;