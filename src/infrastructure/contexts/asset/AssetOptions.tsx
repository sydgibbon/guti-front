import CartridgeForm from "../../components/forms/CartridgeForm";
import ComputerForm from "../../components/forms/ComputerForm";
import MonitorForm from "../../components/forms/MonitorForm";

export interface EditAssetOption {
  name: string;
  options: { name: string; content: any }[];
}

export const AssetOptions: EditAssetOption[] = [
  {
    name: "computers",
    options: [
      { name: "EditUno", content: <ComputerForm /> },
      { name: "EditDos", content: <CartridgeForm /> },
    ],
  },
  {
    name: "/assets/edit/compute",
    options: [{ name: "EditUno", content: <MonitorForm /> }],
  },
  {
    name: "Consumables",
    options: [
      { name: "EditUno", content: <ComputerForm /> },
      { name: "EditDos", content: <CartridgeForm /> },
      { name: "EditTres", content: <CartridgeForm /> },
      { name: "EditCuatro", content: <CartridgeForm /> },
    ],
  },
  {
    name: "/assets/edit/computers",
    options: [
      { name: "EditUno", content: <ComputerForm /> },
      { name: "EditDos", content: <CartridgeForm /> },
      { name: "EditTres", content: <MonitorForm /> },
      { name: "EditCuatro", content: <CartridgeForm /> },
      { name: "EditCinco", content: <CartridgeForm /> },
      { name: "EditSeis", content: <CartridgeForm /> },
    ],
  },
];
