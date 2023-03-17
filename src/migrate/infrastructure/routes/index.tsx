import { createBrowserRouter } from "react-router-dom";

// PAGES
import LoginView from "../view/Login/LoginView";
import Main from "../components/dashboard/Main";
import AssetsDashboard from "../components/dashboard/AssetsDashboard";
import Computers from "../view/Computers/Computer";
import Monitors from "../view/Monitors/Monitors";
import Software from "../view/Software/Software";
import NetworkDevices from "../view/NetworkDevices/NetworkDevices";
import Devices from "../view/Devices/Devices";
import PrintersView from "../view/Printers/PrintersView";
import CartridgesView from "../view/Cartridges/CartridgesView";
import PhonesView from "../view/Phones/PhonesView";
import RackView from "../view/Rack/RackView";
import ConsumablesView from "../view/Consumables/ConsumablesView";
import Enclosures from "../view/Enclosures/EnclosuresView";
import PDUsView from "../view/PDUs/PDUsView";
import PassiveDevices from "../view/PassiveDevices/PassiveDevicesView";
import CablesView from "../view/Cables/CablesView";
import SimCardView from "../view/SimCard/SimCardView";
import GlobalView from "../view/Global/GlobalView";
import UnmanagedDevicesView from "../view/UnmanagedDevices/UnmanagedDevicesView";
import NotFoundView from "../view/NotFoundView";
import ComputersForm from "../components/forms/ComputerForm";
import SoftwareForm from "../components/forms/SoftwareForm";
import MonitorForm from "../components/forms/MonitorForm";
import NetDeviceForm from "../components/forms/NetworkDeviceForm";
import DeviceForm from "../components/forms/DeviceForm";
import PrinterForm from "../components/forms/PrinterForm";
import CartridgeForm from "../components/forms/CartridgeForm";
import ConsumableForm from "../components/forms/ConsumableForm";
import PhoneForm from "../components/forms/PhoneForm";
import RackForm from "../components/forms/RackForm";
import EnclosuresForm from "../components/forms/EnclosuresForm";
import PduForm from "../components/forms/PduForm";
import PassiveDeviceForm from "../components/forms/PassiveDeviceForm";
import CableForm from "../components/forms/CableForm";
import SimCardForm from "../components/forms/SimCardForm";
import StatusForm from "../components/forms/StatusForm";
import LocationForm from "../components/forms/LocationForm";
import ComputerTypeForm from "../components/forms/ComputerTypeForm";
import ManufacturerForm from "../components/forms/ManufacturerForm";
import GroupInChargeForm from "../components/forms/GroupInChargeForm";
import ComputerModelForm from "../components/forms/ComputerModelForm";
import NetworkForm from "../components/forms/NetworkForm";
import GroupForm from "../components/forms/GroupForm";
import UpdateSourceForm from "../components/forms/UpdateSourceForm";
import MonitorTypeForm from "../components/forms/MonitorTypeForm";
import MonitorModelForm from "../components/forms/MonitorModelForm";
import SoftwareCategoryForm from "../components/forms/SoftwareCategory";
import NetworkDeviceTypeForm from "../components/forms/NetworkDevicesTypeForm";
import NetworkDeviceModelForm from "../components/forms/NetworkDeviceModelForm";
import DeviceTypeForm from "../components/forms/DeviceTypeForm";
import DeviceModelForm from "../components/forms/DeviceModelForm";
import PrinterTypeForm from "../components/forms/PrinterTypeForm";
import PrinterModelForm from "../components/forms/PrinterModelForm";
import CartridgeTypeForm from "../components/forms/CartridgesTypeForm";
import ConsumableTypeForm from "../components/forms/ConsumableTypeForm";
import PhoneTypeForm from "../components/forms/PhoneTypeForm";
import PhoneModelForm from "../components/forms/PhoneModelForm";
import PhonePowerForm from "../components/forms/PhonePowerForm";
import RackTypeForm from "../components/forms/RackTypeForm";
import RackModelForm from "../components/forms/RackModelForm";
import EnclosuresModelForm from "../components/forms/EnclosuresModelForm";
import PduTypeForm from "../components/forms/PduTypeForm";
import PduModelForm from "../components/forms/PduModelForm";
import PassiveDeviceTypeForm from "../components/forms/PassiveDeviceTypeForm";
import PassiveDeviceModelForm from "../components/forms/PassiveDeviceModelForm";
import CableTypeForm from "../components/forms/CableTypeForm";
import CableStrandForm from "../components/forms/CableStrandForm";
import SocketModelForm from "../components/forms/SocketModelForm";
import SimCardComponentForm from "../components/forms/SimCardComponentForm";


// import EnclosuresForm from "../component/forms/assets/EnclosuresForm";
// import CableForm from "../component/forms/assets/CableForm";
// import MonitorForm from "../component/forms/assets/MonitorForm";
// import SoftwareForm from "../component/forms/assets/SoftwareForm";
// import NetworkDeviceForm from "../component/forms/assets/NetworkDeviceForm";
// import DeviceForm from "../component/forms/assets/DeviceForm";
// import PduForm from "../component/forms/assets/PduForm";
// import PrinterForm from "../component/forms/assets/PrinterForm";
// import CartridgeForm from "../component/forms/assets/CartridgeForm";
// import ConsumableForm from "../component/forms/assets/ConsumableForm";
// import PassiveDeviceForm from "../component/forms/assets/PassiveDeviceForm";
// import PhoneForm from "../component/forms/assets/PhoneForm";
// import SimcardForm from "../component/forms/assets/SimcardForm";
// import RackForm from "../component/forms/assets/RackForm";

// ? servicio

const router = createBrowserRouter([
  { path: "login", element: <LoginView /> },

  {
    path: "assets/dashboard",
    element: (
      <Main>
        <AssetsDashboard />
      </Main>
    ),
  },
  {
    path: "assets/computers",
    element: (
      <Main>
        <Computers />
      </Main>
    ),
  },
  {
    path: "assets/monitors",
    element: (
      <Main>
        <Monitors />
      </Main>
    ),
  },
  {
    path: "assets/software",
    element: (
      <Main>
        <Software />
      </Main>
    ),
  },
  {
    path: "assets/devices",
    element: (
      <Main>
        <Devices />
      </Main>
    ),
  },
  {
    path: "assets/printers",
    element: (
      <Main>
        <PrintersView />
      </Main>
    ),
  },
  {
    path: "assets/cartridges",
    element: (
      <Main>
        <CartridgesView />
      </Main>
    ),
  },
  {
    path: "assets/consumables",
    element: (
      <Main>
        <ConsumablesView />
      </Main>
    ),
  },
  {
    path: "assets/phones",
    element: (
      <Main>
        <PhonesView />
      </Main>
    ),
  },
  {
    path: "/assets/racks",
    element: (
      <Main>
        <RackView />
      </Main>
    ),
  },
  {
    path: "/assets/enclosures",
    element: (
      <Main>
        <Enclosures />
      </Main>
    ),
  },
  {
    path: "/assets/pdus",
    element: (
      <Main>
        <PDUsView />
      </Main>
    ),
  },
  {
    path: "/assets/passive-devices",
    element: (
      <Main>
        <PassiveDevices />
      </Main>
    ),
  },
  {
    path: "/assets/cables",
    element: (
      <Main>
        <CablesView />
      </Main>
    ),
  },
  {
    path: "/assets/simcards",
    element: (
      <Main>
        <SimCardView />
      </Main>
    ),
  },
  {
    path: "/assets/global",
    element: (
      <Main>
        <GlobalView />
      </Main>
    ),
  },
  {
    path: "/assets/unmanaged-devices",
    element: (
      <Main>
        <UnmanagedDevicesView />
      </Main>
    ),
  },


  {
    path: "/assets/forms/computers-form",
    element: (
      <Main>
        <ComputersForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/software-form",
    element: (
      <Main>
        <SoftwareForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitors-form",
    element: (
      <Main>
        <MonitorForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/network-devices-form",
    element: (
      <Main>
        <NetDeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devices-form",
    element: (
      <Main>
        <DeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printer-form",
    element: (
      <Main>
        <PrinterForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridge-form",
    element: (
      <Main>
        <CartridgeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumable-form",
    element: (
      <Main>
        <ConsumableForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phone-form",
    element: (
      <Main>
        <PhoneForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/rack-form",
    element: (
      <Main>
        <RackForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosures-form",
    element: (
      <Main>
        <EnclosuresForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdu-form",
    element: (
      <Main>
        <PduForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevice-form",
    element: (
      <Main>
        <PassiveDeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cable-form",
    element: (
      <Main>
        <CableForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcard-form",
    element: (
      <Main>
        <SimCardForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/status-form",
    element: (
      <Main>
        <StatusForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/location-form",
    element: (
      <Main>
        <LocationForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computertype-form",
    element: (
      <Main>
        <ComputerTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/manufacturer-form",
    element: (
      <Main>
        <ManufacturerForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/groupincharge-form",
    element: (
      <Main>
        <GroupInChargeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computermodel-form",
    element: (
      <Main>
        <ComputerModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/network-form",
    element: (
      <Main>
        <NetworkForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/group-form",
    element: (
      <Main>
        <GroupForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/updatesource-form",
    element: (
      <Main>
        <UpdateSourceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitortype-form",
    element: (
      <Main>
        <MonitorTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitormodel-form",
    element: (
      <Main>
        <MonitorModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/softwarecategory-form",
    element: (
      <Main>
        <SoftwareCategoryForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicetype-form",
    element: (
      <Main>
        <NetworkDeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicesmodel-form",
    element: (
      <Main>
        <NetworkDeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicetype-form",
    element: (
      <Main>
        <DeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicemodel-form",
    element: (
      <Main>
        <DeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printertype-form",
    element: (
      <Main>
        <PrinterTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printermodel-form",
    element: (
      <Main>
        <PrinterModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridgetype-form",
    element: (
      <Main>
        <CartridgeTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumabletype-form",
    element: (
      <Main>
        <ConsumableTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonetype-form",
    element: (
      <Main>
        <PhoneTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonemodel-form",
    element: (
      <Main>
        <PhoneModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonepower-form",
    element: (
      <Main>
        <PhonePowerForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/racktype-form",
    element: (
      <Main>
        <RackTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/rackmodel-form",
    element: (
      <Main>
        <RackModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosuresmodel-form",
    element: (
      <Main>
        <EnclosuresModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdutype-form",
    element: (
      <Main>
        <PduTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdumodel-form",
    element: (
      <Main>
        <PduModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicetype-form",
    element: (
      <Main>
        <PassiveDeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicemodel-form",
    element: (
      <Main>
        <PassiveDeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cabletype-form",
    element: (
      <Main>
        <CableTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cablestrand-form",
    element: (
      <Main>
        <CableStrandForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/socketmodel-form",
    element: (
      <Main>
        <SocketModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcardcomponent-form",
    element: (
      <Main>
        <SimCardComponentForm />
      </Main>
    ),
  },
  {
    path: "*",
    element: (
      <Main>
        <NotFoundView />
      </Main>
    ),
  },
]);

//             <Route
//               path="/template"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<ComputerForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/assets/forms/computers"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<ComputerForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/enclosures"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<EnclosuresForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/cables"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<CableForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/monitors"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<MonitorForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/software"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<SoftwareForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/network-devices"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<NetworkDeviceForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/devices"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<DeviceForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/pdus"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<PduForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/cartridges"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<CartridgeForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/consumables"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<ConsumableForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/passive-devices"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<PassiveDeviceForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/phones"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<PhoneForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/printers"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<PrinterForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/simcards"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<SimcardForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/assets/forms/racks"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<RackForm />} />{" "}
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="*"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<NotFound />} />{" "}
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/asset"
//               element={
//                 <ProtectedRoute>
//                   {" "}
//                   <Main content={<AssetTemplate />} />{" "}
//                 </ProtectedRoute>
//               }
//             />

export default router;
