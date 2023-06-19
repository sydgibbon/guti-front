import CartridgeForm from "../../components/forms/CartridgeForm";
import ComputerForm from "../../components/forms/ComputerForm";
import MonitorForm from "../../components/forms/MonitorForm";

export interface EditAssetOption {
  name: string;
  options: { name: string; content: any }[];
}

export const AssetOptions: EditAssetOption[] = [
  {
    name: "Computer1",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Cartridge", content: <CartridgeForm /> },
    ],
  },
  {
    name: "Monitor1",
    options: [{ name: "Monitor", content: <MonitorForm /> }],
  },
];
