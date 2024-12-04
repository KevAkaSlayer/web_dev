import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import User from "./components/User";
import Update from "./components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <User></User>,
    loader:() => fetch("http://localhost:5000/users")
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
