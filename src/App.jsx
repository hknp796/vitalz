import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import Toast from "./components/Toast";

// Pages
import Dashboard from "./pages/Dashboard";
import ClientDetails from "./pages/Members";
import Inventories from "./pages/Inventories";
import Billing from "./pages/Billing";
import AddMember from "./pages/AddNewMember";
import ViewMember from "./pages/viewMember";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Protected Route Component
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const routes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/members", element: <ClientDetails /> },
    { path: "/billing", element: <Billing /> },
    { path: "/inventories", element: <Inventories /> },
    { path: "/add-members", element: <AddMember /> },
    { path: "/add-members/:id", element: <AddMember /> },
    { path: "/members/view/:id", element: <ViewMember /> },
    { path: "/", element: <Home /> },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Toast />
      {!isLoginPage && <TopNavbar />}
      <div className="flex flex-1">
        {isLoggedIn && !isLoginPage && <SideNavbar />}
        <div className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />
            {routes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    {element}
                  </ProtectedRoute>
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
