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
import Cartridges from "../view/Cartridges/Cartridges";
import PhonesView from "../view/Phones/PhonesView";
import RackView from "../view/Rack/Rack";
import ConsumablesView from "../view/Consumables/ConsumablesView";
import Enclosures from "../view/Enclosures/Enclosures";
import PDUsView from "../view/PDUs/PDUsView";
import PassiveDevices from "../view/PassiveDevices/PassiveDevicesView";
import CablesView from "../view/Cables/CablesView";
import SimCardView from "../view/SimCards/SimCard";
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
import EditAsset from "../view/Assets/EditAsset";
import { AuthLayout } from "../view/AuthProvider";
import { ProtectedLayout } from "../layouts/ProtectedLayout";

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
    path: "",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
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
            <Cartridges />
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
        path: "/assets/forms/computers",
        element: (
          <Main>
            <ComputersForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/software",
        element: (
          <Main>
            <SoftwareForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/monitors",
        element: (
          <Main>
            <MonitorForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/network-devices",
        element: (
          <Main>
            <NetDeviceForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/devices",
        element: (
          <Main>
            <DeviceForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/printers",
        element: (
          <Main>
            <PrinterForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/cartridges",
        element: (
          <Main>
            <CartridgeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/consumables",
        element: (
          <Main>
            <ConsumableForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/phones",
        element: (
          <Main>
            <PhoneForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/racks",
        element: (
          <Main>
            <RackForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/enclosures",
        element: (
          <Main>
            <EnclosuresForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/pdus",
        element: (
          <Main>
            <PduForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/passive-devices",
        element: (
          <Main>
            <PassiveDeviceForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/cables",
        element: (
          <Main>
            <CableForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/simcards",
        element: (
          <Main>
            <SimCardForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/status",
        element: (
          <Main>
            <StatusForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/locations",
        element: (
          <Main>
            <LocationForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/computertypes",
        element: (
          <Main>
            <ComputerTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/manufacturers",
        element: (
          <Main>
            <ManufacturerForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/groupincharge",
        element: (
          <Main>
            <GroupInChargeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/computermodels",
        element: (
          <Main>
            <ComputerModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/networks",
        element: (
          <Main>
            <NetworkForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/groups",
        element: (
          <Main>
            <GroupForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/updatesources",
        element: (
          <Main>
            <UpdateSourceForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/monitortypes",
        element: (
          <Main>
            <MonitorTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/monitormodels",
        element: (
          <Main>
            <MonitorModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/softwarecategories",
        element: (
          <Main>
            <SoftwareCategoryForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/networkdevicetypes",
        element: (
          <Main>
            <NetworkDeviceTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/networkdevicesmodels",
        element: (
          <Main>
            <NetworkDeviceModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/devicetypes",
        element: (
          <Main>
            <DeviceTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/devicemodels",
        element: (
          <Main>
            <DeviceModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/printertypes",
        element: (
          <Main>
            <PrinterTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/printermodels",
        element: (
          <Main>
            <PrinterModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/cartridgetypes",
        element: (
          <Main>
            <CartridgeTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/consumabletypes",
        element: (
          <Main>
            <ConsumableTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/phonetypes",
        element: (
          <Main>
            <PhoneTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/phonemodels",
        element: (
          <Main>
            <PhoneModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/phonepower",
        element: (
          <Main>
            <PhonePowerForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/racktypes",
        element: (
          <Main>
            <RackTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/rackmodels",
        element: (
          <Main>
            <RackModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/enclosuresmodels",
        element: (
          <Main>
            <EnclosuresModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/pdutypes",
        element: (
          <Main>
            <PduTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/pdumodels",
        element: (
          <Main>
            <PduModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/passivedevicetypes",
        element: (
          <Main>
            <PassiveDeviceTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/passivedevicemodels",
        element: (
          <Main>
            <PassiveDeviceModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/cabletypes",
        element: (
          <Main>
            <CableTypeForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/cablestrands",
        element: (
          <Main>
            <CableStrandForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/socketmodels",
        element: (
          <Main>
            <SocketModelForm />
          </Main>
        ),
      },
      {
        path: "/assets/forms/simcardcomponents",
        element: (
          <Main>
            <SimCardComponentForm />
          </Main>
        ),
      },

      // "/assets/edit/computers" route is used as an example
      {
        path: "/assets/edit/computers",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },
      {
        path: "/assets/edit/monitors",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/software",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/networkequipments",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },
  {
    path: "/assets/forms/computers",
    element: (
      <Main>
        <ComputersForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/software",
    element: (
      <Main>
        <SoftwareForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitors",
    element: (
      <Main>
        <MonitorForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/network-devices",
    element: (
      <Main>
        <NetDeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devices",
    element: (
      <Main>
        <DeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printers",
    element: (
      <Main>
        <PrinterForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridges",
    element: (
      <Main>
        <CartridgeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumables",
    element: (
      <Main>
        <ConsumableForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phones",
    element: (
      <Main>
        <PhoneForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/racks",
    element: (
      <Main>
        <RackForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosures",
    element: (
      <Main>
        <EnclosuresForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdus",
    element: (
      <Main>
        <PduForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passive-devices",
    element: (
      <Main>
        <PassiveDeviceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cables",
    element: (
      <Main>
        <CableForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcards",
    element: (
      <Main>
        <SimCardForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/status",
    element: (
      <Main>
        <StatusForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/locations",
    element: (
      <Main>
        <LocationForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computertypes",
    element: (
      <Main>
        <ComputerTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/manufacturers",
    element: (
      <Main>
        <ManufacturerForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/groupincharge",
    element: (
      <Main>
        <GroupInChargeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/computermodels",
    element: (
      <Main>
        <ComputerModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networks",
    element: (
      <Main>
        <NetworkForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/groups",
    element: (
      <Main>
        <GroupForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/updatesources",
    element: (
      <Main>
        <UpdateSourceForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitortypes",
    element: (
      <Main>
        <MonitorTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/monitormodels",
    element: (
      <Main>
        <MonitorModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/softwarecategories",
    element: (
      <Main>
        <SoftwareCategoryForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicetypes",
    element: (
      <Main>
        <NetworkDeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/networkdevicesmodels",
    element: (
      <Main>
        <NetworkDeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicetypes",
    element: (
      <Main>
        <DeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/devicemodels",
    element: (
      <Main>
        <DeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printertypes",
    element: (
      <Main>
        <PrinterTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/printermodels",
    element: (
      <Main>
        <PrinterModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cartridgetypes",
    element: (
      <Main>
        <CartridgeTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/consumabletypes",
    element: (
      <Main>
        <ConsumableTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonetypes",
    element: (
      <Main>
        <PhoneTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonemodels",
    element: (
      <Main>
        <PhoneModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/phonepower",
    element: (
      <Main>
        <PhonePowerForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/racktypes",
    element: (
      <Main>
        <RackTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/rackmodels",
    element: (
      <Main>
        <RackModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/enclosuresmodels",
    element: (
      <Main>
        <EnclosuresModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdutypes",
    element: (
      <Main>
        <PduTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/pdumodels",
    element: (
      <Main>
        <PduModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicetypes",
    element: (
      <Main>
        <PassiveDeviceTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/passivedevicemodels",
    element: (
      <Main>
        <PassiveDeviceModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cabletypes",
    element: (
      <Main>
        <CableTypeForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/cablestrands",
    element: (
      <Main>
        <CableStrandForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/socketmodels",
    element: (
      <Main>
        <SocketModelForm />
      </Main>
    ),
  },
  {
    path: "/assets/forms/simcardcomponents",
    element: (
      <Main>
        <SimCardComponentForm />
      </Main>
    ),
  },

  // "/assets/edit/ASSET" route is used as an example
  {
    path: "/assets/edit/computers",
    element: (
      <Main>
        <EditAsset />
      </Main>
    ),
  },

      {
        path: "/assets/edit/devices",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/printers",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/cartridges",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/consumables",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/phones",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/racks",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/enclosures",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/pdu",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/passivedevices",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/cables",
        element: (
          <Main>
            <EditAsset />
          </Main>
        ),
      },

      {
        path: "/assets/edit/simcards",
        element: (
          <Main>
            <EditAsset />
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
    ],
  },
]);

export default router;
