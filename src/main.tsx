import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ClientDetails from "./pages/ClientDetails";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
    errorElement:<ErrorPage />
  },
  {
    path: "/exercises",
    element: <div>this is excercise page</div>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/:id",
    element: <ClientDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
