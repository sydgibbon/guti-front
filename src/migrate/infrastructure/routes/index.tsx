import { createBrowserRouter } from "react-router-dom";

// PAGES
import LoginView from "../view/Login/LoginView";
import Main from "../components/dashboard/Main";
import AssetsDashboard from "../components/dashboard/AssetsDashboard";
import Computers from "../view/Computers/Computers";
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

// import ComputerForm from "../component/forms/assets/ComputerForm";
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
  {
    path: "/",
    element: <Main />,
  },
  { path: "login", element: <LoginView /> },
  {
    path: "assets",
    element: (
      <Main>
        <AssetsDashboard />
      </Main>
    ),
  },
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
    path: "assets/network-devices",
    element: (
      <Main>
        <NetworkDevices />
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
