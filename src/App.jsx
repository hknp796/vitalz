
import {Routes,Route} from 'react-router-dom';
import SideNavbar from "./components/SideNavbar";
import ClientDetails from "./pages/Members";
import Inventories from "./pages/Inventories";

function App() {
  return (
    <div className="flex ">
      <SideNavbar />
      <Routes className=''>
        <Route path="/dashboard" element={<ClientDetails />} />
        <Route path="/members" element={<ClientDetails />} />
        <Route path="/billing" element={<ClientDetails />} />
        <Route path="/inventories" element={<Inventories />} />
      </Routes>
    </div>
  );
}

export default App;
