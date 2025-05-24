import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Order from '../Pages/Order';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,  
    children: [
      {
        index: true,      // renders at '/'
        element: <Home />
      },
      {
        // Menu with optional category param
        path: 'menu/:category?', 
        element: <Menu />
      },
      {
        // Order route expecting a category param
        path: 'order/:category', 
        element: <Order />
      }
    ]
  }
]);
