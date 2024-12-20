import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import DetailedUser from './components/DetailedUser/DetailedUser.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/about',
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/users",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users  />
      },
      {
        path:"/users/:id",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <DetailedUser />
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
