import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Main from "./component/dashboard/Main";
import AssetsDashboard from "./component/dashboard/AssetsDashboard";
import axiosPrivate from "./api/axios";
import Computers from "./pages/Computers";
import Monitors from "./pages/Monitors";
import Software from "./pages/Software";
import NetworkDevices from "./pages/NetworkDevice";
import PassiveDevices from "./pages/PassiveDevices";
import Simcards from "./pages/Simcards";

import ComputerForm from "./component/forms/assets/ComputerForm";
import EnclosuresForm from "./component/forms/assets/EnclosuresForm";
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



function App() {
  axiosPrivate
    .get("http://127.0.0.1:8000/api/assets/computers/")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const postComputer = (e) => {
    e.preventDefault();
    console.log("posting...");
    axiosPrivate({
      method: "POST",
      url: "http://127.0.0.1:8000/api/assets/computers/",
      data: {
        id: 0,
        entities_id: 1,
        name: null,
        serial: null,
        otherserial: null,
        contact: null,
        contact_num: null,
        users_id_tech: 1,
        groups_id_tech: 1,
        comment: "POSTED WITH AXIOS LAST TEST I HOPE",
        date_mod: null,
        autoupdatesystems_id: 11,
        locations_id: 1,
        networks_id: 11,
        computermodels_id: 11,
        computertypes_id: 0,
        is_template: 1,
        template_name: null,
        manufacturers_id: 11,
        is_deleted: 11,
        is_dynamic: 1,
        users_id: 1,
        groups_id: 1,
        states_id: 1,
        ticket_tco: null,
        uuid: null,
        date_creation: null,
        is_recursive: 1,
        last_inventory_update: null,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assets" element={<Main content={ <AssetsDashboard />} />} />
        <Route path="/computers" element={<Main content={ <Computers />} />} />
        <Route path="/assets/monitors" element={<Main content={ <Monitors />} />} />
        <Route path="/assets/software" element={<Main content={ <Software />} />} />
        <Route path="/assets/network-devices" element={<Main content={ <NetworkDevices />} />} />
        <Route path="/assets/passive-devices" element={<Main content={ <PassiveDevices />} />} />
        <Route path="/assets/simcards" element={<Main content={ <Simcards />} />} />

        <Route path="/computer-form" element={<Main content={ <ComputerForm />} />} />
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
