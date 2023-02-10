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
      key: "types",
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
      title: "Update Source",
      type: "select",
      key: "update_sources",
      addList: true,
      addNew: true,
    },
  ]
  
  const FormHeader = [
    {
      title: "Device",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

    return (
      FormsTemplate (formPropierties, FormHeader)
    )
}

export default DeviceForm