import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
           path:'/' ,
           element:<Home/>,
           loader:()=>fetch('news.json')
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/register',
          element:<Register/>
        }
      ]
        
      


    },
  ]);

  export default routes;