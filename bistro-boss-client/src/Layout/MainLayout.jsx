import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;