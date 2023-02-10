import React from 'react';
import { TbPlus, TbList, TbMap, TbBrowser } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const PassiveDeviceForm = () => {

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
      key: "passivedcequipmenttypes",
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
      key: "passivedcequipmentmodels",
      addList: true,
      addNew: true,
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
    {
      title: "Inventory Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    }
  ]

  const FormHeader = [
    {
      title: "Passive device",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PassiveDeviceForm;