import CartridgeForm from "../../components/forms/CartridgeForm";
import ComputerForm from "../../components/forms/ComputerForm";
import MonitorForm from "../../components/forms/MonitorForm";

export interface EditAssetOption {
  name: string;
  options: { name: string; content: any }[];
}

export const AssetOptions: EditAssetOption[] = [
  {
    name: "Computers",
    options: [
      { name: "EditUno", content: <ComputerForm /> },
      { name: "EditDos", content: <CartridgeForm /> },
      { name: "EditTres", content: <MonitorForm /> },
    ],
  }
];