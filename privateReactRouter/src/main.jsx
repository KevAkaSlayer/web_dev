import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./routes/privateRoute";
import Order from "./components/Order";
import Profile from "./components/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root  />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/order',
        element:<PrivateRoute > <Order/> </PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute > <Profile/> </PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
