import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import ClientDetails from "./pages/Members";
import Inventories from "./pages/Inventories";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import AddMember from "./pages/AddNewMember";
import ViewMember from "./pages/viewMember";
import TopNavbar from "./components/TopNavbar";

import Login from "./pages/Login";
import Toast from "./components/Toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className="flex flex-col h-screen">
      <Toast />
      {!isLoginPage && <TopNavbar />}
      <div className="flex flex-1">
        {isLoggedIn && !isLoginPage && <SideNavbar />}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/members"
              element={
                isLoggedIn ? <ClientDetails /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/billing"
              element={isLoggedIn ? <Billing /> : <Navigate to="/login" />}
            />
            <Route
              path="/inventories"
              element={isLoggedIn ? <Inventories /> : <Navigate to="/login" />}
            />
            <Route
              path="/add-members"
              element={isLoggedIn ? <AddMember /> : <Navigate to="/login" />}
            />
            <Route
              path="/add-members/:id"
              element={isLoggedIn ? <AddMember /> : <Navigate to="/login" />}
            />
            <Route
              path="/members/view/:id"
              element={isLoggedIn ? <ViewMember /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
