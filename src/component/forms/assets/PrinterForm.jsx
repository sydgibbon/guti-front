// rafce
import React from 'react';
import { BsPrinter } from 'react-icons/bs';
import { TbPlus, TbList, TbMap } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const PrinterForm = () => {

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
      title: "Sysdescr",
      type: "textarea",
      key: "sysdescr",
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
      title: "Network",
      type: "select",
      key: "network",
      addList: true,
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
      title: "Memory",
      type: "input",
      key: "ram",
    },
    {
      title: "Initial page counter",
      type: "number",
      key: "init_pages_counter",
    },
    {
      title: "Current counter of pages",
      type: "number",
      key: "init_pages_counter",
    },
    {
      title: "Ports",
      type: "checkbox",
      subCheckBox: [
				{
					subTitle: "Serial",
					key: "check1",
				},
        {
					subTitle: "Parallel",
					key: "check2",
				},
        {
					subTitle: "USB",
					key: "check3",
				},
        {
					subTitle: "Ethernet",
					key: "check4",
				},
        {
					subTitle: "Wifi",
					key: "check5",
				},
      ]
    }
  ]

  const FormHeader = [
    {
      title: "Printers",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]
  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PrinterForm;