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
      key: "phonetypes_id",
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
      key: "phonemodels_id",
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
      key: "users_id",
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
      key: "groups_id",
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
      title: "Update Sources",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
    {
      title: "Number of lines",
      type: "number",
      key: "number_line",
    },
    {
      title: "Phone power supply types",
      type: "select",
      key: "phonepowersupplies_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Ports",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "Headset",
					key: "have_headset",
				},
        {
					subTitle: "Speakers",
					key: "have_hp", //key speakers?
				},
      ]
    },
  ]

  const FormHeader = [
    {
      title: "Phones",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PhoneForm;