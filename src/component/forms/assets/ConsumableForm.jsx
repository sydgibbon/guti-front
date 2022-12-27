import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { TbPlus, TbList, TbMap, } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const ConsumablesForm = () => {

  let values =
    Array.from(Array(101).keys());

  const formPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
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
      key: "consumableitemtypes_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Reference",
      type: "input",
      key: "ref",
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
      title: "Inventory Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Alert Threshold",
      type: "number",
      key: "alarm_threshold",
    },
    {
      title: "Pictures",
      type: "input",
      key: "pictures",
    },
    {
      title: "Stock Target",
      type: "number",
      key: "stock_target",
    },
  ]

  const FormHeader = [
    {
      title: "Consumables",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default ConsumablesForm;