import React from 'react'
import { TbPlus, TbList, TbMap, TbSitemap } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const NetworkDeviceForm = () => {

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
      key: "networkequipmenttypes",
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
      key: "networkequipmentmodels",
      addList: true,
      addNew: true,
    },
		{
      title: "Alternate Username Number",
      type: "input",
      key: "contact_num", // ?
    },
		{
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
		{
      title: "Alternate Username",
      type: "input",
      key: "contact", // ?
    },
		{
      title: "Inventory",
      type: "input",
      key: "otherserial",
    },
		{
      title: "System Description",
      type: "input",
      key: "sysdescr",
    },
		{
      title: "User",
      type: "select",
      key: "users",
      addList: true,
    },
		{
      title: "Network",
      type: "input",
      key: "network",
			addList: true,
      addNew: true,
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
      title: "Memory",
      type: "input",
      key: "ram",
    },
		{
      title: "Update Source",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
  ]

	const FormHeader = [
		{
      title: "Network device",
      style: "inline my-auto mr-2",
      size: 24,
    },
	]


	return (
		FormsTemplate (formPropierties, FormHeader,)
	);
};

export default NetworkDeviceForm;