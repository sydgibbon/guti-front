import React from "react";
import { TbPlus, TbList, TbMap } from "react-icons/tb";
import { BsDisplay } from "react-icons/bs";
import FormsTemplate from '../FormsTemplate';

const MonitorForm = () => {

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
      key: "monitortypes",
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
      key: "monitormodels",
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
      key: "user",
    },
    {
      title: "Size",
      type: "number",
      key: "size",
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
      title: "Update Source",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
    {
      title: "Port",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "Microphone",
					key: "have_micro",
				},
        {
					subTitle: "Speaker",
					key: "have_speaker",
				},
        {
					subTitle: "Sub-D",
					key: "have_subd",
				},
        {
					subTitle: "BNC",
					key: "have_bnc",
				},
        {
					subTitle: "DVI",
					key: "have_dvi",
				},
        {
					subTitle: "Pivot",
					key: "have_pivot",
				},
        {
					subTitle: "HDMI",
					key: "have_hdmi",
				},
        {
					subTitle: "DisplayPort",
					key: "have_displayport",
				},
			],
    },
  ]

  const FormHeader = [
    {
      title: "Monitor",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  );
};

export default MonitorForm;
