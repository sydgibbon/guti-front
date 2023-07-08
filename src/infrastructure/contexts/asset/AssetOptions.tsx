import CartridgeForm from "../../components/forms/CartridgeForm";
import ComputerForm from "../../components/forms/ComputerForm";
import MonitorForm from "../../components/forms/MonitorForm";
import NetDeviceForm from "../../components/forms/NetworkDeviceForm";
import SoftwareForm from "../../components/forms/SoftwareForm";

export interface EditAssetOption {
  name: string;
  options: { name: string; content: any }[];
}

export const AssetOptions: EditAssetOption[] = [
  {
    name: "Computers",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Impact Analysis", content: "" },
      { name: "Operating Systems", content: "" },
      { name: "Components", content: "" },
      { name: "Volumes", content: "" },
      { name: "Software", content: "" },
      { name: "Conections", content: "" },
      { name: "Network Ports", content: "" },
      { name: "Sockets", content: "" },
      { name: "Remote Management", content: "" },
      { name: "Management", content: "" },
      { name: "Contracts", content: "" },
      { name: "Documents", content: "" },
      { name: "Virtualization", content: "" },
      { name: "Antiviruses", content: "" },
      { name: "Knowledge Base", content: "" },
      { name: "Tickets", content: "" },
      { name: "Problems", content: "" },
      { name: "Changes", content: "" },
      { name: "Links", content: "" },
      { name: "Certificates", content: "" },
      { name: "Notes", content: "" },
      { name: "Reservations", content: "" },
      { name: "Domains", content: "" },
      { name: "Appliances", content: "" },
      { name: "Database Instances", content: "" },
      { name: "Historical", content: "" },
      { name: "All", content: "" },
    ],
  },
  {
    name: "Monitors",
    options: [
      { name: "Monitors", content: <MonitorForm /> },
      { name: "Impact Analysis", content: "" },
      { name: "Operating Systems", content: "" },
      { name: "Software", content: "" },
      { name: "Connections", content: "" },
      { name: "Network Ports", content: "" },
      { name: "Management", content: "" },
      { name: "Contracts", content: "" },
      { name: "Documents", content: "" },
      { name: "Knowledge Base", content: "" },
      { name: "Tickets", content: "" },
      { name: "Problems", content: "" },
      { name: "Changes", content: "" },
      { name: "Links", content: "" },
      { name: "Notes", content: "" },
      { name: "Reservations", content: "" },
      { name: "Domains", content: "" },
      { name: "Appliances", content: "" },
      { name: "Historical", content: "" },
      { name: "All", content: "" },
    ],
  },
  {
    name: "Software",
    options: [
      { name: "Software", content: <SoftwareForm /> },
      { name: "Impact Analysis", content: "" },
      { name: "Versions", content: "" },
      { name: "Licenses", content: "" },
      { name: "Installations", content: "" },
      { name: "Management", content: "" },
      { name: "Contracts", content: "" },
      { name: "Documents", content: "" },
      { name: "Knowledge Base", content: "" },
      { name: "Tickets", content: "" },
      { name: "Problems", content: "" },
      { name: "Changes", content: "" },
      { name: "Links", content: "" },
      { name: "Notes", content: "" },
      { name: "Reservations", content: "" },
      { name: "Domains", content: "" },
      { name: "Appliances", content: "" },
      { name: "Historical", content: "" },
      { name: "All", content: "" },
    ],
  },
  {
    name: "Networkequipments",
    options: [
      { name: "Network Devices", content: <NetDeviceForm /> },
      { name: "Impact Analysis", content: "" },
      { name: "Operating Systems", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Devices",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Printers",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Cartridges",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Consumables",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Phones",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Racks",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Enclosures",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "PDUs",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Passive Devices",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Unmanaged Devices",
    options: [],
  },
  {
    name: "Cables",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
  {
    name: "Simcards",
    options: [
      { name: "Computers", content: <ComputerForm /> },
      { name: "Components", content: "" },
      { name: "Components", content: "" },
    ],
  },
];
