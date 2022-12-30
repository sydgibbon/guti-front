import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ? importando componentes y paginas 
import Login from "./component/Login";
import Main from "./component/dashboard/Main";
import AssetsDashboard from "./component/dashboard/AssetsDashboard";
import axiosPrivate from "./api/axios";
import Cables from "./pages/Cables";
import Computers from "./pages/Computers";
import Monitors from "./pages/Monitors";
import Software from "./pages/Software";
import NetworkDevices from "./pages/NetworkDevices";
import PassiveDevices from "./pages/PassiveDevices";
import Simcards from "./pages/Simcards";
import Consumables from "./pages/Consumables";
import Enclosures from "./pages/Enclosures";
import Global from "./pages/Global";
import Phones from "./pages/Phones";
import Racks from "./pages/Racks";
import ComputerForm from "./component/forms/assets/ComputerForm";
import EnclosuresForm from "./component/forms/assets/EnclosuresForm";
import CableForm from "./component/forms/assets/CableForm";
import MonitorForm from "./component/forms/assets/MonitorForm";
import SoftwareForm from "./component/forms/assets/SoftwareForm";
import NetworkDeviceForm from "./component/forms/assets/NetworkDeviceForm";
import DeviceForm from "./component/forms/assets/DeviceForm";
import PduForm from "./component/forms/assets/PduForm";
import PrinterForm from "./component/forms/assets/PrinterForm";
import CartridgeForm from "./component/forms/assets/CartridgeForm";
import ConsumableForm from "./component/forms/assets/ConsumableForm";
import PassiveDeviceForm from "./component/forms/assets/PassiveDeviceForm";
import PhoneForm from "./component/forms/assets/PhoneForm";
import SimcardForm from "./component/forms/assets/SimcardForm";
import RackForm from "./component/forms/assets/RackForm";
import NotFound from "./pages/NotFound";
import Devices from "./pages/Devices";
import Printers from "./pages/Printers";
import Cartridges from "./pages/Cartridges";
import PDUs from "./pages/PDUs";
import UnmanagedDevices from "./pages/UnmanagedDevices";
import ComputerFormTemplate from "./component/forms/assets/ComputerFormTemplate"
import AssetTemplate from "./component/dashboard/assets/AssetTemplate";

import { useServiceUser } from './hooks/useServiceUser'


// componente para proteger las rutas 
const ProtectedRoute = ({children}) => {
  const { user } = useServiceUser()
  
  if(!user) return <Login/>
  return children

}

function App() {
  axiosPrivate
    .get("http://127.0.0.1:8000/api/assets/computers/")
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
    });

  return (
    <Router>

      <Routes>
        <Route path="/" element={ <ProtectedRoute> <Main /> </ProtectedRoute> } />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/assets" element={<Main content={ <AssetsDashboard />} />} />
        <Route path="/assets/dashboard" element={<Main content={ <AssetsDashboard />} />} />
        <Route path="/assets/computers" element={<Main content={ <Computers />} />} />
        <Route path="/assets/monitors" element={<Main content={ <Monitors />} />} />
        <Route path="/assets/software" element={<Main content={ <Software />} />} />
        <Route path="/assets/network-devices" element={<Main content={ <NetworkDevices />} />} />
        <Route path="/assets/devices" element={<Main content={ <Devices />} />} />
        <Route path="/assets/printers" element={<Main content={ <Printers />} />} />
        <Route path="/assets/cartridges" element={<Main content={ <Cartridges />} />} />        
        <Route path="/assets/consumables" element={<Main content={ <Consumables />} />} />
        <Route path="/assets/phones" element={<Main content={ <Phones />} />} />
        <Route path="/assets/racks" element={<Main content={ <Racks />} />} />
        <Route path="/assets/enclosures" element={<Main content={ <Enclosures />} />} />
        <Route path="/assets/pdus" element={<Main content={ <PDUs />} />} />
        <Route path="/assets/passive-devices" element={<Main content={ <PassiveDevices />} />} />
        <Route path="/assets/unmanaged-devices" element={<Main content={ <UnmanagedDevices />} />} />
        <Route path="/assets/cables" element={<Main content={ <Cables />} />} />
        <Route path="/assets/simcards" element={<Main content={ <Simcards />} />} />
        <Route path="/assets/global" element={<Main content={ <Global />} />} />
        
        <Route path="/template" element={<Main content={ <ComputerFormTemplate />} />} />
        
        <Route path="/assets/forms/computers" element={<Main content={ <ComputerForm />} />} />
        <Route path="/assets/forms/enclosures" element={<Main content={ <EnclosuresForm />} />} />
        <Route path="/assets/forms/cables" element={<Main content={ <CableForm />} />} />
        <Route path="/assets/forms/monitors" element={<Main content={ <MonitorForm />} />} />
        <Route path="/assets/forms/software" element={<Main content={ <SoftwareForm />} />} />
        <Route path="/assets/forms/network-devices" element={<Main content={ <NetworkDeviceForm />} />} />
        <Route path="/assets/forms/devices" element={<Main content={ <DeviceForm />} />} />
        <Route path="/assets/forms/pdus" element={<Main content={ <PduForm />} />} />
        <Route path="/assets/forms/cartridges" element={<Main content={ <CartridgeForm />} />} />
        <Route path="/assets/forms/consumables" element={<Main content={ <ConsumableForm />} />} />
        <Route path="/assets/forms/passive-devices" element={<Main content={ <PassiveDeviceForm />} />} />
        <Route path="/assets/forms/phones" element={<Main content={ <PhoneForm />} />} />
        <Route path="/assets/forms/printers" element={<Main content={ <PrinterForm />} />} />
        <Route path="/assets/forms/simcards" element={<Main content={ <SimcardForm />} />} />
        <Route path="/assets/forms/racks" element={<Main content={ <RackForm />} />} />
        <Route path="*" element={<Main content={ <NotFound />} />} />
        
        <Route path="/asset" element={<Main content={ <AssetTemplate />} />} />
      </Routes>
    </Router>

  );
}

export default App;
