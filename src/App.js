import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import ComputerFormTemplate from "./component/forms/assets/ComputerFormTemplate";



function App() {
  axiosPrivate
    .get("http://127.0.0.1:8000/api/assets/computers/")
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
    });

  const postComputer = (e) => {
    e.preventDefault();
    axiosPrivate({
      method: "POST",
      url: "http://127.0.0.1:8000/api/assets/computers/",
      data: {
        id: 0,
        entities: 1,
        name: null,
        serial: null,
        otherserial: null,
        contact: null,
        contact_num: null,
        users_tech: 1,
        groups_tech: 1,
        comment: "POSTED WITH AXIOS LAST TEST I HOPE",
        date_mod: null,
        autoupdatesystems: 11,
        locations: 1,
        networks: 11,
        computermodels: 11,
        computertypes: 0,
        is_template: 1,
        template_name: null,
        manufacturers: 11,
        is_deleted: 11,
        is_dynamic: 1,
        users: 1,
        groups: 1,
        states: 1,
        ticket_tco: null,
        uuid: null,
        date_creation: null,
        is_recursive: 1,
        last_inventory_update: null,
      },
    })
  };
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
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
        
        <Route path="/computer-form" element={<Main content={ <ComputerForm />} />} />
        <Route path="/computer-form-template" element={<Main content={ <ComputerFormTemplate />} />} />
        <Route path="/enclosure-form" element={<Main content={ <EnclosuresForm />} />} />
        <Route path="/cable-form" element={<Main content={ <CableForm />} />} />
        <Route path="/computers" element={<Main content={ <Computers />} />} />
        <Route path="/enclosures-form" element={<Main content={ <EnclosuresForm />} />} />
        <Route path="/monitor-form" element={<Main content={ <MonitorForm />} />} />
        <Route path="/software-form" element={<Main content={ <SoftwareForm />} />} />
        <Route path="/netdevice-form" element={<Main content={ <NetworkDeviceForm />} />} />
        <Route path="/device-form" element={<Main content={ <DeviceForm />} />} />
        <Route path="/pdu-form" element={<Main content={ <PduForm />} />} />
        <Route path="/cartridge-form" element={<Main content={ <CartridgeForm />} />} />
        <Route path="/consumable-form" element={<Main content={ <ConsumableForm />} />} />
        <Route path="/passivedevice-form" element={<Main content={ <PassiveDeviceForm />} />} />
        <Route path="/phone-form" element={<Main content={ <PhoneForm />} />} />
        <Route path="/printer-form" element={<Main content={ <PrinterForm />} />} />
        <Route path="/simcard-form" element={<Main content={ <SimcardForm />} />} />
        <Route path="/rack-form" element={<Main content={ <RackForm />} />} />
        <Route path="*" element={<Main content={ <NotFound />} />} />
      </Routes>
      <button
        type="button"
        className="bg-primary text-white rounded-full"
        onClick={postComputer}
      >
        POST WITH AXIOS
      </button>
    </Router>

  );
}

export default App;
