import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout  />,
      errorElement: <div>Not Found</div>,
      children: [
        {   path: "/", 
            element: <Home />,
        },
        {
            path: "/register",
            element:<Register />,
        },  
        {
            path: "/login",
            element:<Login />,
        }  
      ],
    },
  ]);

export default router;