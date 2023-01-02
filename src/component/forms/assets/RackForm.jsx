import React from "react";
import { TbPlus, TbList, TbMap, TbServer } from "react-icons/tb";
import FormsTemplate from '../FormsTemplate';

const RackForm = () => {

  const formPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Status",
      type: "select",
      key: "states",
      addList: true,
      addNew: true,
    },
    {
      title: "Location",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Type",
      type: "select",
      key: "racktypes",
      addList: true,
      addNew: true,
    },
    {
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "users_tech",
      addNew: true,
    },
    {
      title: "Manufacturer",
      type: "select",
      key: "manufacturers",
      addList: true,
      addNew: true,
    },
    {
      title: "Group in Charge of the Hardware",
      type: "select",
      key: "groups_tech",
      addList: true,
      addNew: true,
    },
    {
      title: "Model",
      type: "select",
      key: "rackmodels",
      addList: true,
      addNew: true,
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
    {
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Server room",
      type: "select",
      key: "users_tech",
      addNew: true,
    },
    {
      title: "Position in room",
      type: "text",
      key: "position"
    },
    {
      title: "Door orientation in room",
      type: "orientation",
      key: "room_orientation", // ver con syd
    },
    {
      title: "Number of unit",
      type: "number",
      key: "number_units",
    },
    {
      title: "Width",
      type: "number",
      key: "width",
    },
    {
      title: "Height",
      type: "number",
      key: "height",
    },
    {
      title: "Depth",
      type: "number",
      key: "depth",
    },
    {
      title: "Max. power (in watts)",
      type: "number",
      key: "max_power",
    },
    {
      title: "Measured Power (in watts)",
      type: "number",
      key: "mesured_power",
    },
    {
      title: "Max. weight",
      type: "number",
      key: "max_weight",
    },
    {
      title: "Background color",
      type: "color",
      key: "bgcolor", // ver con syd
    },
  ]

  const FormHeader = [
    {
      title: "Rack",
      style: "inline my-auto mr-2",
      size: 24,
    }
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  );
};

export default RackForm;
