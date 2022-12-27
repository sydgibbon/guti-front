import React from "react";
import { FaPaste, FaRegEye, FaInfo } from 'react-icons/fa';
import { TbPlus, TbList, TbMap, TbFileBarcode } from "react-icons/tb";
import FormsTemplate from '../FormsTemplate';

const SimcardForm = () => {

  const formPropierties = [
    {
      title: "Item",
    },
    {
      title: "Component",
      type: "select",
      key: "itemtype",
      addList: true,
      addNew: true,
    },
    {
      title: "Serial Number",
      type: "input",
      key: "serial",
    },
    {
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
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
      title: "Status",
      type: "select",
      key: "states_id",
      addList: true,
      addNew: true,
    },
    {
      title: "PIN Code",
      type: "select",
      key: "pin",
      addEye: true,
      addPaste: true,
    },
    {
      title: "PIN Code 2",
      type: "select",
      key: "pin2",
      addEye: true,
      addPaste: true,
    },
    {
      title: "PUK Code",
      type: "select",
      key: "puk",
      addEye: true,
      addPaste: true,
    },
    {
      title: "PUK Code 2",
      type: "select",
      key: "puk2",
      addEye: true,
      addPaste: true,
    },
    {
      title: "Lines",
      type: "select",
      key: "lines_id",
      addList: true,
    },
    {
      title: "Mobile Subscriber Identification Number",
      type: "input",
      key: "manufacturers_id", //key
    },
    {
      title: "User",
      type: "select",
      key: "users_id",
      addList: true,
    },
    {
      title: "User",
      type: "select",
      key: "users_id",
      addList: true,
      addNew: true,
    },
  ]

  const FormHeader = [
    {
      title: "Simcards",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default SimcardForm;
