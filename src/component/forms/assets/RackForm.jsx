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
      key: "states_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Locations",
      type: "select",
      key: "locations_id",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Types",
      type: "select",
      key: "racktypes_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "users_tech_id",
      addNew: true,
    },
    {
      title: "Manufacturers",
      type: "select",
      key: "manufacturers_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Group in Charge of the Hardware",
      type: "select",
      key: "groups_tech_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Model",
      type: "select",
      key: "rackmodels_id",
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
      title: "Server rooms",
      type: "select",
      key: "users_tech_id",
      addNew: true,
    },
    {
      title: "Position in room",
      text: "No room found or selected", // ver con syd
      key: "position"
    },
    {
      title: "Door orientation in room",
      type: "select",
      key: "room_orientation", // ver con syd
    },
    {
      title: "Number of units",
      type: "number_units",
      key: "size",
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
      type: "select",
      key: "bgcolor", // ver con syd
    },
  ]

  const FormHeader = [
    {
      title: "Racks",
      style: "inline my-auto mr-2",
      size: 24,
    }
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  );
};

export default RackForm;
