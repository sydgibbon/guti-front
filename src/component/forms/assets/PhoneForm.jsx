import React from "react";
import { TbPlus, TbList, TbMap, TbPhone } from "react-icons/tb";
import FormsTemplate from "../FormsTemplate";

const PhoneForm = () => {

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
      key: "phonetypes",
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
      key: "phonemodels",
      addList: true,
      addNew: true,
    },
    {
      title: "Alternate Username Number",
      type: "input",
      key: "contact_num",
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
    {
      title: "Alternate Username",
      type: "input",
      key: "contact",
    },
    {
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "User",
      type: "select",
      key: "users",
      addList: true,
    },
    {
      title: "Managment Type",
      type: "select",
      key: "user", // key?
    },
    {
      title: "Group",
      type: "select",
      key: "groups",
      addList: true,
      addNew: true,
    },
    {
      title: "UUID",
      type: "input",
      key: "uuid",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Brand",
      type: "input",
      key: "brand",
    },
    {
      title: "Update Source",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
    {
      title: "Number of line",
      type: "number",
      key: "number_line",
    },
    {
      title: "Phone power supply type",
      type: "select",
      key: "phonepowersupplies",
      addList: true,
      addNew: true,
    },
    {
      title: "Port",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "Headset",
					key: "have_headset",
				},
        {
					subTitle: "Speaker",
					key: "have_hp", //key speakers?
				},
      ]
    },
  ]

  const FormHeader = [
    {
      title: "Phone",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PhoneForm;