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
      key: "user",
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
      key: "group",
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
					key: "check1",
				},
        {
					subTitle: "Speakers",
					key: "check2",
				},
        {
					subTitle: "Sub-D",
					key: "check3",
				},
        {
					subTitle: "BNC",
					key: "check4",
				},
        {
					subTitle: "DVI",
					key: "check5",
				},
        {
					subTitle: "Pivot",
					key: "check6",
				},
        {
					subTitle: "HDMI",
					key: "check7",
				},
        {
					subTitle: "DisplayPort",
					key: "check8",
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
