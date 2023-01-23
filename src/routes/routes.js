import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

// ? importamos las paginas 
import App from '../App';
import Login from "../component/Login";
import Main from "../component/dashboard/Main";
import AssetsDashboard from "../component/dashboard/AssetsDashboard";
import Cables from "../pages/Cables";
import Computers from "../pages/Computers";
import Monitors from "../pages/Monitors";
import Software from "../pages/Software";
import NetworkDevices from "../pages/NetworkDevices";
import PassiveDevices from "../pages/PassiveDevices";
import Simcards from "../pages/Simcards";
import Consumables from "../pages/Consumables";
import Enclosures from "../pages/Enclosures";
import Global from "../pages/Global";
import Phones from "../pages/Phones";
import Racks from "../pages/Racks";
import ComputerForm from "../component/forms/assets/ComputerForm";
import EnclosuresForm from "../component/forms/assets/EnclosuresForm";
import CableForm from "../component/forms/assets/CableForm";
import MonitorForm from "../component/forms/assets/MonitorForm";
import SoftwareForm from "../component/forms/assets/SoftwareForm";
import NetworkDeviceForm from "../component/forms/assets/NetworkDeviceForm";
import DeviceForm from "../component/forms/assets/DeviceForm";
import PduForm from "../component/forms/assets/PduForm";
import PrinterForm from "../component/forms/assets/PrinterForm";
import CartridgeForm from "../component/forms/assets/CartridgeForm";
import ConsumableForm from "../component/forms/assets/ConsumableForm";
import PassiveDeviceForm from "../component/forms/assets/PassiveDeviceForm";
import PhoneForm from "../component/forms/assets/PhoneForm";
import SimcardForm from "../component/forms/assets/SimcardForm";
import RackForm from "../component/forms/assets/RackForm";
import NotFound from "../pages/NotFound";
import Devices from "../pages/Devices";
import Printers from "../pages/Printers";
import Cartridges from "../pages/Cartridges";
import PDUs from "../pages/PDUs";
import UnmanagedDevices from "../pages/UnmanagedDevices";
import ComputerFormTemplate from "../component/forms/assets/ComputerFormTemplate"
import AssetTemplate from "../component/dashboard/assets/AssetTemplate";

// ? servicio
import { useServiceUser } from '../hooks/useServiceUser';

// componente para proteger las rutas 
const ProtectedRoute = ({children}) => {
  const { user } = useServiceUser()
  
  if(user !== null) return <Login/>
  return children

}

const RoutesComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <App /> }>
            <Route exact path="/" element={ <ProtectedRoute> <Main /> </ProtectedRoute> } />
            <Route path="/assets" element={<ProtectedRoute> <Main content={ <AssetsDashboard />} /> </ProtectedRoute>} />
            <Route path="/assets/dashboard" element={<ProtectedRoute> <Main content={ <AssetsDashboard />} /> </ProtectedRoute>} />
            <Route path="/assets/computers" element={<ProtectedRoute> <Main content={ <Computers />} /> </ProtectedRoute>} />
            <Route path="/assets/monitors" element={ <ProtectedRoute> <Main content={ <Monitors />} /> </ProtectedRoute>} />
            <Route path="/assets/software" element={<ProtectedRoute> <Main content={ <Software />} /> </ProtectedRoute>} />
            <Route path="/assets/network-devices" element={<ProtectedRoute> <Main content={ <NetworkDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/devices" element={<ProtectedRoute> <Main content={ <Devices />} /> </ProtectedRoute>} />
            <Route path="/assets/printers" element={<ProtectedRoute> <Main content={ <Printers />} /> </ProtectedRoute>} />
            <Route path="/assets/cartridges" element={<ProtectedRoute> <Main content={ <Cartridges />} /> </ProtectedRoute>} />        
            <Route path="/assets/consumables" element={<ProtectedRoute> <Main content={ <Consumables />} /> </ProtectedRoute>} />
            <Route path="/assets/phones" element={<ProtectedRoute> <Main content={ <Phones />} /> </ProtectedRoute>} />
            <Route path="/assets/racks" element={<ProtectedRoute> <Main content={ <Racks />} /> </ProtectedRoute>} />
            <Route path="/assets/enclosures" element={<ProtectedRoute> <Main content={ <Enclosures />} /> </ProtectedRoute>} />
            <Route path="/assets/pdus" element={<ProtectedRoute> <Main content={ <PDUs />} /> </ProtectedRoute>} />
            <Route path="/assets/passive-devices" element={<ProtectedRoute> <Main content={ <PassiveDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/unmanaged-devices" element={<ProtectedRoute> <Main content={ <UnmanagedDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/cables" element={<ProtectedRoute> <Main content={ <Cables />} /> </ProtectedRoute>} />
            <Route path="/assets/simcards" element={<ProtectedRoute> <Main content={ <Simcards />} /> </ProtectedRoute>} />
            <Route path="/assets/global" element={<ProtectedRoute> <Main content={ <Global />} /> </ProtectedRoute>} />
            
            <Route path="/template" element={<ProtectedRoute> <Main content={<ComputerFormTemplate />} /> </ProtectedRoute>} />
            
            <Route path="/assets/forms/computers" element={<ProtectedRoute> <Main content={ <ComputerForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/enclosures" element={<ProtectedRoute> <Main content={ <EnclosuresForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/cables" element={<ProtectedRoute> <Main content={ <CableForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/monitors" element={<ProtectedRoute> <Main content={ <MonitorForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/software" element={<ProtectedRoute> <Main content={ <SoftwareForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/network-devices" element={<ProtectedRoute> <Main content={ <NetworkDeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/devices" element={<ProtectedRoute> <Main content={ <DeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/pdus" element={<ProtectedRoute> <Main content={ <PduForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/cartridges" element={<ProtectedRoute> <Main content={ <CartridgeForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/consumables" element={<ProtectedRoute> <Main content={ <ConsumableForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/passive-devices" element={<ProtectedRoute> <Main content={ <PassiveDeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/phones" element={<ProtectedRoute> <Main content={<PhoneForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/printers" element={<ProtectedRoute> <Main content={<PrinterForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/simcards" element={<ProtectedRoute> <Main content={<SimcardForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/racks" element={<ProtectedRoute> <Main content={ <RackForm />} /> </ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute> <Main content={ <NotFound />} /> </ProtectedRoute>} />
            
            <Route path="/asset" element={<ProtectedRoute> <Main content={ <AssetTemplate />} /> </ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default RoutesComponent;
