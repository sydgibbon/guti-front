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
      key: "passivedcequipmenttypes_id",
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
      key: "passivedcequipmentmodels_id",
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
      title: "Passive devices",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default PassiveDeviceForm;