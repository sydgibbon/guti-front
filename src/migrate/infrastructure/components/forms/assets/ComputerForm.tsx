import FormsTemplate from "../FormsTemplate";
import { useState } from "react";
import { saveAsset } from "../../../../../api/axios";

let formFields: any = {};

let formData = new FormData();

const formPropierties = [
  {
    title: "Name",
    type: "input",
    key: "name",
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
    title: "Technician in Charge of the Hardware",
    type: "select",
    key: "users_tech",
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
    key: "users",
    addList: true,
  },
  {
    title: "Group",
    type: "select",
    key: "groups",
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
    key: "states",
    addList: true,
    addNew: true,
  },
  {
    title: "Type",
    type: "select",
    key: "computertypes",
    addList: true,
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
    title: "Model",
    type: "select",
    key: "computermodels",
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
    key: "networks",
    addList: true,
  },
  {
    title: "UUID",
    type: "input",
    key: "uuid",
  },
  {
    title: "Update Source",
    type: "select",
    key: "update_sources", // key?
    addList: true,
    addNew: true,
  },
];

const FormHeader = [
  {
    title: "Computer",
    style: "inline my-auto mr-2",
    size: 24,
  },
];

const ComputerForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    Object.keys(formFields).forEach((key) => {
      formData.append(key, formFields[key]);
    });
    saveAsset("computers", formData);
  };

  const handleChange = (e: any) => {
    formFields[e.target.id] = e.target.value;
  };

  const handleChangeSelect = (data: any) => {
    formFields[data.id] = data.value;
  };

  // Modal Validations
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return FormsTemplate({ inputPropierties: formPropierties, FormHeader });
};

export default ComputerForm;