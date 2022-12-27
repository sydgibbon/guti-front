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
      key: "monitortypes_id",
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
      title: "Update Sources",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
    {
      title: "Ports",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "Microphone",
					key: "have_micro",
				},
        {
					subTitle: "Speakers",
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
      title: "Monitors",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  );
};

export default MonitorForm;
