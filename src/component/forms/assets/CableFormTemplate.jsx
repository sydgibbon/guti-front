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
      key: "cabletypes_id",
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
      key: "cablestrands_id",
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
      key: "items_endpoint_a_id",    //ver con syd
    },
    {
      title: "Asset",
      type: "select",
      key: "items_endpoint_b_id",
    },
    {
      title: "Socket model",
      type: "select",
      key: "socketmodels_endpoint_a_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket model",
      type: "select",
      key: "socketmodels_endpoint_b_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "sockets_endpoint_a_id",
      addList: true,
    },
    {
      title: "Socket",
      type: "select",
      key: "sockets_endpoint_b_id",
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