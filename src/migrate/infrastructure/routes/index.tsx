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
import ComputerForm from "../components/forms/assets/ComputerForm";
import SoftwareForm from "../components/forms/assets/SoftwareForm";
import RefactorComputersFormTemplate from "../components/forms/ComputerForm";
import RefactorSoftwareFormTemplate from "../components/forms/SoftwareForm";
import RefactorMonitorFormTemplate from "../components/forms/MonitorForm";
import RefactorNetDeviceFormTemplate from "../components/forms/NetworkDeviceForm";
import RefactorDeviceFormTemplate from "../components/forms/DeviceForm";
import RefactorPrinterFormTemplate from "../components/forms/PrinterForm";
import RefactorCartridgeFormTemplate from "../components/forms/CartridgeForm";
import RefactorConsumableFormTemplate from "../components/forms/ConsumableForm";
import RefactorPhoneFormTemplate from "../components/forms/PhoneForm";
import RefactorRackFormTemplate from "../components/forms/RackForm";
import RefactorEnclosuresFormTemplate from "../components/forms/EnclosuresForm";
import RefactorPduFormTemplate from "../components/forms/PduForm";
import RefactorPassiveDeviceFormTemplate from "../components/forms/PassiveDeviceForm";
import RefactorCableFormTemplate from "../components/forms/CableForm";
import RefactorSimCardFormTemplate from "../components/forms/SimCardForm";
import RefactorStatusFormTemplate from "../components/forms/StatusForm";
import RefactorLocationFormTemplate from "../components/forms/LocationForm";
import RefactorComputerTypeFormTemplate from "../components/forms/ComputerTypeForm";
import RefactorManufacturerFormTemplate from "../components/forms/ManufacturerForm";
import RefactorGroupInChargeFormTemplate from "../components/forms/GroupInChargeForm";
import RefactorComputerModelFormTemplate from "../components/forms/ComputerModelForm";
import RefactorNetworkFormTemplate from "../components/forms/NetworkForm";
import RefactorGroupFormTemplate from "../components/forms/GroupForm";
import RefactorUpdateSourceFormTemplate from "../components/forms/UpdateSourceForm";
import RefactorMonitorTypeFormTemplate from "../components/forms/MonitorTypeForm";
import RefactorMonitorModelFormTemplate from "../components/forms/MonitorModelForm";
import RefactorSoftwareCategoryFormTemplate from "../components/forms/SoftwareCategory";
import RefactorNetworkDeviceTypeFormTemplate from "../components/forms/NetworkDevicesTypeForm";
import RefactorNetworkDeviceModelFormTemplate from "../components/forms/NetworkDeviceModelForm";
import RefactorDeviceTypeFormTemplate from "../components/forms/DeviceTypeForm";
import RefactorDeviceModelFormTemplate from "../components/forms/DeviceModelForm";
import RefactorPrinterTypeFormTemplate from "../components/forms/PrinterTypeForm";
import RefactorPrinterModelFormTemplate from "../components/forms/PrinterModelForm";
import RefactorCartridgeTypeFormTemplate from "../components/forms/CartridgesTypeForm";
import RefactorConsumableTypeFormTemplate from "../components/forms/ConsumableTypeForm";
import RefactorPhoneTypeFormTemplate from "../components/forms/PhoneTypeForm";
import RefactorPhoneModelFormTemplate from "../components/forms/PhoneModelForm";
import RefactorPhonePowerFormTemplate from "../components/forms/PhonePowerForm";
import RefactorRackTypeFormTemplate from "../components/forms/RackTypeForm";
import RefactorRackModelFormTemplate from "../components/forms/RackModelForm";
import RefactorEnclosuresModelFormTemplate from "../components/forms/EnclosuresModelForm";
import RefactorPduTypeFormTemplate from "../components/forms/PduTypeForm";
import RefactorPduModelFormTemplate from "../components/forms/PduModelForm";
import RefactorPassiveDeviceTypeFormTemplate from "../components/forms/PassiveDeviceTypeForm";
import RefactorPassiveDeviceModelFormTemplate from "../components/forms/PassiveDeviceModelForm";
import RefactorCableTypeFormTemplate from "../components/forms/CableTypeForm";
import RefactorCableStrandFormTemplate from "../components/forms/CableStrandForm";
import RefactorSocketModelFormTemplate from "../components/forms/SocketModelForm";
import RefactorSimCardComponentFormTemplate from "../components/forms/SimCardComponentForm";


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
    path: "/assets/forms/computers-refactor",
    element: (
      <Main>
        <RefactorComputersFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/software-refactor",
    element: (
      <Main>
        <RefactorSoftwareFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitors-refactor",
    element: (
      <Main>
        <RefactorMonitorFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/network-devices-refactor",
    element: (
      <Main>
        <RefactorNetDeviceFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devices-refactor",
    element: (
      <Main>
        <RefactorDeviceFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printer-refactor",
    element: (
      <Main>
        <RefactorPrinterFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridge-refactor",
    element: (
      <Main>
        <RefactorCartridgeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumable-refactor",
    element: (
      <Main>
        <RefactorConsumableFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phone-refactor",
    element: (
      <Main>
        <RefactorPhoneFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/rack-refactor",
    element: (
      <Main>
        <RefactorRackFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosures-refactor",
    element: (
      <Main>
        <RefactorEnclosuresFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdu-refactor",
    element: (
      <Main>
        <RefactorPduFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevice-refactor",
    element: (
      <Main>
        <RefactorPassiveDeviceFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cable-refactor",
    element: (
      <Main>
        <RefactorCableFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcard-refactor",
    element: (
      <Main>
        <RefactorSimCardFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/status-refactor",
    element: (
      <Main>
        <RefactorStatusFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/location-refactor",
    element: (
      <Main>
        <RefactorLocationFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computertype-refactor",
    element: (
      <Main>
        <RefactorComputerTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/manufacturer-refactor",
    element: (
      <Main>
        <RefactorManufacturerFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/groupincharge-refactor",
    element: (
      <Main>
        <RefactorGroupInChargeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computermodel-refactor",
    element: (
      <Main>
        <RefactorComputerModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/network-refactor",
    element: (
      <Main>
        <RefactorNetworkFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/group-refactor",
    element: (
      <Main>
        <RefactorGroupFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/updatesource-refactor",
    element: (
      <Main>
        <RefactorUpdateSourceFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitortype-refactor",
    element: (
      <Main>
        <RefactorMonitorTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitormodel-refactor",
    element: (
      <Main>
        <RefactorMonitorModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/softwarecategory-refactor",
    element: (
      <Main>
        <RefactorSoftwareCategoryFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicetype-refactor",
    element: (
      <Main>
        <RefactorNetworkDeviceTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicesmodel-refactor",
    element: (
      <Main>
        <RefactorNetworkDeviceModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicetype-refactor",
    element: (
      <Main>
        <RefactorDeviceTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicemodel-refactor",
    element: (
      <Main>
        <RefactorDeviceModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printertype-refactor",
    element: (
      <Main>
        <RefactorPrinterTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printermodel-refactor",
    element: (
      <Main>
        <RefactorPrinterModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridgetype-refactor",
    element: (
      <Main>
        <RefactorCartridgeTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumabletype-refactor",
    element: (
      <Main>
        <RefactorConsumableTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonetype-refactor",
    element: (
      <Main>
        <RefactorPhoneTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonemodel-refactor",
    element: (
      <Main>
        <RefactorPhoneModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonepower-refactor",
    element: (
      <Main>
        <RefactorPhonePowerFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/racktype-refactor",
    element: (
      <Main>
        <RefactorRackTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/rackmodel-refactor",
    element: (
      <Main>
        <RefactorRackModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosuresmodel-refactor",
    element: (
      <Main>
        <RefactorEnclosuresModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdutype-refactor",
    element: (
      <Main>
        <RefactorPduTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdumodel-refactor",
    element: (
      <Main>
        <RefactorPduModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicetype-refactor",
    element: (
      <Main>
        <RefactorPassiveDeviceTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicemodel-refactor",
    element: (
      <Main>
        <RefactorPassiveDeviceModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cabletype-refactor",
    element: (
      <Main>
        <RefactorCableTypeFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cablestrand-refactor",
    element: (
      <Main>
        <RefactorCableStrandFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/socketmodel-refactor",
    element: (
      <Main>
        <RefactorSocketModelFormTemplate />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcardcomponent-refactor",
    element: (
      <Main>
        <RefactorSimCardComponentFormTemplate />
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
//                   <Main content={<ComputerFormTemplate />} />{" "}
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
