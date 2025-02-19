import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';


const Layout = () => {
    return (
        <div className='max-w-4xl mx-auto'>
           <Header />
            <Outlet />
        </div>
    );
};

export default Layout;