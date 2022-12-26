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
      key: "status",
      addList: true,
      addNew: true,
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Types",
      type: "select",
      key: "types",
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
      key: "monitormodels_id",
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
    },
    {
      title: "Door orientation in room",
      type: "select",
      key: "users_tech_id", // ver con syd
    },
    {
      title: "Number of units",
      type: "number",
      key: "size",
    },
    {
      title: "Width",
      type: "number",
      key: "size",
    },
    {
      title: "Height",
      type: "number",
      key: "size",
    },
    {
      title: "Depth",
      type: "number",
      key: "size",
    },
    {
      title: "Max. power (in watts)",
      type: "number",
      key: "size",
    },
    {
      title: "Measured Power (in watts)",
      type: "number",
      key: "size",
    },
    {
      title: "Max. weight",
      type: "number",
      key: "size",
    },
    {
      title: "Background color",
      type: "select",
      key: "users_tech_id", // ver con syd
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
