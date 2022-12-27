import FormsTemplate from '../FormsTemplate';
import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { TbPlus, TbList, TbMap } from "react-icons/tb";
import SelectComponent from "../../atomic/SelectComponent";
import { saveAsset, BASE_URL } from "../../../api/axios";
import LocationsSubForm from "../../subforms/LocationsSubForm";

const ComputerForm = () => {
  let formFields = {}
  let formData = new FormData()
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formFields).forEach(key => {
      formData.append(key, formFields[key])
    })
    saveAsset('computers', formData)
  }
  const handleChange = (e) => {
    formFields[e.target.id] = e.target.value;
  }
  const handleChangeSelect = (data) => {
    formFields[data.id] = data.value;
  }

  // Modal Validations
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
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
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "users_tech_id",
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
      title: "Alternate Username Number",
      type: "input",
      key: "contact_num",
    },
    {
      title: "Alternate Username",
      type: "input",
      key: "contact",
    },
    {
      title: "User",
      type: "select",
      key: "users_id",
      addList: true,
    },
    {
      title: "Group",
      type: "select",
      key: "groups_id",
      addList: true,
      addNew: true,
    },

    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Status",
      type: "select",
      key: "states_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Types",
      type: "select",
      key: "computertypes_id",
      addList: true,
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
      title: "Model",
      type: "select",
      key: "computermodels_id",
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
      title: "Network",
      type: "select",
      key: "networks_id",
      addList: true,
    },
    {
      title: "UUID",
      type: "input",
      key: "uuid",
    },
    {
      title: "Update Sources",
      type: "select",
      key: "update_sources", // key?
      addList: true,
      addNew: true,
    },
  ]

  const FormHeader = [
    {
      title: "Computers",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  )
};


// const ComputerForm = () => {

// const inputPropierties = [
//   {
//     title: "Name",
//     type: "input",
//     key: "name",
//   },
//   {
//     title: "Locations",
//     type: "select",
//     key: "locations",
//     addList: true,
//     addNew: true,
//     addMap: true,
//   },
//   {
//     title: "Technician in Charge of the Hardware",
//     type: "select",
//     key: "computermodels",
//     addNew: true,
//   },
//   {
//     title: "Group in Charge of the Hardware",
//     type: "select",
//     key: "computertypes",
//     addList: true,
//     addNew: true,
//   },
//   {
//     title: "Alternate Username Number",
//     type: "input",
//     key: "contact_number",
//   },
//   {
//     title: "Alternate Username",
//     type: "input",
//     key: "contact",
//   },
//   {
//     title: "User",
//     type: "select",
//     key: "user",
//     addList: true,
//   },
//   {
//     title: "Group",
//     type: "select",
//     key: "group",
//     addList: true,
//     addNew: true,
//   },

//   {
//     title: "Comment",
//     type: "textarea",
//     key: "comment",
//   },
//   {
//     title: "Status",
//     type: "select",
//     key: "status",
//     addList: true,
//     addNew: true,
//   },
//   {
//     title: "Types",
//     type: "select",
//     key: "types",
//     addList: true,
//     addNew: true,
//   },
//   {
//     title: "Manufacturers",
//     type: "select",
//     key: "manufacturers",
//     addList: true,
//     addNew: true,
//   },
//   {
//     title: "Model",
//     type: "select",
//     key: "model",
//     addList: true,
//     addNew: true,
//   },
//   {
//     title: "Serial Number",
//     type: "input",
//     key: "serial",
//   },
//   {
//     title: "Inventory/Asset Number",
//     type: "input",
//     key: "otherserial",
//   },
//   {
//     title: "Network",
//     type: "select",
//     key: "network",
//     addList: true,
//   },
//   {
//     title: "UUID",
//     type: "input",
//     key: "uuid",
//   },
//   {
//     title: "Update Sources",
//     type: "select",
//     key: "update_sources",
//     addList: true,
//     addNew: true,
//   },
// ]

// const FormHeader = [
//   {
//     title: "Computers",
//     style: "inline my-auto mr-2",
//     size: 24,
//   },
// ]
// return (
//   FormsTemplate(inputPropierties, FormHeader)
// )
// }

export default ComputerForm