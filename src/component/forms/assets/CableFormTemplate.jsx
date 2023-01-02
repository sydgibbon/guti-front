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
      title: "Type",
      type: "select",
      key: "cabletypes",
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
      key: "cablestrands",
      addList: true,
      addNew: true,
    },
    {
      title: "Color",
      type: "color",
      key: "color",
    },
    {
      title: "Asset",
      type: "select",
      key: "items_endpoint_a",    //ver con syd
    },
    {
      title: "Asset",
      type: "select",
      key: "items_endpoint_b",
    },
    {
      title: "Socket model",
      type: "select",
      key: "socketmodels_endpoint_a",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket model",
      type: "select",
      key: "socketmodels_endpoint_b",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "sockets_endpoint_a",
      addList: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "sockets_endpoint_b",
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
      title: "Cable",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate (formPropierties, FormHeader)
  );
};

export default CableFormTemplate;