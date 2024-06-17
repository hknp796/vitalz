import { Routes, Route, useLocation } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import ClientDetails from "./pages/Members";
import Inventories from "./pages/Inventories";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import AddMember from "./pages/AddNewMember";
import Login from "./pages/Login";
import Toast from "./components/Toast";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className="flex">
      <Toast />
      {!isLoginPage && <SideNavbar />}
      <Routes className="">
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={<ClientDetails />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/inventories" element={<Inventories />} />
        <Route path="/add-members" element={<AddMember />} />
      </Routes>
    </div>
  );
}

export default App;
