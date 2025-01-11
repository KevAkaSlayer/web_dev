import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import Update from "./components/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/add",
    element:<AddCoffee></AddCoffee>,
  },
  {
    path: "/update",
    element:<Update></Update>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
