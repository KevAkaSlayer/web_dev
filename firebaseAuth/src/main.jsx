import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/layouts/Main";
import Home from "./components/Home/Home";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  
    children:[
      {
        path: "/main",
        element: <Main/>,
      },
      {
        path: "/login",
        element: <Login/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
