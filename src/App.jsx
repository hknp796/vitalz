
import { Routes, Route } from 'react-router-dom';
import SideNavbar from "./components/SideNavbar";
import ClientDetails from "./pages/Members";
import Inventories from "./pages/Inventories";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <SideNavbar />
      <Routes className=''>
        <Route path="/" element={<Dashboard />} />
        <Route path="/members" element={<ClientDetails />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/inventories" element={<Inventories />} />
      </Routes>
    </div>
  );
}

export default App;
