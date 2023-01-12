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
      title: "Location",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Status",
      type: "select",
      key: "states",
      addList: true,
      addNew: true,
    },
    {
      title: "PIN Code",
      type: "input",
      key: "pin",
      isPassword: true,
      addPaste: true,
    },
    {
      title: "PIN Code 2",
      type: "input",
      key: "pin2",
      isPassword: true,
      addPaste: true,
    },
    {
      title: "PUK Code",
      type: "input",
      key: "puk",
      isPassword: true,
      addPaste: true,
    },
    {
      title: "PUK Code 2",
      type: "input",
      key: "puk2",
      isPassword: true,
      addPaste: true,
    },
    {
      title: "Lines",
      type: "select",
      key: "lines",
      addList: true,
    },
    {
      title: "Mobile Subscriber Identification Number",
      type: "input",
      key: "manufacturers", //key
    },
    {
      title: "User",
      type: "select",
      key: "users",
      addList: true,
    },
    {
      title: "User",
      type: "select",
      key: "users",
      addList: true,
      addNew: true,
    },
  ]

  const FormHeader = [
    {
      title: "Simcard",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default SimcardForm;
