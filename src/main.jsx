import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router,createBrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import ClientDetails from "./pages/Members";
import Billing from "./pages/Billing";
import Inventories from "./pages/Inventories";
import App from './App'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/members",
    element: <ClientDetails/>,
  },
  {
    path: "/billing",
    element: <Billing/>,
  },
  {
    path: "/inventories",
    element: <Inventories/>,
  },
]);
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);

