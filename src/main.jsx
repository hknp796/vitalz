import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router,createBrowserRouter} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ClientDetails from "./pages/ClientDetails";
import Billing from "./pages/Billing";
import App from './App'
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
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
    path: "/home",
    element: <ClientDetails/>,
  },
  {
    path: "/billing",
    element: <Billing/>,
  },
]);
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);

