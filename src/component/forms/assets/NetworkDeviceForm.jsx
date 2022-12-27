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
      key: "networkequipmenttypes_id",
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
      key: "networkequipmentmodels_id",
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
      key: "users_id",
      addList: true,
    },
		{
      title: "Network",
      type: "input",
      key: "network_id",
			addList: true,
      addNew: true,
    },
		{
      title: "Groups",
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
      title: "Memory",
      type: "input",
      key: "ram",
    },
		{
      title: "Update Sources",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
  ]

	const FormHeader = [
		{
      title: "Network devices",
      style: "inline my-auto mr-2",
      size: 24,
    },
	]


	return (
		FormsTemplate (formPropierties, FormHeader,)
	);
};

export default NetworkDeviceForm;