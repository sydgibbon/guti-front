import React from 'react'
import { TbPlus, TbList, TbMap, TbPlug } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const PduForm = () => {

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
      key: "pdutypes",
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
      key: "pdumodels",
      addList: true,
      addNew: true,
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
  ]

  const FormHeader = [
    {
      title: "PDUs",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PduForm;