import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import GroupInChargeForm from "../component/forms/assets/GroupInChargeForm";
import LocForm from "../component/forms/assets/LocationForm";
import StatusForm from "../component/forms/assets/StatusForm";
import ComputerTypeForm from "../component/forms/assets/ComputerTypeForm";
import MonitorTypeForm from "../component/forms/assets/MonitorTypeForm";
import NetDeviceTypeForm from "../component/forms/assets/NetDeviceTypeForm";
import DeviceTypeForm from "../component/forms/assets/DeviceTypeForm";
import PrinterTypeForm from "../component/forms/assets/PrinterTypeForm";
import CartridgeTypeForm from "../component/forms/assets/CartridgeTypeForm";
import ConsumableTypeForm from "../component/forms/assets/ConsumableTypeForm";
import PhoneTypeForm from "../component/forms/assets/PhoneTypeForm";
import RackTypeForm from "../component/forms/assets/RackTypeForm";
import PduTypeForm from "../component/forms/assets/PduTypeForm";
import PassiveDeviceTypeForm from "../component/forms/assets/PassiveDeviceTypeForm";
import CableTypeForm from "../component/forms/assets/CableTypeForm";
import ManufacturerForm from "../component/forms/assets/ManufacturerForm";
import ComputerModelForm from "../component/forms/assets/ComputerModelForm";
import MonitorModelForm from "../component/forms/assets/MonitorModelForm";
import NetDeviceModelForm from "../component/forms/assets/NetDeviceModelForm";
import DeviceModelForm from "../component/forms/assets/DeviceModelForm";
import PrinterModelForm from "../component/forms/assets/PrinterModelForm";
import PhoneModelForm from "../component/forms/assets/PhoneModelForm";
import RackModelForm from "../component/forms/assets/RackModelForm";
import EnclosuresModelForm from "../component/forms/assets/EnclosuresModelForm";
import PduModelForm from "../component/forms/assets/PduModelForm";
import PassiveDeviceModelForm from "../component/forms/assets/PassiveDeviceModelForm";
import NetworkForm from "../component/forms/assets/NetworkForm";
import UpdateSourceForm from "../component/forms/assets/UpdateSourceForm";
import GroupForm from "../component/forms/assets/GroupForm";
import PublisherForm from "../component/forms/assets/PublisherForm";
import SoftwareCategoryForm from "../component/forms/assets/SoftwareCategoryForm";
import PhonePowerForm from "../component/forms/assets/PhonePowerForm";

// ? servicio
import { useServiceUser } from '../hooks/useServiceUser';

// componente para proteger las rutas 
const ProtectedRoute = ({ children }) => {
  const { user } = useServiceUser()
  console.log("🚀 ~ file: routes.js:51 ~ ProtectedRoute ~ user", user)
  
  if( !user ) return <Login/>
  return children

}

const RoutesComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route exact path="/" element={<ProtectedRoute> <Main /> </ProtectedRoute>} />
            <Route path="/assets" element={<ProtectedRoute> <Main content={<AssetsDashboard />} /> </ProtectedRoute>} />
            <Route path="/assets/dashboard" element={<ProtectedRoute> <Main content={<AssetsDashboard />} /> </ProtectedRoute>} />
            <Route path="/assets/computers" element={<ProtectedRoute> <Main content={<Computers />} /> </ProtectedRoute>} />
            <Route path="/assets/monitors" element={<ProtectedRoute> <Main content={<Monitors />} /> </ProtectedRoute>} />
            <Route path="/assets/software" element={<ProtectedRoute> <Main content={<Software />} /> </ProtectedRoute>} />
            <Route path="/assets/network-devices" element={<ProtectedRoute> <Main content={<NetworkDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/devices" element={<ProtectedRoute> <Main content={<Devices />} /> </ProtectedRoute>} />
            <Route path="/assets/printers" element={<ProtectedRoute> <Main content={<Printers />} /> </ProtectedRoute>} />
            <Route path="/assets/cartridges" element={<ProtectedRoute> <Main content={<Cartridges />} /> </ProtectedRoute>} />
            <Route path="/assets/consumables" element={<ProtectedRoute> <Main content={<Consumables />} /> </ProtectedRoute>} />
            <Route path="/assets/phones" element={<ProtectedRoute> <Main content={<Phones />} /> </ProtectedRoute>} />
            <Route path="/assets/racks" element={<ProtectedRoute> <Main content={<Racks />} /> </ProtectedRoute>} />
            <Route path="/assets/enclosures" element={<ProtectedRoute> <Main content={<Enclosures />} /> </ProtectedRoute>} />
            <Route path="/assets/pdus" element={<ProtectedRoute> <Main content={<PDUs />} /> </ProtectedRoute>} />
            <Route path="/assets/passive-devices" element={<ProtectedRoute> <Main content={<PassiveDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/unmanaged-devices" element={<ProtectedRoute> <Main content={<UnmanagedDevices />} /> </ProtectedRoute>} />
            <Route path="/assets/cables" element={<ProtectedRoute> <Main content={<Cables />} /> </ProtectedRoute>} />
            <Route path="/assets/simcards" element={<ProtectedRoute> <Main content={<Simcards />} /> </ProtectedRoute>} />
            <Route path="/assets/global" element={<ProtectedRoute> <Main content={<Global />} /> </ProtectedRoute>} />

            <Route path="/template" element={<ProtectedRoute> <Main content={<ComputerFormTemplate />} /> </ProtectedRoute>} />
            {/* Forms */}
            <Route path="/assets/forms/computers" element={<ProtectedRoute> <Main content={<ComputerForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/enclosures" element={<ProtectedRoute> <Main content={<EnclosuresForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/cables" element={<ProtectedRoute> <Main content={<CableForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/monitors" element={<ProtectedRoute> <Main content={<MonitorForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/software" element={<ProtectedRoute> <Main content={<SoftwareForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/network-devices" element={<ProtectedRoute> <Main content={<NetworkDeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/devices" element={<ProtectedRoute> <Main content={<DeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/pdus" element={<ProtectedRoute> <Main content={<PduForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/cartridges" element={<ProtectedRoute> <Main content={<CartridgeForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/consumables" element={<ProtectedRoute> <Main content={<ConsumableForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/passive-devices" element={<ProtectedRoute> <Main content={<PassiveDeviceForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/phones" element={<ProtectedRoute> <Main content={<PhoneForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/printers" element={<ProtectedRoute> <Main content={<PrinterForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/simcards" element={<ProtectedRoute> <Main content={<SimcardForm />} /> </ProtectedRoute>} />
            <Route path="/assets/forms/racks" element={<ProtectedRoute> <Main content={<RackForm />} /> </ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute> <Main content={<NotFound />} /> </ProtectedRoute>} />
            {/* Subforms */}
            <Route path="/assets/forms/groupincharge" element={<Main content={<GroupInChargeForm />} />} />
            <Route path="/assets/forms/location" element={<Main content={<LocForm />} />} />
            <Route path="/assets/forms/status" element={<Main content={<StatusForm />} />} />
            <Route path="/assets/forms/computertype" element={<Main content={<ComputerTypeForm />} />} />
            <Route path="/assets/forms/monitortype" element={<Main content={<MonitorTypeForm />} />} />
            <Route path="/assets/forms/netdevicetype" element={<Main content={<NetDeviceTypeForm />} />} />
            <Route path="/assets/forms/devicetype" element={<Main content={<DeviceTypeForm />} />} />
            <Route path="/assets/forms/printertype" element={<Main content={<PrinterTypeForm />} />} />
            <Route path="/assets/forms/cartridgetype" element={<Main content={<CartridgeTypeForm />} />} />
            <Route path="/assets/forms/consumabletype" element={<Main content={<ConsumableTypeForm />} />} />
            <Route path="/assets/forms/phonetype" element={<Main content={<PhoneTypeForm />} />} />
            <Route path="/assets/forms/racktype" element={<Main content={<RackTypeForm />} />} />
            <Route path="/assets/forms/pdutype" element={<Main content={<PduTypeForm />} />} />
            <Route path="/assets/forms/passivedevicetype" element={<Main content={<PassiveDeviceTypeForm />} />} />
            <Route path="/assets/forms/cabletype" element={<Main content={<CableTypeForm />} />} />
            <Route path="/assets/forms/manufacturer" element={<Main content={<ManufacturerForm />} />} />
            <Route path="/assets/forms/computermodel" element={<Main content={<ComputerModelForm />} />} />
            <Route path="/assets/forms/monitormodel" element={<Main content={<MonitorModelForm />} />} />
            <Route path="/assets/forms/netdevicemodel" element={<Main content={<NetDeviceModelForm />} />} />
            <Route path="/assets/forms/devicemodel" element={<Main content={<DeviceModelForm />} />} />
            <Route path="/assets/forms/printermodel" element={<Main content={<PrinterModelForm />} />} />
            <Route path="/assets/forms/phonemodel" element={<Main content={<PhoneModelForm />} />} />
            <Route path="/assets/forms/rackmodel" element={<Main content={<RackModelForm />} />} />
            <Route path="/assets/forms/enclosuresmodel" element={<Main content={<EnclosuresModelForm />} />} />
            <Route path="/assets/forms/pdumodel" element={<Main content={<PduModelForm />} />} />
            <Route path="/assets/forms/passivedevicemodel" element={<Main content={<PassiveDeviceModelForm />} />} />
            <Route path="/assets/forms/network" element={<Main content={<NetworkForm />} />} />
            <Route path="/assets/forms/updatesource" element={<Main content={<UpdateSourceForm />} />} />
            <Route path="/assets/forms/group" element={<Main content={<GroupForm />} />} />
            <Route path="/assets/forms/publisher" element={<Main content={<PublisherForm />} />} />
            <Route path="/assets/forms/softwarecategory" element={<Main content={<SoftwareCategoryForm />} />} />
            <Route path="/assets/forms/phonepower" element={<Main content={<PhonePowerForm />} />} />

            <Route path="/asset" element={<ProtectedRoute> <Main content={<AssetTemplate />} /> </ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default RoutesComponent;
