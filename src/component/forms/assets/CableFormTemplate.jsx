import React from 'react'
import { Form } from 'react-router-dom';
import FormsTemplate from '../FormsTemplate';

const CableFormTemplate = () => {

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
      title: "Inventory/Asset Number",
      type: "input",
      key: "otherserial",
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Cable Strand",
      type: "select",
      key: "group",
      addList: true,
      addNew: true,
    },
    {
      title: "Color",
      type: "input",
      key: "color",
    },
    {
      title: "Asset",
      type: "select",
      key: "user",    //ver con syd
    },
    {
      title: "Asset",
      type: "select",
      key: "user",
    },
    {
      title: "Socket model",
      type: "select",
      key: "group",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket model",
      type: "select",
      key: "group",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "group",
      addList: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "group",
      addList: true,
    },
    {
      title: "Position",
    },
    {
      title: "Position",
    },
  ]

  const FormHeader = [
		{
      title: "Cables",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default CableFormTemplate;