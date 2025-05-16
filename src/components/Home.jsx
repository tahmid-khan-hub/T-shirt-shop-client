import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='w-11/12 md:max-w-[1300px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;