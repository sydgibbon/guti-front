import React from 'react';
import { TbPlus, TbList, TbMap, TbUsb } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const DeviceForm = () => {

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
      title: "Brand",
      type: "input",
      key: "brand", //backend key?
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
      title: "Devices",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

    return (
      FormsTemplate (formPropierties, FormHeader)
    )
}

export default DeviceForm